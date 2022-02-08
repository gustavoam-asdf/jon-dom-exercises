export default class TimeTarget {
	public self: HTMLDivElement
	public time?: HTMLInputElement
	public usable = false
	static className = `date-target__time`
	static inputId = "time"

	constructor() {
		this.self = this.template()
	}

	get value() {
		if (!this.usable) return
		return this.time?.value
	}

	private template() {
		const timeTarget = document.createElement("div")
		timeTarget.classList.add(TimeTarget.className)

		const timeLabel = document.createElement("label")
		timeLabel.innerText = "Hora:"
		timeLabel.setAttribute("for", TimeTarget.inputId)

		const time = document.createElement("input")
		time.setAttribute("type", TimeTarget.inputId)
		time.setAttribute("name", TimeTarget.inputId)
		time.setAttribute("id", TimeTarget.inputId)

		timeTarget.appendChild(timeLabel)
		timeTarget.appendChild(time)

		this.time = time

		this.time.addEventListener(
			"change",
			() => {
				this.usable = true
			},
			{ once: true }
		)

		return timeTarget
	}
}
