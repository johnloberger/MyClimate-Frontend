import React, { PureComponent } from "react";
import { connect } from 'react-redux'
import { Marker } from "google-maps-react";


class MyMarkers extends PureComponent {  

  render() {
    const google = this.props.google
        let iw = 83,
        ih = 107;
    return this.props.stats.map((statObj, key) => {
      if (statObj.aqi !== '-')
      return (
        <Marker
          info={statObj}
          position={{lat: statObj.lat, lng: statObj.lon}}
          // onClick={this.props.onMarkerClick}
          // onMouseover={this.props.onMarkerHover}
          // onMouseout={this.props.mouseOut}
          id={statObj.uid}
          // ref={accordionContent => this.props.accordionContent[key] = accordionContent}

          onMouseover={this.props.mouseEnterHandler}
          onMouseout={this.props.mouseLeaveHandler}
          {...this.props}
          icon={{
            url: `https://waqi.info/mapicon/${statObj.aqi}.50.png`,
            anchor: new google.maps.Point(iw / 4, ih / 2 - 5),
            size: new google.maps.Size(iw / 2, ih / 2),
            scaledSize: new google.maps.Size(30, 40)
          }}
        />
      );
    });
  }
}
const mapStateToProps = (state) => {
  return {
    stats: state.stats,
  }
}

export default connect(mapStateToProps, null)(MyMarkers);

