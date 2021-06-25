import React, { FunctionComponent } from 'react';
import GoogleMapReact from 'google-map-react';
import { FaMapMarkerAlt } from 'react-icons/fa';
import styled from 'styled-components';

type MapProps = unknown;

const Pin = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 180px;
`;

const PinText = styled.p`
  text-align: center;
  margin: ${(props) => props.theme.sizes.halfSpacer};
  color: ${(props) => props.theme.colors.brandPrimary};
  background: ${(props) => props.theme.colors.black};
  padding: ${(props) => props.theme.sizes.halfSpacer};
`;

const LocationPin = ({ text }: { text: string }) => (
  <Pin>
    <FaMapMarkerAlt size="4em" color="black" />
    <PinText>{text}</PinText>
  </Pin>
);

const MapWrapper = styled.div`
  width: 100%;
  height: 60vh;
  margin-bottom: ${(props) => props.theme.sizes.doubleSpacer};
`;

const Map: FunctionComponent<MapProps> = () => {
  const location = {
    address: '738 S Washington Ave, Royal Oak, MI 48067',
    lat: 42.49330897406746,
    lng: -83.14878178317404,
  };

  return (
    <MapWrapper>
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.GATSBY_GOOGLE_MAPS_API_KEY }}
        defaultCenter={location}
        center={location}
        defaultZoom={15}
      >
        <LocationPin lat={location.lat} lng={location.lng} text={location.address} />
      </GoogleMapReact>
    </MapWrapper>
  );
};

export default Map;
