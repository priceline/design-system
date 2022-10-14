import React from 'react'
import { v4 as uuidv4 } from 'uuid'

export type IScaledTextProps = {
  id?: React.Key
  lines: {
    text: string
    key?: React.Key
    props?: React.SVGProps<SVGTextElement>
  }[]
  color?: string
}

const ScaledText = ({ id, lines, color }: IScaledTextProps) => {
  const _id = id ?? uuidv4()
  const className = `svg-text-${_id}`

  React.useEffect(() => {
    document.querySelectorAll('.' + className).forEach((svg) => {
      const text = svg.querySelector('text')
      const bbox = text.getBBox()
      svg.setAttribute('viewBox', [bbox.x, bbox.y, bbox.width, bbox.height].join(' '))
    })
  }, [])

  return (
    <>
      {lines.map((line) => (
        <svg key={line.key ?? JSON.stringify(line)} className={className}>
          <text title={line.text} fill={line.props?.fill ?? color} {...line.props}>
            {line.text}
          </text>
        </svg>
      ))}
    </>
  )
}

ScaledText.displayName = 'ScaledText'

export default ScaledText
