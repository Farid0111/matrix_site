export function trackFacebookEvent(eventName, options = {}) {
  if (typeof window === 'undefined') {
    return
  }

  const fbq = window.fbq
  if (typeof fbq !== 'function') {
    return
  }

  try {
    fbq('track', eventName, options)
  } catch {
    // ignore tracking errors in development or if pixel is not initialized
  }
}
