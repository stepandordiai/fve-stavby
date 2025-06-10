declare module "*.module.scss" {
	const classes: { [key: string]: string };
	export default classes;
}

declare module "*.png" {
	const content: string;
	export default content;
}

declare module "*.svg" {
	const content: string;
	export default content;
}

declare module "*.jpg" {
	const content: string;
	export default content;
}
