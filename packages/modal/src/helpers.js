export const getHorizontal = props => {
  if (props.size === 'lg') {
    return `
      width: 960px;
      max-width: 100vw;
    `
  } else if (props.size === 'sm') {
    return `
      width: 400px;
      max-width: calc(100vw - 32px);
    `
  } else {
    return `
      width: 480px;
      max-width: calc(100vw - 32px);
    `
  }
}

export const getTopbarHeight = props => {
  if (props.size === 'lg') {
    return '48px'
  } else if (props.size === 'sm') {
    return '8px'
  } else {
    return '40px'
  }
}

export const getVertical = props => {
  if (props.size === 'lg') {
    return `
      height: 100vh;
      ${props.theme.mediaQueries['lg']}{
        height: calc(100vh - 48px);
      }
    `
  } else if (props.size === 'md') {
    return 'height: 360px;'
  } else {
    return `
    min-height: 240px;
    `
  }
}

export const getInnerHeight = props => {
  if (props.size === 'lg') {
    return `
      overflow: scroll;
      height: calc(100% - 48px);
      ${props.theme.mediaQueries['lg']}{
        height: calc(100% - 40px);
      }
    `
  } else if (props.size === 'md') {
    return `
      overflow: scroll;
      height: calc(100% - 40px);
      ${props.theme.mediaQueries['lg']}{
        height: calc(100% - 40px);
      }
    `
  }
}
