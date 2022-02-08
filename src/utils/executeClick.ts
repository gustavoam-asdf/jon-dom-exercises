const clicked = ({
	evt,
	deep,
	selector
}: {
	evt: any
	deep: boolean
	selector: string
}): boolean => {
	return (
		evt.target.matches(selector) ||
		(deep ? evt.target.matches(`${selector} *`) : false)
	)
}

export default function executeClick({
	evt,
	selectors,
	deep = true,
	action
}: {
	evt: any
	selectors: string | string[]
	deep?: boolean
	action: () => void
}) {
	let isClicked
	if (typeof selectors === "string") {
		isClicked = clicked({ evt, deep, selector: selectors })
	} else {
		isClicked = selectors.some(selector => clicked({ evt, deep, selector }))
	}
	if (isClicked) action()
	return isClicked
}
