import React, { Component } from 'react';
import MapGL from 'react-map-gl';

// var mapboxApiAccessToken=process.env.MapboxAccessToken;

class App extends Component {
  constructor(props) {
    super(props);
    this.data = [];
  }
  // componentDidMount() {
  //   var x = Xray();
  //   x('http://www.phivolcs.dost.gov.ph/html/update_SOEPD/EQLatest.html', 'table:nth-of-type(3) tr', [{
  //     col1: 'td:nth-of-type(1)',
  //     col2: 'td:nth-of-type(2)',
  //     col3: 'td:nth-of-type(3)',
  //     col4: 'td:nth-of-type(4)',
  //     col5: 'td:nth-of-type(5)',
  //     col6: 'td:nth-of-type(6)',
  //   }])(function(error, data){
  //     data.shift();
  //     data.shift();

  //     for(let i=0; i < 5; i++) {
  //         this.data.push({
  //             date: data[i].col1.replace(/[\n\t\r]/g,""),
  //             lat: data[i].col2.replace(/[\n\t\r]/g,""),
  //             long: data[i].col3.replace(/[\n\t\r]/g,""),
  //             depth: data[i].col4.replace(/[\n\t\r]/g,""),
  //             magnitude: data[i].col5.replace(/[\n\t\r]/g,""),
  //             location: data[i].col6.replace(/[\n\t\r]/g,""),
  //         });
  //     }
  //  });
  // }
  render() {
    console.log(this.data);
    return (
      <div className="App">
        <MapGL
          width={700}
          height={450}
          latitude={37.768}
          longitude={-122.331}
          zoom={9.017}
          mapStyle="mapbox://styles/mapbox/dark-v9" 
          mapboxApiAccessToken={Your token should be here}
         />
      </div>
    );
  }
}

export default App;
