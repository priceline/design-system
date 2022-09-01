import React from 'react'
import PropTypes from 'prop-types'
import { Slide } from 'pure-react-carousel'
import { Flex, Hide, Text } from 'pcln-design-system'

const LoadMoreSlide = ({ slideSpacing, height, loadMoreCallback }) => (
  <Hide md lg xl xxl>
    <Slide className='fullHeightSlide' onClick={loadMoreCallback}>
      <Flex
        m={slideSpacing}
        bg='background.light'
        minHeight={height ? `${height}px` : undefined}
        width='120px'
        alignItems='center'
        justifyContent='center'
        borderRadius='2xl'
      >
        <Text fontWeight='bold' color='primary' fontSize={0}>
          Load More
        </Text>
      </Flex>
    </Slide>
  </Hide>
)

LoadMoreSlide.propTypes = {
  slideSpacing: PropTypes.number,
  height: PropTypes.number,
  loadMoreCallback: PropTypes.func,
}

export { LoadMoreSlide }
