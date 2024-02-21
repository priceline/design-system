const getScrollPercentage = () =>
  (Math.round(window.scrollY) / (document.documentElement.scrollHeight - window.innerHeight)) * 100

const delay = async (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))

const addScrollListener = (handleScroll) => {
  window.addEventListener('scroll', handleScroll, { passive: true })
  return () => {
    window.removeEventListener('scroll', handleScroll)
  }
}

export { getScrollPercentage, delay, addScrollListener }
