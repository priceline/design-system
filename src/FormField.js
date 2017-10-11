import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { theme, Flex, Box, Icon, Text } from '../'

const propTypes = {
  id: PropTypes.string.isRequired,
  borderColor: PropTypes.string,
  labelColor: PropTypes.string,
  color: PropTypes.string,
  icon: PropTypes.string,
  iconRenderer: PropTypes.func,
  iconColor: PropTypes.string,
  thickBorder: PropTypes.bool,
  error: PropTypes.string,
  errorColor: PropTypes.string,
  label: PropTypes.string,
  accessibleLabel: PropTypes.string,
  placeholder: PropTypes.string,
  placeholderColor: PropTypes.string,
  value: PropTypes.string,
  name: PropTypes.string
}

const defaultProps = {
  borderColor: theme.colors.lightGray,
  placeholderColor: theme.colors.lightGray,
  errorColor: theme.colors.red,
  labelColor: theme.colors.text,
  color: theme.colors.text
}

const errors = props => props.error && {
  boxShadow: `0 26px ${props.errorColor}`
}

const InputContainer = styled.div`
  display: flex;
  align-items: center;
  border-color: ${(props) => props.borderColor};
  border-width: ${(props) => (props.thickBorder) ? '2px' : '1px'};
  border-style: solid;
  border-radius: 2px;
  width: 100%;
  height: 48px;
  padding-left: 12px; // ${props => props.theme.space[3]}px; or maybe use a combo of padding on elements
  padding-right: 12px; // ${props => props.theme.space[3]}px;

  ${errors}
`

const MiniLabel = Text.extend`
  font-weight: 500;
  font-size: 10px; // ${({ theme }) => theme.fontSizes[2]}px; no matching font size
`

const StrippedInput = styled.input`
  display: block;
  width: 100%;
  outline: 0;
  font-size: ${({ theme }) => theme.fontSizes[2]}px;
  background-color: transparent;
  border: transparent;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  vertical-align: top;

  ::placeholder {
    color: ${({ placeholderColor }) => placeholderColor};
  }

  ::-ms-clear {
    display: none;
  }
`

const VerticalFlex = styled(Flex) ` // TODO add direction to Flex component
  flex-direction: column;
`
const ErrorText = Text.extend`
  position: absolute;
`

const FormField = ({
  id,
  accessibleLabel,
  borderColor,
  labelColor,
  color,
  icon,
  iconRenderer,
  error,
  errorColor,
  iconColor,
  thickBorder,
  label,
  placeholder,
  placeholderColor,
  value,
  name,
  ...otherProps
}) => {

  let textInput = null

  const getIcon = () => {
    if (iconRenderer) {
      return iconRenderer()
    } else if (icon) {
      return <Icon name={icon} color={iconColor} />
    }
    return null
  }

  const handleInputFocus = () => {
    textInput.focus()
  }

  return (
    <Box>
      <InputContainer borderColor={borderColor} thickBorder={thickBorder} onClick={handleInputFocus} error={error} errorColor={errorColor}>
        <Flex justify='space-between' align='center' width={1}>
          <VerticalFlex align='flex-start' width={1}>
            {label &&
              <Box>
                <MiniLabel align='left' color={labelColor} id={`#${id}-label`}>
                  {label}
                </MiniLabel>
              </Box>
            }
            <Box width={1}>
              <StrippedInput
                id={`#${id}`}
                placeholderColor={placeholderColor}
                placeholder={placeholder}
                aria-labelledby={label && `${id}-label`}
                aria-label={accessibleLabel}
                aria-describedby={error && `${id}-error`}
                value={value}
                innerRef={(input) => { textInput = input }}
                {...otherProps}
              />
            </Box>
          </VerticalFlex>
          {getIcon()}
        </Flex>
      </InputContainer>
      {error &&
        <Box mx={3} my={1}>
          <ErrorText color='white' fontSize={0} id={`#${id}-error`}>
            {error}
          </ErrorText>
        </Box>
      }
    </Box>
  )
}

FormField.propTypes = propTypes
FormField.defaultProps = defaultProps

export default FormField
