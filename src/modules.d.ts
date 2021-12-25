declare module "*.css"

declare module "*.mp3"

declare interface DatetimeData {
  remaining: boolean
  years: number
  months: number
  days: number
  hours: number
  minutes: number
  seconds: number
}

declare interface NativeObject {
  [propertyName: string]: any
}

declare interface Time {
  hours: string
  minutes: string
  seconds: string
  separator: string
  format?: string
}

declare interface SectionChild {
  self: HTMLElement
  clickEvent?: (evt: MouseEvent) => boolean
  keyboardEvent?: (evt: KeyboardEvent) => boolean
  changeEvent?: (evt: Event) => boolean
}

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
