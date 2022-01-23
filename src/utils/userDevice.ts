export default function userDevice() {
  const userAgent = navigator.userAgent

  const isAndroid = userAgent.search(/android/i) !== -1

  const isIOS = userAgent.search(/iphone|ipad|ipod/i) !== -1

  const isDesktop = !isAndroid && !isIOS

  const isLinux = userAgent.search(/linux/i) !== -1

  const isMac = userAgent.search(/mac os/i) !== -1

  const isWindows = userAgent.search(/windows nt/i) !== -1

  return {
    isDesktop,
    mobile: { isAndroid, isIOS },
    desktop: { isLinux, isMac, isWindows }
  }
}
