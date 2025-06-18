export interface Asset {
  id: string;
  name: string;
  type: AssetType;
  brand: string;
  model: string;
  serialNumber: string;
  acquisitionDate: string;
  acquisitionValue: number;
  status: AssetStatus;
  condition: AssetCondition;
  assignedTo?: string; // Employee ID
  observations: string;
  specifications: AssetSpecifications;
  createdAt: string;
  updatedAt: string;
}

export interface AssetSpecifications {
  // Computer specific
  processor?: string;
  ram?: string;
  storage?: string;
  operatingSystem?: string;
  // Monitor specific
  size?: string;
  resolution?: string;
  // Phone specific
  phoneNumber?: string;
  imei?: string;
}

export type AssetType = 
  | 'computer' 
  | 'monitor' 
  | 'mouse' 
  | 'keyboard' 
  | 'headphone' 
  | 'phone' 
  | 'charger'
  | 'other';

export type AssetStatus = 'active' | 'inactive' | 'maintenance' | 'disposed';
export type AssetCondition = 'good' | 'damaged' | 'defective';

export interface Employee {
  id: string;
  name: string;
  employeeId: string;
  department: string;
  position: string;
  email: string;
  phone: string;
  status: EmployeeStatus;
  createdAt: string;
  updatedAt: string;
}

export type EmployeeStatus = 'active' | 'vacation' | 'leave' | 'terminated';

export interface Movement {
  id: string;
  assetId: string;
  type: MovementType;
  fromEmployeeId?: string;
  toEmployeeId?: string;
  date: string;
  observations: string;
  createdBy: string;
}

export type MovementType = 
  | 'assignment' 
  | 'transfer' 
  | 'return' 
  | 'maintenance' 
  | 'vacation';

export interface DashboardStats {
  totalAssets: number;
  activeAssets: number;
  assignedAssets: number;
  maintenanceAssets: number;
  totalEmployees: number;
  activeEmployees: number;
}