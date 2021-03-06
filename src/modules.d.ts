declare module "*.css"

declare module "*.mp3"

declare module "*.mp4"

declare interface NativeObject {
	[propertyName: string]: any
}

declare type EventHandler<U extends Event> = (event: U) => boolean

declare interface AuxiliaryKeys {
	meta?: boolean
	ctrl?: boolean
	shift?: boolean
	alt?: boolean
}

declare type Movement = (displacement?: number) => number
declare interface Move {
	up: Movement
	down: Movement
	left: Movement
	right: Movement
}

declare interface ThemeData {
	isDark: boolean
}

declare interface SourceData {
	mediaQuery: string
	src: string
	matcher?: MediaQueryList
}
