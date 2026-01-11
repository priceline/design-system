import React from 'react'
import { Text } from '../Text/Text'

/**
 * Semantic heading component for titles and section headers.
 *
 * Renders as an `<h3>` by default. Use dot notation (`Heading.h1` through `Heading.h6`)
 * for specific heading levels. Inherits all Text props for typography control.
 * Use `enableTextShadow` for drop shadow effects on hero text.
 */
export const Heading = (props) => <Text as='h3' {...props} />

Heading.displayName = 'Heading'

Heading.h1 = (props) => <Heading as='h1' textShadowSize='md' {...props} />
Heading.h2 = (props) => <Heading as='h2' textShadowSize='md' {...props} />
Heading.h3 = (props) => <Heading as='h3' textShadowSize='sm' {...props} />
Heading.h4 = (props) => <Heading as='h4' textShadowSize='sm' {...props} />
Heading.h5 = (props) => <Heading as='h5' textShadowSize='sm' {...props} />
Heading.h6 = (props) => <Heading as='h6' textShadowSize='sm' {...props} />
