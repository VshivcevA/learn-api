export default function getTime(): void {
	const date = new Date();
	const h = date.getHours() < 10 ? '0' + date.getHours() : date.getHours();
	const m = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes();
	const s = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds();
	const time = `${h}:${m}:${s}`;
	console.log(time);
}
