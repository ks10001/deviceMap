export type DeviceStatus = 'active' | 'inactive' | 'maintenance';
export type DeviceType = 'Sensor' | 'Router' | 'Gateway';

export interface Device {
  id: string;
  type: DeviceType;
  latitude: number;
  longitude: number;
  status: DeviceStatus;
  lastUpdated: Date;
}

export interface MapPosition {
  lat: number;
  lng: number;
}
