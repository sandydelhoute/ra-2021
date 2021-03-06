import { Map, TileLayer, Marker,Popup  } from 'react-leaflet';
import L  from 'leaflet';
import {CustomPopFlagAndPopulate} from './CustomPopFlagAndPopulate'





export const CustomMap = props => {
    const ListMarkers = () => props.countries.map(
        (country, index) => {
            const flagIcon = new L.icon({
                iconUrl: country.flags.png,
                iconSize: [50, 33]
            })
            console.log(country);
            return <Marker position={country.latlng} key={index} icon={flagIcon}>
                <Popup>
                <CustomPopFlagAndPopulate pop={country.population} flag={country.name.common} />
                </Popup>
            </Marker>
        }
    );
    return <div className="w-100 mb-3">
        {props.countries.length}
        <Map
            center={[0, 0]}
            zoom={3}
            maxZoom={5}
            minZoom={1}>
            <TileLayer
                attribution={'&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'}
                url={"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}
            />
            <ListMarkers />
        </Map>
    </div>
};

