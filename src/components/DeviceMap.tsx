import { memo } from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import { Device } from '../types/device';
import DeviceMarker from './DeviceMarker';
import { useDeviceMap } from '../hooks/useDeviceMap';
import { MAP_CONFIG } from '../config/environment';
import 'leaflet/dist/leaflet.css';

interface DeviceMapProps {
  devices: Device[];
}

const DeviceMap = memo(({ devices }: DeviceMapProps) => {
  const { centerPosition } = useDeviceMap(devices);

  return (
    <MapContainer
      center={centerPosition || MAP_CONFIG.DEFAULT_CENTER}
      zoom={MAP_CONFIG.DEFAULT_ZOOM}
      className="device-map"
    >
      <TileLayer
        url={MAP_CONFIG.TILE_LAYER.URL}
        attribution={MAP_CONFIG.TILE_LAYER.ATTRIBUTION}
      />
      {devices.map((device) => (
        <DeviceMarker key={device.id} device={device} />
      ))}
    </MapContainer>
  );
});

DeviceMap.displayName = 'DeviceMap';

export default DeviceMap;
