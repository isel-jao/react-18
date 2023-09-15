import MapControls from "@/components/map-control";
import { useState } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

const sites = [
  {
    name: "Casablanca",
    lat: 33.57311,
    lng: -7.58984,
  },
  {
    name: "Rabat",
    lat: 34.020882,
    lng: -6.841995,
  },
  {
    name: "Tanger",
    lat: 35.759465,
    lng: -5.833954,
  },
  {
    name: "Marrakech",
    lat: 31.629472,
    lng: -7.981084,
  },
];

export default function LeafletPage() {
  const [name, setName] = useState("");
  const filterdSites = sites.filter((site) =>
    site.name.toLowerCase().includes(name.toLowerCase()),
  );
  return (
    <div className="relative  h-full w-full">
      <div className=" absolute  right-4 top-0 z-[502] flex h-full  w-64 flex-col gap-4 py-4">
        <input
          type="text"
          placeholder="Search..."
          className="bg-blur rounded bg-white/75  px-4 py-2 shadow"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <div className="bg-blur flex flex-1 flex-col  rounded bg-white/75 px-4 py-2 shadow">
          {filterdSites.map((site) => (
            <div className="flex items-center gap-2 border-b py-2">
              <div>{site.name}</div>
            </div>
          ))}
        </div>
      </div>
      <MapContainer
        center={[31.791702, -7.09262]}
        zoom={6}
        attributionControl={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="http://{s}.google.com/vt/lyrs=m&hl=en&gl=ma&x={x}&y={y}&z={z}"
          subdomains={["mt0", "mt1", "mt2", "mt3"]}
        />
        {filterdSites.map((site) => (
          <Marker position={[site.lat, site.lng]}>
            <Popup>
              <div className="bg-blur rounded bg-white/50 p-6 shadow-md">
                {site.name}
              </div>
            </Popup>
          </Marker>
        ))}
        <MapControls
          bounds={filterdSites.map((site) => [site.lat, site.lng])}
        />
      </MapContainer>
    </div>
  );
}
