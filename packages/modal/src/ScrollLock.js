export default class ScrollLock {
  constructor() {
    this.currentPos = 0
    this.tag = null
    this.head = document.head
  }

  getCurrentPos() {
    return (
      window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop
    )
  }

  createStyleTag() {
    const css = `
      body {
        overflow: hidden !important;
        position: fixed;
        top: -${this.currentPos}px;
        left: 0;
        width: 100%;
      }
    `
    let tag = document.createElement('style')
    tag.type = 'text/css'
    tag.setAttribute('data-react-scrolllock', '')
    tag.appendChild(document.createTextNode(css))
    this.head.appendChild(tag)
    this.tag = tag
  }

  on() {
    if (!this.head) return
    this.currentPos = this.getCurrentPos()
    this.createStyleTag()
  }

  off() {
    if (!this.tag) return
    this.head.removeChild(this.tag)
    this.tag = null
    window.scrollTo(0, this.currentPos)
  }
}
