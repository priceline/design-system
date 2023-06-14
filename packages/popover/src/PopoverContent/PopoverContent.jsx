import React, { useCallback, useEffect } from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import styled, { ThemeConsumer } from 'styled-components'
import { borderRadius } from 'styled-system'
import { themeGet } from '@styled-system/theme-get'
import { Box, borderRadiusAttrs, deprecatedPropType, ThemeProvider } from 'pcln-design-system'
import FocusLock from 'react-focus-lock'
import PopoverArrow from '../Arrow'
import Overlay from '../Overlay'

const ESCAPE_KEY = 27

const PopoverGuide = styled(Box)`
  box-sizing: border-box;
  max-width: ${({ width }) => (typeof width === 'number' ? `${width}px` : width)};
  width: 100%;
  z-index: ${({ zIndex }) => (zIndex < 0 ? 1 : zIndex)};
`
const ContentContainer = styled.section.attrs(borderRadiusAttrs)`
  box-sizing: border-box;
  font-size: ${themeGet('fontSizes.0')}px;
  max-width: 100%;
  outline: 0;
  ${borderRadius};
`

function PopoverContent({
  arrowRef,
  borderColor,
  borderRadius,
  className,
  color,
  idx,
  onCloseRequest,
  overlayOpacity,
  placement,
  renderContent,
  trapFocus,
  hideArrow,
  hideOverlay,
  popoverRef,
  styles,
  width,
  zIndex,
  ...props
}) {
  const handleKeyUp = useCallback(
    (evt) => {
      if (evt.keyCode === ESCAPE_KEY) {
        evt.stopPropagation()
        evt.preventDefault()
        onCloseRequest(evt)
      }
    },
    [onCloseRequest]
  )

  useEffect(() => {
    window.addEventListener('keyup', handleKeyUp, false)
    return () => {
      window.removeEventListener('keyup', handleKeyUp, false)
    }
  }, [handleKeyUp])

  const getBorderColorName = (color, borderColor) => {
    let borderColorName = borderColor

    if (!borderColor) {
      if (color) {
        borderColorName = color
      } else {
        borderColorName = 'border'
      }
    }

    return borderColorName
  }

  const styleProps = {
    borderColor: getBorderColorName(color, borderColor),
    borderRadius,
    width,
    zIndex,
  }

  const content = trapFocus ? (
    <FocusLock focusOptions={{ preventScroll: true }}>
      {renderContent({
        handleClose: onCloseRequest,
      })}
    </FocusLock>
  ) : (
    renderContent({
      handleClose: onCloseRequest,
    })
  )

  return ReactDOM.createPortal(
    <>
      <PopoverGuide
        aria-describedby={`dialog-description-${idx}`}
        className={className}
        data-placement={placement}
        ref={popoverRef}
        role='dialog'
        style={styles?.popover}
        {...styleProps}
        {...props}
      >
        <ThemeConsumer>
          {(theme) => (
            <ThemeProvider theme={theme}>
              <ContentContainer {...styleProps} tabIndex='-1' data-testid='popover-content-container'>
                <Box
                  boxShadowSize='overlay-md'
                  borderRadius={borderRadius}
                  color={color ?? 'background.lightest'}
                  data-testid='dialog-content'
                  id={`popover-description-${idx}`}
                  tabIndex='-1'
                >
                  {content}
                </Box>
              </ContentContainer>
            </ThemeProvider>
          )}
        </ThemeConsumer>
        {!hideArrow && (
          <PopoverArrow
            borderColor={styleProps.borderColor}
            color={color ?? 'background.lightest'}
            placement={placement}
            ref={arrowRef}
            style={styles?.arrow}
          />
        )}
      </PopoverGuide>
      {!hideOverlay && (
        <Overlay handleClick={onCloseRequest} overlayOpacity={overlayOpacity} zIndex={zIndex - 1} />
      )}
    </>,
    // Append each instance of the Popover as portal directly to the body
    document.querySelector('body')
  )
}

PopoverContent.propTypes = {
  ...borderRadius.propTypes,
  idx: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired, // ID needs to be required for A11y purposes. We need to uniquely identify each popover on screen
  renderContent: PropTypes.func.isRequired,
  onCloseRequest: PropTypes.func.isRequired,
  contentRef: PropTypes.object,
  className: PropTypes.string,
  p: PropTypes.number,
  color: PropTypes.string,
  bg: deprecatedPropType('color'),
  borderColor: PropTypes.string,
  placement: PropTypes.string,
  zIndex: PropTypes.number,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  overlayOpacity: PropTypes.number,
  trapFocus: PropTypes.bool,
  hideArrow: PropTypes.bool,
  hideOverlay: PropTypes.bool,
}

PopoverContent.defaultProps = {
  p: 2,
  placement: 'top',
  zIndex: 102,
  width: 400,
}

export default PopoverContent
