const canvasMock = typeof document === 'object' ? document.createElement('canvas') : {}
canvasMock.width = canvasMock.height = 1

// If canvas supports webp, the returned Data URLs would  be prefixed with "data:".
// Thus data starts at index 5, after the prefix.
// https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/Data_URIs
/* istanbul ignore next */
export const detectWebPSupport = () => canvasMock.toDataURL
  ? canvasMock.toDataURL('image/webp').indexOf('image/webp') === 5 : false
