"use client"

import mapboxgl from "mapbox-gl";
import { useEffect, useRef } from "react";
import { Card } from "../Card";

type LocationPin = {
  id: string;
  type: "project" | "home";
  name: string;
  coordinates: [number, number]; // [lng, lat]
};

const locations: LocationPin[] = [
  {
    id: "london",
    type: "home",
    name: "London",
    coordinates: [0.1276, 51.5072],
  },
  {
    id: "rome",
    type: "home",
    name: "Rome",
    coordinates: [12.4822, 41.8967],
  },
  {
    id: "toronto",
    type: "home",
    name: "Toronto",
    coordinates: [-79.3832, 43.7],
  },
  {
    id: "sf",
    type: "project",
    name: "Curios",
    coordinates: [-122.4194, 37.7749],
  },
  {
    id: "ny",
    type: "project",
    name: "MSG",
    coordinates: [-74.006, 40.7128],
  },
  {
    id: "hi",
    type: "project",
    name: "Kapio'lani Womens & Childrens Hospital",
    coordinates: [-157.8581, 21.3099],
  },
  {
    id: "malta",
    type: "project",
    name: "St Luke Hospital & Gozo General",
    coordinates: [14.3754, 35.9375],
  },
  {
    id: "calgary",
    type: "project",
    name: "Calgary Cancer Project",
    coordinates: [-114.07, 51.04],
  },
  {
    id: "niagara",
    type: "project",
    name: "Niagara Health",
    coordinates: [-79.08, 43.08],
  },
];




mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_TOKEN!;

export function LocationCard() {
  const mapRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!mapRef.current) return;

    const map = new mapboxgl.Map({
      container: mapRef.current,
      style: "mapbox://styles/mapbox/light-v11", // greyscale base
      center: [-98, 39], // US-centered
      zoom: 1,
      interactive: true, // feels more “dashboard”
    });

    locations.forEach((location) => {
      const el = document.createElement("div");

      el.className = `
        h-2 w-2 rounded-full
        ${location.type === "project" ? "bg-blue-500" : "bg-red-500"}
      `;

      new mapboxgl.Marker({ element: el })
        .setLngLat(location.coordinates)
        .setPopup(
          new mapboxgl.Popup({ offset: 12 }).setText(location.name)
        )
        .addTo(map);
    });

    return () => map.remove();
  }, []);

  return (
    <Card title="Locations">
      <div className="relative h-full">
        <div
          ref={mapRef}
          className="h-full w-full overflow-hidden rounded-lg"
        />

        {/* Legend */}
        <div className="absolute bottom-3 left-3 rounded-lg bg-white/90 px-3 py-2 text-xs shadow">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-blue-500" />
            Projects
          </div>
          <div className="mt-1 flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-red-500" />
            Lived
          </div>
        </div>
      </div>
    </Card>
  );
}