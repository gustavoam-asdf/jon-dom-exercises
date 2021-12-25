declare interface DatetimeData {
  remaining: boolean
  years: number
  months: number
  days: number
  hours: number
  minutes: number
  seconds: number
}

declare interface Time {
  hours: string
  minutes: string
  seconds: string
  separator: string
  format?: string
}
