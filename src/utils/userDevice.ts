function userDevice() {
	const userAgent = navigator.userAgent

	const isAndroid = userAgent.search(/android/i) !== -1

	const isIOS = userAgent.search(/iphone|ipad|ipod/i) !== -1

	const isDesktop = !isAndroid && !isIOS

	const isLinux = userAgent.search(/linux/i) !== -1

	const isMac = userAgent.search(/mac os/i) !== -1

	const isWindows = userAgent.search(/windows nt/i) !== -1

	const isChrome = userAgent.search(/chrome/i) !== -1

	const isSafari = userAgent.search(/safari/i) !== -1

	const isFirefox = userAgent.search(/firefox/i) !== -1

	const isOpera = userAgent.search(/opera|opera mini/i) !== -1

	const isIE = userAgent.search(/msie|iemobile/i) !== -1

	const isEdge = userAgent.search(/edge/i) !== -1

	return {
		isDesktop,
		os: {
			mobile: { isAndroid, isIOS },
			desktop: { isLinux, isMac, isWindows }
		},
		browser: {
			isChrome,
			isSafari,
			isFirefox,
			isOpera,
			isIE,
			isEdge
		}
	}
}

const userDeviceData = userDevice()

export default Object.freeze(userDeviceData)

export function detectOS() {
	const os = userDeviceData.isDesktop
		? Object.entries(userDeviceData.os.desktop).find(([, value]) => value)?.[0]
		: Object.entries(userDeviceData.os.mobile).find(([, value]) => value)?.[0]

	return os?.slice(2) as string
}
