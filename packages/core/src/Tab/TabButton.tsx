import React from 'react'
import { StyledText, TabTriggerButton } from './Tab.styled'
import { Flex } from '../Flex/Flex'
import { Box } from '../Box/Box'
import type { TabProps, MappedTabProps } from './Tab'
import { Grid } from '../Grid/Grid'
export const TabButton = ({ border, tab, size, isTransparent }: Partial<TabProps> & MappedTabProps) => {
  const [isHover, setIsHover] = React.useState(false)
  return (
    <TabTriggerButton
      isTransparent={isTransparent}
      buttonBorder={border}
      isActiveHover={isHover}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      value={`tab-${tab.id}`}
      key={`tab-${tab.id}`}
    >
      {tab.icon ? (
        <Grid alignItems='center' templateColumns='auto 1fr'>
          <Box ml={3} size={24}>
            {React.createElement(tab.icon, {
              title: tab.icon.name,
              size: 24,
            })}
          </Box>

          <StyledText size={size} style={{ fontFamily: 'Montserrat' }} textStyle='paragraph'>
            {tab.text}
          </StyledText>
        </Grid>
      ) : (
        <StyledText size={size} style={{ fontFamily: 'Montserrat' }} textStyle='paragraph'>
          {tab.text}
        </StyledText>
      )}
    </TabTriggerButton>
  )
}
