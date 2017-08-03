import chroma from 'chroma-js'

export const tint = color => n => chroma.scale([ '#fff', color ])(n).hex()
