import React, { useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Fix for default markers in React-Leaflet
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

interface RiskMapProps {
  center?: [number, number];
  mines?: Array<{
    id: string;
    name: string;
    coordinates: [number, number];
    riskLevel: 'low' | 'medium' | 'high';
  }>;
  onMineClick?: (mineId: string) => void;
}

function MapUpdater({ center }: { center: [number, number] }) {
  const map = useMap();
  
  useEffect(() => {
    map.setView(center, map.getZoom());
  }, [center, map]);
  
  return null;
}

export function RiskMap({ center = [39.8283, -98.5795], mines = [], onMineClick }: RiskMapProps) {
  const getRiskColor = (riskLevel: string) => {
    switch (riskLevel) {
      case 'low': return '#22c55e';
      case 'medium': return '#eab308';
      case 'high': return '#dc2626';
      default: return '#6b7280';
    }
  };

  const createCustomIcon = (riskLevel: string) => {
    return new L.DivIcon({
      className: 'custom-marker',
      html: `<div style="
        width: 20px;
        height: 20px;
        border-radius: 50%;
        background-color: ${getRiskColor(riskLevel)};
        border: 3px solid white;
        box-shadow: 0 0 10px rgba(0,0,0,0.3);
      "></div>`,
      iconSize: [20, 20],
      iconAnchor: [10, 10]
    });
  };

  return (
    <div className="h-64 w-full rounded-lg overflow-hidden">
      <MapContainer
        center={center}
        zoom={4}
        style={{ height: '100%', width: '100%' }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <MapUpdater center={center} />
        {mines.map((mine) => (
          <Marker
            key={mine.id}
            position={mine.coordinates}
            icon={createCustomIcon(mine.riskLevel)}
            eventHandlers={{
              click: () => onMineClick && onMineClick(mine.id)
            }}
          >
            <Popup>
              <div className="text-center">
                <h3 className="font-semibold">{mine.name}</h3>
                <p className={`text-sm font-medium ${
                  mine.riskLevel === 'low' ? 'text-green-600' :
                  mine.riskLevel === 'medium' ? 'text-yellow-600' :
                  'text-red-600'
                }`}>
                  {mine.riskLevel.toUpperCase()} RISK
                </p>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}