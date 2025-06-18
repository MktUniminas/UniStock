import React, { useState } from 'react';
import { Search, Filter, Plus, Users } from 'lucide-react';
import EmployeeCard from './EmployeeCard';
import { mockEmployees } from '../../data/mockData';
import { Employee, EmployeeStatus } from '../../types';

const EmployeesList: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [departmentFilter, setDepartmentFilter] = useState<string>('all');
  const [statusFilter, setStatusFilter] = useState<EmployeeStatus | 'all'>('all');
  const [selectedEmployee, setSelectedEmployee] = useState<Employee | null>(null);

  const filteredEmployees = mockEmployees.filter(employee => {
    const matchesSearch = employee.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         employee.employeeId.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         employee.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         employee.position.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesDepartment = departmentFilter === 'all' || employee.department === departmentFilter;
    const matchesStatus = statusFilter === 'all' || employee.status === statusFilter;
    
    return matchesSearch && matchesDepartment && matchesStatus;
  });

  const departments = ['all', ...Array.from(new Set(mockEmployees.map(emp => emp.department)))];
  
  const employeeStatuses = [
    { value: 'all', label: 'Todos os Status' },
    { value: 'active', label: 'Ativo' },
    { value: 'vacation', label: 'Férias' },
    { value: 'leave', label: 'Afastado' },
    { value: 'terminated', label: 'Desligado' }
  ];

  return (
    <div className="p-6 space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Gestão de Funcionários</h1>
          <p className="text-gray-600">Gerencie os colaboradores e seus equipamentos atribuídos</p>
        </div>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center space-x-2 transition-colors duration-200">
          <Plus className="h-4 w-4" />
          <span>Novo Funcionário</span>
        </button>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-4 w-4 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Buscar funcionários..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md text-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div className="relative">
            <select
              value={departmentFilter}
              onChange={(e) => setDepartmentFilter(e.target.value)}
              className="block w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="all">Todos os Departamentos</option>
              {departments.filter(dept => dept !== 'all').map(dept => (
                <option key={dept} value={dept}>{dept}</option>
              ))}
            </select>
          </div>

          <div className="relative">
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value as EmployeeStatus | 'all')}
              className="block w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              {employeeStatuses.map(status => (
                <option key={status.value} value={status.value}>{status.label}</option>
              ))}
            </select>
          </div>

          <button className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-md flex items-center space-x-2 transition-colors duration-200">
            <Filter className="h-4 w-4" />
            <span>Filtros Avançados</span>
          </button>
        </div>
      </div>

      {/* Results Summary */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2 text-sm text-gray-600">
          <Users className="h-4 w-4" />
          <span>{filteredEmployees.length} funcionários encontrados</span>
        </div>
      </div>

      {/* Employees Grid */}
      {filteredEmployees.length > 0 ? (
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {filteredEmployees.map((employee) => (
            <EmployeeCard
              key={employee.id}
              employee={employee}
              onClick={() => setSelectedEmployee(employee)}
            />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <Users className="h-12 w-12 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">Nenhum funcionário encontrado</h3>
          <p className="text-gray-600 mb-4">Tente ajustar os filtros ou termos de busca.</p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg inline-flex items-center space-x-2">
            <Plus className="h-4 w-4" />
            <span>Cadastrar Primeiro Funcionário</span>
          </button>
        </div>
      )}
    </div>
  );
};

export default EmployeesList;