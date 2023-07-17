import React from 'react'
import { Label } from '../Label'
import { Radio } from '../Radio'
import { TabTriggerRadio } from './Tab.styled'
import { Box } from '../Box'

export const TabRadio = ({ hasHover, tab, index, isActive, setIsActive, value }) => {
  const tabRef = React.useRef(null)
  const [isChecked, setIsChecked] = React.useState(isActive === true)
  React.useEffect(() => {
    setIsChecked(isActive === index)
  }, [isActive, index])

  const handleTabClick = () => {
    setIsActive(index)
  }

  return (
    <TabTriggerRadio
      ref={tabRef}
      onClick={handleTabClick}
      asChild
      hover={hasHover}
      value={`${value}-tab${index + 1}`}
      key={`tab${index + 1}`}
    >
      <Box style={{ display: 'flex', alignItems: 'center' }} mx={2}>
        <Label fontSize='14px'>
          <Radio checked={isChecked} />
          {tab.text}
        </Label>
      </Box>
    </TabTriggerRadio>
  )
}
