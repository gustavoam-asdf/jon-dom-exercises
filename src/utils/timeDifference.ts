import moment, { Moment } from "moment"
export default function timeDifference(
  timeOrigin: Moment,
  timeTarget: Moment
): DatetimeData {
  const diff =
    timeTarget > timeOrigin
      ? moment.duration(timeTarget.diff(timeOrigin))
      : moment.duration(timeOrigin.diff(timeTarget))

  return {
    remaining: timeTarget > timeOrigin,
    years: diff.years(),
    months: diff.months(),
    days: diff.days(),
    hours: diff.hours(),
    minutes: diff.minutes(),
    seconds: diff.seconds()
  }
}
