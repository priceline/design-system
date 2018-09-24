import React from 'react'
import {
  Slider as CompoundSlider,
  Handles,
  Rail,
  Tracks
} from 'react-compound-slider'
import styled from 'styled-components'
import { themeGet } from 'styled-system'

const Root = styled(CompoundSlider)({
  position: 'relative',
  width: '100%',
  marginTop: '32px',
  marginBottom: '32px'
})

const RailStyle = styled.div({
  height: '8px',
  backgroundColor: '#eee',
  borderRadius: '4px'
})

const HandleStyle = styled.div`
  position: absolute;
  top: -8px;
  cursor: pointer;
  width: 24px;
  height: 24px;
  margin-left: -12px;
  border-radius: 9999px;
  border: 4px solid ${themeGet('colors.blue')};
  background-color: white;
`

const Handle = ({ min, max, handle: { value, percent }, ...props }) => (
  <HandleStyle
    role="slider"
    aria-valuemin={min}
    aria-valuemax={max}
    aria-valuenow={value}
    {...props}
    style={{
      left: percent + '%'
    }}
  />
)

const TrackStyle = styled.div`
  position: absolute;
  top: 0;
  height: 8px;
  cursor: pointer;
  background-color: ${themeGet('colors.blue')};
`

const Track = ({ source, target, ...props }) => (
  <TrackStyle
    {...props}
    style={{
      left: source.percent + '%',
      width: target.percent - source.percent + '%'
    }}
  />
)

export const Slider = ({ value, min, max, ...props }) => (
  <Root values={value} min={min} max={max} {...props}>
    <Rail children={({ getRailProps }) => <RailStyle {...getRailProps()} />} />
    <Tracks
      left={false}
      right={false}
      children={({ tracks, getTrackProps }) => (
        <div>
          {tracks.map(track => (
            <Track {...track} {...getTrackProps()} />
          ))}
        </div>
      )}
    />
    <Handles
      children={({ handles, getHandleProps }) => (
        <div>
          {handles.map(handle => (
            <Handle
              min={min}
              max={max}
              handle={handle}
              {...getHandleProps(handle.id)}
            />
          ))}
        </div>
      )}
    />
  </Root>
)

Slider.defaultProps = {}

export default Slider
