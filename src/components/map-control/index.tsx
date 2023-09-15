import { useEffect } from "react";
import { useMap } from "react-leaflet";

export default function MapControls({
  bounds,
  padding,
}: {
  bounds?: [number, number][];
  padding?: number;
}) {
  const map = useMap();
  useEffect(() => {
    if (bounds) {
      if (bounds.length == 1) map.setView(bounds[0], 12);
      else if (bounds.length > 1) {
        map.fitBounds(bounds, {
          padding: padding ?? window.innerWidth > 768 ? [50, 50] : [0, 0],
        });
      }
    }
  }, [bounds, map, padding]);
  return null;
}
