import { useEffect, useState } from 'react'

const TOP_BOX_SHADOW_DEFAULT =
  'inset 0px 3px 0px -1px rgba(79, 111, 143, 0.04), inset 0px 1px 0px 0px rgba(79, 111, 143, 0.10)' // thinner shadow
const TOP_BOX_SHADOW_ACTIVE =
  'inset 0 12px 8px -8px rgba(79, 111, 143, 0.1), inset 0px 1px 0px 0px rgba(79, 111, 143, 0.10)' // thicker shadow, line from the default

function getBoxShadow({ clientHeight, scrollTop, scrollHeight, setBoxShadow }) {
  const isBottom = clientHeight === scrollHeight - scrollTop
  const isTop = scrollTop === 0
  const isBetween = scrollTop > 0 && clientHeight < scrollHeight - scrollTop

  let computedBoxShadow

  if (isTop) {
    computedBoxShadow = TOP_BOX_SHADOW_DEFAULT
  } else if (isBetween || isBottom) {
    computedBoxShadow = TOP_BOX_SHADOW_ACTIVE
  }

  return setBoxShadow(computedBoxShadow)
}

export function useScrollWithShadow() {
  const [scrollTop, setScrollTop] = useState(0)
  const [scrollHeight, setScrollHeight] = useState(0)
  const [clientHeight, setClientHeight] = useState(0)
  const [boxShadow, setBoxShadow] = useState()

  useEffect(() => {
    getBoxShadow({ clientHeight, scrollTop, scrollHeight, setBoxShadow })
  }, [])

  const onScrollHandler = (event) => {
    setScrollTop(event.target.scrollTop)
    setScrollHeight(event.target.scrollHeight)
    setClientHeight(event.target.clientHeight)

    getBoxShadow({
      clientHeight: event.target.clientHeight,
      scrollTop: event.target.scrollTop,
      scrollHeight: event.target.scrollHeight,
      setBoxShadow,
    })
  }

  return { boxShadow, onScrollHandler }
}
