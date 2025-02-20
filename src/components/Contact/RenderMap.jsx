import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

function RenderMap({ position, children }) {
  return (
    <div className="max-w-[800px] mx-auto">
      <MapContainer center={position} zoom={15} style={{ width: "100%", height: "400px" }} attributionControl={false} className="z-0">
        {/* OpenStreetMap Tile Layer */}
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

        {/* Marker at the given location */}
        <Marker position={position}>
          <Popup>{children}</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}

export default RenderMap;
