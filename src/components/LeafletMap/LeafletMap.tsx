import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

// Map and map styling
import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import 'leaflet';

import { TinklRootState } from '../../types/TinklRootState';
import { BathroomType } from "../../types/BathroomType";



export const LeafletMap = () => {
    const user = useSelector((state: TinklRootState) => state.user);
    const options = useSelector((state: TinklRootState) => state.options);
    const filters = useSelector((state: TinklRootState) => state.filters);
    const bathroomData: BathroomType[] = useSelector((state: TinklRootState) => state.bathroomData);
    const searchedLocation = useSelector((state: TinklRootState) => state.searchedLocation);
    const [filteredBathroomData, setFilteredBathroomData] = useState<BathroomType[]>(bathroomData);

    return (
        <div className="alert">
        <MapContainer center={[44.970382, -93.267836]} zoom={15}  style={{ height: "90%", width: "100%", textAlign: 'center', borderRadius: '5px', padding: '10px 20px 50px' }}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[44.970382, -93.267836]}>
                <Popup>
                    A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
            </Marker>
        </MapContainer>
        </div>
    )

}