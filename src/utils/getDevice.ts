export const getDeviceType = () => {
  const ua = navigator?.userAgent?.toLowerCase()
  const isAndroid = ua?.indexOf('android') > -1
  const isIos = /(iPad|iPhone|iPod)/.test(navigator.userAgent)
  const isMac = /(Mac)/.test(navigator.userAgent)
  return isAndroid ? '1' : isIos ? '2' : isMac ? '3' : '4'
}
