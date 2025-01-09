import { memo } from 'react';
import { Marker, Popup } from 'react-leaflet';
import { Device } from '../types/device';
import { DEFAULT_ICON } from '../constants/mapIcons';

interface DeviceMarkerProps {
  device: Device;
}

const DeviceMarker = memo(({ device }: DeviceMarkerProps) => {
  return (
    <Marker
      position={[device.latitude, device.longitude]}
      icon={DEFAULT_ICON}
    >
      <Popup>
        <div className="device-popup">
          <h3>Device ID: {device.id}</h3>
          <p>Type: {device.type}</p>
          <p>Status: <span className={`status-${device.status}`}>{device.status}</span></p>
          <p>Last Updated: {device.lastUpdated.toLocaleString()}</p>
        </div>
      </Popup>
    </Marker>
  );
});

DeviceMarker.displayName = 'DeviceMarker';

export default DeviceMarker;
