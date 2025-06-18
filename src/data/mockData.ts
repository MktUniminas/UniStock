import { Asset, Employee, Movement, AssetType, AssetStatus, AssetCondition, EmployeeStatus, MovementType } from '../types';

export const mockEmployees: Employee[] = [
  {
    id: '1',
    name: 'João Silva',
    employeeId: 'EMP001',
    department: 'Tecnologia',
    position: 'Desenvolvedor Senior',
    email: 'joao.silva@company.com',
    phone: '(11) 99999-0001',
    status: 'active',
    createdAt: '2024-01-15T08:00:00Z',
    updatedAt: '2024-01-15T08:00:00Z'
  },
  {
    id: '2',
    name: 'Maria Santos',
    employeeId: 'EMP002',
    department: 'Marketing',
    position: 'Gerente de Marketing',
    email: 'maria.santos@company.com',
    phone: '(11) 99999-0002',
    status: 'active',
    createdAt: '2024-01-16T08:00:00Z',
    updatedAt: '2024-01-16T08:00:00Z'
  },
  {
    id: '3',
    name: 'Carlos Oliveira',
    employeeId: 'EMP003',
    department: 'Financeiro',
    position: 'Analista Financeiro',
    email: 'carlos.oliveira@company.com',
    phone: '(11) 99999-0003',
    status: 'vacation',
    createdAt: '2024-01-17T08:00:00Z',
    updatedAt: '2024-01-17T08:00:00Z'
  },
  {
    id: '4',
    name: 'Ana Costa',
    employeeId: 'EMP004',
    department: 'Recursos Humanos',
    position: 'Coordenadora de RH',
    email: 'ana.costa@company.com',
    phone: '(11) 99999-0004',
    status: 'active',
    createdAt: '2024-01-18T08:00:00Z',
    updatedAt: '2024-01-18T08:00:00Z'
  }
];

export const mockAssets: Asset[] = [
  {
    id: '1',
    name: 'Notebook Dell Latitude 7420',
    type: 'computer',
    brand: 'Dell',
    model: 'Latitude 7420',
    serialNumber: 'DL7420001',
    acquisitionDate: '2024-01-15',
    acquisitionValue: 4500.00,
    status: 'active',
    condition: 'good',
    assignedTo: '1',
    observations: 'Notebook em perfeito estado',
    specifications: {
      processor: 'Intel Core i7-1165G7',
      ram: '16GB DDR4',
      storage: '512GB SSD',
      operatingSystem: 'Windows 11 Pro'
    },
    createdAt: '2024-01-15T08:00:00Z',
    updatedAt: '2024-01-15T08:00:00Z'
  },
  {
    id: '2',
    name: 'Monitor LG UltraWide 29"',
    type: 'monitor',
    brand: 'LG',
    model: '29WP500-B',
    serialNumber: 'LG29001',
    acquisitionDate: '2024-01-16',
    acquisitionValue: 1200.00,
    status: 'active',
    condition: 'good',
    assignedTo: '1',
    observations: '',
    specifications: {
      size: '29 polegadas',
      resolution: '2560x1080'
    },
    createdAt: '2024-01-16T08:00:00Z',
    updatedAt: '2024-01-16T08:00:00Z'
  },
  {
    id: '3',
    name: 'iPhone 13 Pro Corporativo',
    type: 'phone',
    brand: 'Apple',
    model: 'iPhone 13 Pro',
    serialNumber: 'APL13001',
    acquisitionDate: '2024-01-17',
    acquisitionValue: 6000.00,
    status: 'active',
    condition: 'good',
    assignedTo: '2',
    observations: 'Telefone corporativo com plano ilimitado',
    specifications: {
      phoneNumber: '(11) 98765-4321',
      imei: '123456789012345'
    },
    createdAt: '2024-01-17T08:00:00Z',
    updatedAt: '2024-01-17T08:00:00Z'
  },
  {
    id: '4',
    name: 'Mouse Logitech MX Master 3',
    type: 'mouse',
    brand: 'Logitech',
    model: 'MX Master 3',
    serialNumber: 'LGT001',
    acquisitionDate: '2024-01-18',
    acquisitionValue: 350.00,
    status: 'active',
    condition: 'damaged',
    assignedTo: '1',
    observations: 'Scroll wheel com problema intermitente',
    specifications: {},
    createdAt: '2024-01-18T08:00:00Z',
    updatedAt: '2024-01-18T08:00:00Z'
  },
  {
    id: '5',
    name: 'Teclado Mecânico Keychron K2',
    type: 'keyboard',
    brand: 'Keychron',
    model: 'K2',
    serialNumber: 'KEY001',
    acquisitionDate: '2024-01-19',
    acquisitionValue: 500.00,
    status: 'maintenance',
    condition: 'defective',
    observations: 'Algumas teclas não funcionam - enviado para assistência',
    specifications: {},
    createdAt: '2024-01-19T08:00:00Z',
    updatedAt: '2024-01-19T08:00:00Z'
  },
  {
    id: '6',
    name: 'Fone Bluetooth Sony WH-1000XM4',
    type: 'headphone',
    brand: 'Sony',
    model: 'WH-1000XM4',
    serialNumber: 'SNY001',
    acquisitionDate: '2024-01-20',
    acquisitionValue: 1500.00,
    status: 'active',
    condition: 'good',
    assignedTo: '4',
    observations: 'Fone com cancelamento de ruído',
    specifications: {},
    createdAt: '2024-01-20T08:00:00Z',
    updatedAt: '2024-01-20T08:00:00Z'
  }
];

export const mockMovements: Movement[] = [
  {
    id: '1',
    assetId: '1',
    type: 'assignment',
    toEmployeeId: '1',
    date: '2024-01-15T09:00:00Z',
    observations: 'Primeira atribuição do notebook',
    createdBy: 'admin'
  },
  {
    id: '2',
    assetId: '2',
    type: 'assignment',
    toEmployeeId: '1',
    date: '2024-01-16T10:00:00Z',
    observations: 'Monitor para complementar setup',
    createdBy: 'admin'
  },
  {
    id: '3',
    assetId: '3',
    type: 'assignment',
    toEmployeeId: '2',
    date: '2024-01-17T11:00:00Z',
    observations: 'Telefone corporativo para gerente',
    createdBy: 'admin'
  },
  {
    id: '4',
    assetId: '5',
    type: 'maintenance',
    date: '2024-01-22T14:00:00Z',
    observations: 'Teclado enviado para reparo - teclas falhando',
    createdBy: 'admin'
  }
];