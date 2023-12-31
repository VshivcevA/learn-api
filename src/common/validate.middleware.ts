import { NextFunction, Request, Response } from 'express';
import { IMiddleWare } from './middleware.interface';
import { ClassConstructor, plainToInstance } from 'class-transformer';
import { validate } from 'class-validator';

export class ValidateMiddleware implements IMiddleWare {
	constructor(private classToValidate: ClassConstructor<object>) {}

	execute({ body }: Request, res: Response, next: NextFunction): void {
		const instance = plainToInstance(this.classToValidate, body);
		validate(instance).then((errors) => {
			if (errors.length) {
				res.status(422).send(errors);
			} else {
				next();
			}
		});
	}
}
