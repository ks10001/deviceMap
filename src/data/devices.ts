import { Device } from '../types/device';

export const devices: Device[] = [
	{
		id: 'dev-001',
		type: 'Sensor',
		latitude: 40.7128,
		longitude: -74.006,
		lastUpdated: new Date(),
		status: 'active',
	},
	{
		id: 'dev-002',
		type: 'Router',
		latitude: 34.0522,
		longitude: -118.2437,
		lastUpdated: new Date(),
		status: 'inactive',
	},
	{
		id: 'dev-003',
		type: 'Gateway',
		latitude: 51.5074,
		longitude: -0.1278,
		lastUpdated: new Date(),
		status: 'active',
	},
];
