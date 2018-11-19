import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { StaticMap, Marker } from 'react-map-gl'
import MapboxClient from 'mapbox/lib/services/geocoding'
import styled from 'styled-components'
import theme from './theme'
import Icon from './Icon'

const mapboxApiAccessToken = 'pk.eyJ1Ijoia25vdGVsIiwiYSI6ImNqb2tpdnQ3eDBnaG0zd21oeHJ5M2VtbGsifQ.2UspOJExjaZu1c6YE9g91w'
const mapStyle = 'mapbox://styles/knotel/cjono6h6i1i8v2sqd3re802w7'

const client = new MapboxClient(mapboxApiAccessToken)

const MapLoader = styled.div`
  background: ${theme.colors.gray100};
  height: ${props => `${props.height}px`};
  width: ${props => `${props.width}px`};
`

class MapImage extends Component {
  constructor (props) {
    super(props)
    this.state = {
      latitude: undefined,
      longitude: undefined
    }
  }
  componentDidMount () {
    this.fetchCoordinates()
  }
  componentDidUpdate () {
    this.fetchCoordinates()
  }
  fetchCoordinates () {
    if (this.props.address) {
      client.geocodeForward(this.props.address)
      .then((data) => {
        console.log(data)
        this.setState({
          latitude: data.entity.features[0].center[1],
          longitude: data.entity.features[0].center[0],
          loading: false
        })
      })
      .catch((err) => {
        console.log(err)
      })
    }
  }
  render () {
    const { height, width } = this.props
    return (
      this.state.latitude ? (
        <StaticMap
          mapboxApiAccessToken={mapboxApiAccessToken}
          mapStyle={mapStyle}
          attributionControl={false}
          width={width}
          height={height}
          latitude={this.props.latitude || this.state.latitude}
          longitude={this.props.longitutde || this.state.longitude}
          zoom={15}
        >
          <Marker
            latitude={this.props.latitude || this.state.latitude}
            longitude={this.props.longitude || this.state.longitude}
            offsetLeft={-20}
            offsetTop={-48}
          >
            <Icon
              name='pin'
              size={48}
            />
          </Marker>
        </StaticMap>
      )
      : <MapLoader height={height} width={width} />
    )
  }
}

MapImage.displayName = 'MapImage'

MapImage.defaultProps = {
  theme: theme,
  height: 200,
  width: 200
}

MapImage.propTypes = {
  address: PropTypes.string,
  latitude: PropTypes.number,
  longitude: PropTypes.number,
  height: PropTypes.number,
  width: PropTypes.number
}

export default MapImage
