/**
 * Create media queries array based on the passed in breakpoints
 *
 * @param breakpoints - The passed in breakpoints array
 *
 * @returns The generated media queries array
 */
const createMediaQueries = (breakpoints) => breakpoints.map((n) => `@media screen and (min-width:${n})`)

export { createMediaQueries }
