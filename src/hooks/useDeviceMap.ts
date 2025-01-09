import { useCallback, useMemo } from 'react';
import { Device } from '../types/device';

export const useDeviceMap = (devices: Device[]) => {
  const getDevicesByStatus = useCallback((status: Device['status']) => {
    return devices.filter(device => device.status === status);
  }, [devices]);

  const centerPosition = useMemo(() => {
    if (devices.length === 0) return undefined;
    
    const lats = devices.map(d => d.latitude);
    const lngs = devices.map(d => d.longitude);
    
    return {
      lat: (Math.min(...lats) + Math.max(...lats)) / 2,
      lng: (Math.min(...lngs) + Math.max(...lngs)) / 2
    };
  }, [devices]);

  return {
    getDevicesByStatus,
    centerPosition
  };
};
