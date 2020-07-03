import styled from 'styled-components'

export const SrOnly = styled.span`
  position: absolute;
  overflow: hidden;
  clip: rect(0 0 0 0);
  height: 1px;
  width: 1px;
  margin: -1px;
  padding: 0;
  border: 0;
` as React.FC

SrOnly.displayName = 'SrOnly'

export default SrOnly
