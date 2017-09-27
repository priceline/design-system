import chroma from 'chroma-js'

export const tint = color => n => chroma.scale([ '#fff', color ])(n).hex()
export const darken = color => chroma(color).darken().hex()
export const brighten = color => chroma(color).brighten().hex()
