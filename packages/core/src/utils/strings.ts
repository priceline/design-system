export function kebabCase(string: string) {
  return string
    .replace(/([a-z])([A-Z])/g, '$1-$2')
    .replace(/[\s_]+/g, '-')
    .toLowerCase()
}

export function upperFirst(string: string) {
  return string ? string.charAt(0).toUpperCase() + string.slice(1) : ''
}
