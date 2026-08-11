export function trackFacebookEvent(eventName, options = {}) {
  if (typeof window === 'undefined') {
    return
  }

  const fbq = window.fbq

  if (typeof fbq !== 'function') {
    const tries = window.__fbqTries || 0
    if (tries < 20) {
      window.__fbqTries = tries + 1
      setTimeout(() => trackFacebookEvent(eventName, options), 100)
    }
    return
  }

  try {
    fbq('track', eventName, options)
  } catch {
    // ignore tracking errors
  }
}
