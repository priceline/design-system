import styled from 'styled-components'

const maxWidth = (props) =>
  props.maxWidth
    ? { maxWidth: `${props.maxWidth}px` }
    : { maxWidth: props.theme.maxContainerWidth }

interface ContainerProps {
  maxWidth?: number
}

export const Container = styled.div<ContainerProps>`
  margin-left: auto;
  margin-right: auto;

  ${maxWidth};
` as React.FC<ContainerProps>

Container.displayName = 'Container'

export default Container
