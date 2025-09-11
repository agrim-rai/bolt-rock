import { Mine } from '../types';

export const mines: Mine[] = [
  {
    id: '1',
    name: 'Kennecott Utah Copper Mine',
    location: 'Utah',
    country: 'USA',
    coordinates: [40.5207, -112.1520],
    riskLevel: 'medium',
    lastInspection: '2024-01-15'
  },
  {
    id: '2',
    name: 'Morenci Copper Mine',
    location: 'Arizona',
    country: 'USA',
    coordinates: [33.0436, -109.3461],
    riskLevel: 'high',
    lastInspection: '2024-01-10'
  },
  {
    id: '3',
    name: 'Eagle Butte Coal Mine',
    location: 'Wyoming',
    country: 'USA',
    coordinates: [43.9636, -105.4172],
    riskLevel: 'low',
    lastInspection: '2024-01-20'
  },
  {
    id: '4',
    name: 'Jharia Coal Mines',
    location: 'Jharkhand',
    country: 'India',
    coordinates: [23.7644, 86.4151],
    riskLevel: 'high',
    lastInspection: '2024-01-08'
  },
  {
    id: '5',
    name: 'Kudankulam Limestone Mine',
    location: 'Tamil Nadu',
    country: 'India',
    coordinates: [8.1709, 77.7085],
    riskLevel: 'medium',
    lastInspection: '2024-01-12'
  },
  {
    id: '6',
    name: 'Bellary Iron Ore Mines',
    location: 'Karnataka',
    country: 'India',
    coordinates: [15.1394, 76.9214],
    riskLevel: 'low',
    lastInspection: '2024-01-18'
  }
];