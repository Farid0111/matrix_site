export function trackFacebookEvent(eventName, options = {}) {
  if (typeof window === 'undefined') {
    return
  }

  if (!window.__fbqInitialized) {
    const tries = window.__fbqInitTries || 0
    if (tries < 20) {
      window.__fbqInitTries = tries + 1
      setTimeout(() => trackFacebookEvent(eventName, options), 100)
    }
    return
  }

  const fbq = window.fbq
  if (typeof fbq !== 'function') {
    return
  }

  try {
    fbq('track', eventName, options)
  } catch {
    // ignore tracking errors
  }
}
