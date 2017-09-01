var React = require('react');
var DefaultLayout = require('./layouts/default');
import StaticMap, {Marker} from 'react-map-gl';

var mapboxApiAccessToken = process.env.MapboxAccessToken;

class Map extends React.Component {
  render() {
    return (
      // <DefaultLayout title={this.props.title}>
        <StaticMap latitude={37.78} longitude={-122.41} zoom={8}  width={1200}
        height={703} mapStyle={'mapbox://styles/mapbox/dark-v9'} mapboxApiAccessToken={mapboxApiAccessToken}>
        <Marker latitude={37.78} longitude={-122.41} offsetLeft={-20} offsetTop={-10}>
          <div>You are here</div>
        </Marker>
      </StaticMap>
      // </DefaultLayout>
    );
  }
}

module.exports = Map;
