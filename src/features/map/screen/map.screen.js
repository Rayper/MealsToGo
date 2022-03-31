import React, { useContext, useState, useEffect } from "react";
import MapView from "react-native-maps";
import styled from 'styled-components'
import { LocationContext } from "../../../services/location/location.context";
import { RestaurantsContext } from "../../../services/restaurants/restaurants.context";
import { Search } from "../components/search.component";

const Map = styled(MapView)`
    height: 100%;
    width: 100%;
`;

export const MapScreen = () => {
    const { location } = useContext(LocationContext);
    const { restaurants = [] } = useContext(RestaurantsContext);

    // state untuk zoom level seberapa lvl zoomnya
    const [latDelta, setLatDelta] = useState(0);
    
    const { lat, lng, viewport } = location;
    console.log(viewport);

    // untuk ngasih tau lokasi mana yang akan difokuskan
    useEffect(() => {
        const northeastLat = viewport.northeast.lat;
        const southwestLat = viewport.southwest.lat;

        setLatDelta(northeastLat - southwestLat);
    }, [location, viewport]);

    return (
        <>
            <Search />
            <Map 
                region={{ 
                    latitude: lat,
                    longitude: lng,
                    latitudeDelta: latDelta,
                    // 0.02 itu default zoom level
                    longitudeDelta: 0.02
                }}
            >
                {restaurants.map((restaurant) => {
                    return null;
                })}
            </Map>
        </>
    )
}
