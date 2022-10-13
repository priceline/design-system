import React from 'react'

export type IScaledTextProps = {
  values: {
    value: string
    props?: React.SVGProps<SVGTextElement>
  }[]
  color?: string
}

const ScaledText = ({ values, color }: IScaledTextProps) => {
  React.useEffect(() => {
    document.querySelectorAll('.svg-text').forEach((svg) => {
      const text = svg.querySelector('text')
      const bbox = text.getBBox()
      svg.setAttribute('viewBox', [bbox.x, bbox.y, bbox.width, bbox.height].join(' '))
    })
  }, [])

  return (
    <>
      {values.map((x, i) => (
        <svg key={i} className='svg-text'>
          <text fill={x.props?.fill ?? color} {...x.props}>
            {x.value}
          </text>
        </svg>
      ))}
    </>
  )
}

ScaledText.displayName = 'ScaledText'

export default ScaledText
