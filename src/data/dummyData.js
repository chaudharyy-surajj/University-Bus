// Mock data for University Bus System

export const routes = [
  {
    id: '1',
    name: 'Campus to Downtown',
    stops: ['Main Campus', 'Library Junction', 'City Center', 'Downtown Terminal'],
    distance: 15.5,
    estimatedTime: 45,
    isActive: true,
  },
  {
    id: '2',
    name: 'North Campus Route',
    stops: ['North Campus', 'Sports Complex', 'Hostel Block A', 'Main Campus'],
    distance: 8.2,
    estimatedTime: 25,
    isActive: true,
  },
  {
    id: '3',
    name: 'South Campus Express',
    stops: ['South Campus', 'Medical Center', 'Engineering Block', 'Main Campus'],
    distance: 12.3,
    estimatedTime: 35,
    isActive: true,
  },
];

export const drivers = [
  {
    id: '1',
    name: 'John Smith',
    email: 'john.smith@university.edu',
    phone: '+1-555-0101',
    licenseNumber: 'DL123456789',
    assignedBus: '1',
    assignedRoute: '1',
    status: 'on-duty',
  },
  {
    id: '2',
    name: 'Maria Garcia',
    email: 'maria.garcia@university.edu',
    phone: '+1-555-0102',
    licenseNumber: 'DL987654321',
    assignedBus: '2',
    assignedRoute: '2',
    status: 'active',
  },
  {
    id: '3',
    name: 'David Johnson',
    email: 'david.johnson@university.edu',
    phone: '+1-555-0103',
    licenseNumber: 'DL456789123',
    assignedBus: '3',
    assignedRoute: '3',
    status: 'on-duty',
  },
];

export const buses = [
  {
    id: '1',
    number: 'UNI-001',
    capacity: 40,
    driver: drivers[0],
    route: routes[0],
    status: 'active',
    location: {
      lat: 40.7128,
      lng: -74.006,
      lastUpdated: '2024-12-19T10:30:00Z',
    },
  },
  {
    id: '2',
    number: 'UNI-002',
    capacity: 35,
    driver: drivers[1],
    route: routes[1],
    status: 'active',
    location: {
      lat: 40.7589,
      lng: -73.9851,
      lastUpdated: '2024-12-19T10:28:00Z',
    },
  },
  {
    id: '3',
    number: 'UNI-003',
    capacity: 45,
    driver: drivers[2],
    route: routes[2],
    status: 'maintenance',
  },
  {
    id: '4',
    number: 'UNI-004',
    capacity: 38,
    status: 'inactive',
  },
];

export const schedules = [
  {
    id: '1',
    routeId: '1',
    busId: '1',
    driverId: '1',
    departureTime: '08:00',
    arrivalTime: '08:45',
    date: '2024-12-19',
    availableSeats: 25,
  },
  {
    id: '2',
    routeId: '1',
    busId: '1',
    driverId: '1',
    departureTime: '14:00',
    arrivalTime: '14:45',
    date: '2024-12-19',
    availableSeats: 30,
  },
  {
    id: '3',
    routeId: '2',
    busId: '2',
    driverId: '2',
    departureTime: '09:00',
    arrivalTime: '09:25',
    date: '2024-12-19',
    availableSeats: 18,
  },
  {
    id: '4',
    routeId: '3',
    busId: '3',
    driverId: '3',
    departureTime: '10:00',
    arrivalTime: '10:35',
    date: '2024-12-19',
    availableSeats: 0,
  },
];

export const students = [
  {
    id: '1',
    name: 'Alice Johnson',
    email: 'alice.johnson@student.university.edu',
    phone: '+1-555-1001',
    studentId: 'STU2024001',
    department: 'Computer Science',
  },
  {
    id: '2',
    name: 'Bob Wilson',
    email: 'bob.wilson@student.university.edu',
    phone: '+1-555-1002',
    studentId: 'STU2024002',
    department: 'Engineering',
  },
];

export const bookings = [
  {
    id: '1',
    studentId: '1',
    scheduleId: '1',
    seatNumber: 'A15',
    pickupStop: 'Main Campus',
    dropoffStop: 'Downtown Terminal',
    status: 'confirmed',
    bookingDate: '2024-12-18T09:00:00Z',
    fareAmount: 5.5,
  },
  {
    id: '2',
    studentId: '1',
    scheduleId: '3',
    seatNumber: 'B08',
    pickupStop: 'North Campus',
    dropoffStop: 'Main Campus',
    status: 'pending',
    bookingDate: '2024-12-18T14:30:00Z',
    fareAmount: 3.25,
  },
];
