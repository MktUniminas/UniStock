import React, { useState } from 'react';
import { Search, Filter, ArrowRightLeft, Calendar, User, Package } from 'lucide-react';
import { mockMovements, mockAssets, mockEmployees } from '../../data/mockData';
import { Movement, MovementType } from '../../types';

const MovementsList: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [typeFilter, setTypeFilter] = useState<MovementType | 'all'>('all');

  const filteredMovements = mockMovements.filter(movement => {
    const asset = mockAssets.find(a => a.id === movement.assetId);
    const fromEmployee = movement.fromEmployeeId ? mockEmployees.find(e => e.id === movement.fromEmployeeId) : null;
    const toEmployee = movement.toEmployeeId ? mockEmployees.find(e => e.id === movement.toEmployeeId) : null;
    
    const searchText = `${asset?.name} ${asset?.brand} ${asset?.model} ${fromEmployee?.name} ${toEmployee?.name}`.toLowerCase();
    const matchesSearch = searchText.includes(searchTerm.toLowerCase());
    const matchesType = typeFilter === 'all' || movement.type === typeFilter;
    
    return matchesSearch && matchesType;
  });

  const movementTypes = [
    { value: 'all', label: 'Todos os Tipos' },
    { value: 'assignment', label: 'Atribuição' },
    { value: 'transfer', label: 'Transferência' },
    { value: 'return', label: 'Devolução' },
    { value: 'maintenance', label: 'Manutenção' },
    { value: 'vacation', label: 'Férias' }
  ];

  const getMovementTypeLabel = (type: MovementType) => {
    switch (type) {
      case 'assignment': return 'Atribuição';
      case 'transfer': return 'Transferência';
      case 'return': return 'Devolução';
      case 'maintenance': return 'Manutenção';
      case 'vacation': return 'Férias';
      default: return type;
    }
  };

  const getMovementTypeColor = (type: MovementType) => {
    switch (type) {
      case 'assignment': return 'bg-green-100 text-green-800';
      case 'transfer': return 'bg-blue-100 text-blue-800';
      case 'return': return 'bg-yellow-100 text-yellow-800';
      case 'maintenance': return 'bg-red-100 text-red-800';
      case 'vacation': return 'bg-purple-100 text-purple-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="p-6 space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Movimentações</h1>
          <p className="text-gray-600">Histórico completo de movimentações de ativos</p>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="relative col-span-2">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-4 w-4 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Buscar por ativo, funcionário..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md text-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div className="relative">
            <select
              value={typeFilter}
              onChange={(e) => setTypeFilter(e.target.value as MovementType | 'all')}
              className="block w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              {movementTypes.map(type => (
                <option key={type.value} value={type.value}>{type.label}</option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Results Summary */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2 text-sm text-gray-600">
          <ArrowRightLeft className="h-4 w-4" />
          <span>{filteredMovements.length} movimentações encontradas</span>
        </div>
      </div>

      {/* Movements List */}
      {filteredMovements.length > 0 ? (
        <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
          <div className="divide-y divide-gray-200">
            {filteredMovements.map((movement) => {
              const asset = mockAssets.find(a => a.id === movement.assetId);
              const fromEmployee = movement.fromEmployeeId ? mockEmployees.find(e => e.id === movement.fromEmployeeId) : null;
              const toEmployee = movement.toEmployeeId ? mockEmployees.find(e => e.id === movement.toEmployeeId) : null;

              return (
                <div key={movement.id} className="p-6 hover:bg-gray-50 transition-colors duration-200">
                  <div className="flex items-start justify-between">
                    <div className="flex items-start space-x-4">
                      <div className="bg-blue-50 p-2 rounded-lg">
                        <ArrowRightLeft className="h-5 w-5 text-blue-600" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          <h3 className="font-semibold text-gray-900">{asset?.name}</h3>
                          <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${getMovementTypeColor(movement.type)}`}>
                            {getMovementTypeLabel(movement.type)}
                          </span>
                        </div>
                        
                        <div className="space-y-1 text-sm text-gray-600">
                          <div className="flex items-center space-x-2">
                            <Package className="h-4 w-4" />
                            <span>{asset?.brand} {asset?.model} - {asset?.serialNumber}</span>
                          </div>
                          
                          {(fromEmployee || toEmployee) && (
                            <div className="flex items-center space-x-2">
                              <User className="h-4 w-4" />
                              <span>
                                {fromEmployee && `De: ${fromEmployee.name}`}
                                {fromEmployee && toEmployee && ' → '}
                                {toEmployee && `Para: ${toEmployee.name}`}
                                {movement.type === 'maintenance' && 'Enviado para manutenção'}
                              </span>
                            </div>
                          )}
                          
                          <div className="flex items-center space-x-2">
                            <Calendar className="h-4 w-4" />
                            <span>{new Date(movement.date).toLocaleString('pt-BR')}</span>
                          </div>
                        </div>

                        {movement.observations && (
                          <div className="mt-3 p-3 bg-gray-50 rounded-lg">
                            <p className="text-sm text-gray-700">
                              <span className="font-medium">Observações:</span> {movement.observations}
                            </p>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        <div className="text-center py-12">
          <ArrowRightLeft className="h-12 w-12 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">Nenhuma movimentação encontrada</h3>
          <p className="text-gray-600">Tente ajustar os filtros ou termos de busca.</p>
        </div>
      )}
    </div>
  );
};

export default MovementsList;