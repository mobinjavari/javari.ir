export const smoothScroll = (targetId: string) => {
  const id = targetId.startsWith('#/') ? targetId.substring(2) : targetId.substring(1)
  const element = document.getElementById(id)

  if (!element) return

  const offset = 80 // navbar height
  const elementPosition = element.getBoundingClientRect().top
  const offsetPosition = elementPosition + window.pageYOffset - offset

  window.scrollTo({
    top: offsetPosition,
    behavior: 'smooth'
  })
}
