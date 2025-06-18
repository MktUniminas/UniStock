import React from 'react';
import { Employee } from '../../types';
import { User, Mail, Phone, Building, Briefcase, Package } from 'lucide-react';
import { mockAssets } from '../../data/mockData';

interface EmployeeCardProps {
  employee: Employee;
  onClick: () => void;
}

const EmployeeCard: React.FC<EmployeeCardProps> = ({ employee, onClick }) => {
  const assignedAssets = mockAssets.filter(asset => asset.assignedTo === employee.id);
  
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-green-100 text-green-800';
      case 'vacation': return 'bg-blue-100 text-blue-800';
      case 'leave': return 'bg-yellow-100 text-yellow-800';
      case 'terminated': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusLabel = (status: string) => {
    switch (status) {
      case 'active': return 'Ativo';
      case 'vacation': return 'Férias';
      case 'leave': return 'Afastado';
      case 'terminated': return 'Desligado';
      default: return status;
    }
  };

  return (
    <div 
      onClick={onClick}
      className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg hover:border-blue-300 transition-all duration-200 cursor-pointer"
    >
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center space-x-3">
          <div className="bg-blue-50 p-3 rounded-full">
            <User className="h-6 w-6 text-blue-600" />
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 text-lg">{employee.name}</h3>
            <p className="text-sm text-gray-600">ID: {employee.employeeId}</p>
          </div>
        </div>
        <span className={`inline-flex px-3 py-1 text-xs font-medium rounded-full ${getStatusColor(employee.status)}`}>
          {getStatusLabel(employee.status)}
        </span>
      </div>

      <div className="space-y-3">
        <div className="flex items-center text-sm text-gray-600">
          <Building className="h-4 w-4 mr-2" />
          <span className="font-medium">Departamento:</span>
          <span className="ml-1">{employee.department}</span>
        </div>

        <div className="flex items-center text-sm text-gray-600">
          <Briefcase className="h-4 w-4 mr-2" />
          <span className="font-medium">Cargo:</span>
          <span className="ml-1">{employee.position}</span>
        </div>

        <div className="flex items-center text-sm text-gray-600">
          <Mail className="h-4 w-4 mr-2" />
          <span className="font-medium">Email:</span>
          <span className="ml-1 text-blue-600">{employee.email}</span>
        </div>

        <div className="flex items-center text-sm text-gray-600">
          <Phone className="h-4 w-4 mr-2" />
          <span className="font-medium">Telefone:</span>
          <span className="ml-1">{employee.phone}</span>
        </div>
      </div>

      <div className="mt-4 pt-4 border-t border-gray-200">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Package className="h-4 w-4 text-gray-400" />
            <span className="text-sm font-medium text-gray-700">Ativos Atribuídos</span>
          </div>
          <span className="bg-blue-100 text-blue-800 text-sm font-medium px-2 py-1 rounded-full">
            {assignedAssets.length}
          </span>
        </div>
        
        {assignedAssets.length > 0 && (
          <div className="mt-2 text-xs text-gray-500">
            {assignedAssets.slice(0, 2).map(asset => asset.name).join(', ')}
            {assignedAssets.length > 2 && ` +${assignedAssets.length - 2} outros`}
          </div>
        )}
      </div>
    </div>
  );
};

export default EmployeeCard;