import React, { useState } from 'react';
import { Search, Filter, Plus, Package } from 'lucide-react';
import AssetCard from './AssetCard';
import { mockAssets, mockEmployees } from '../../data/mockData';
import { Asset, AssetType, AssetStatus } from '../../types';

const AssetsList: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [typeFilter, setTypeFilter] = useState<AssetType | 'all'>('all');
  const [statusFilter, setStatusFilter] = useState<AssetStatus | 'all'>('all');
  const [selectedAsset, setSelectedAsset] = useState<Asset | null>(null);

  const filteredAssets = mockAssets.filter(asset => {
    const matchesSearch = asset.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         asset.brand.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         asset.model.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         asset.serialNumber.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesType = typeFilter === 'all' || asset.type === typeFilter;
    const matchesStatus = statusFilter === 'all' || asset.status === statusFilter;
    
    return matchesSearch && matchesType && matchesStatus;
  });

  const getEmployeeName = (employeeId?: string) => {
    if (!employeeId) return undefined;
    const employee = mockEmployees.find(emp => emp.id === employeeId);
    return employee ? { name: employee.name } : undefined;
  };

  const assetTypes = [
    { value: 'all', label: 'Todos os Tipos' },
    { value: 'computer', label: 'Computadores' },
    { value: 'monitor', label: 'Monitores' },
    { value: 'mouse', label: 'Mouses' },
    { value: 'keyboard', label: 'Teclados' },
    { value: 'headphone', label: 'Fones' },
    { value: 'phone', label: 'Telefones' },
    { value: 'charger', label: 'Carregadores' },
    { value: 'other', label: 'Outros' }
  ];

  const assetStatuses = [
    { value: 'all', label: 'Todos os Status' },
    { value: 'active', label: 'Ativo' },
    { value: 'inactive', label: 'Inativo' },
    { value: 'maintenance', label: 'Manutenção' },
    { value: 'disposed', label: 'Descartado' }
  ];

  return (
    <div className="p-6 space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Gestão de Ativos</h1>
          <p className="text-gray-600">Gerencie todos os equipamentos e periféricos da empresa</p>
        </div>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center space-x-2 transition-colors duration-200">
          <Plus className="h-4 w-4" />
          <span>Novo Ativo</span>
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
              placeholder="Buscar ativos..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md text-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div className="relative">
            <select
              value={typeFilter}
              onChange={(e) => setTypeFilter(e.target.value as AssetType | 'all')}
              className="block w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              {assetTypes.map(type => (
                <option key={type.value} value={type.value}>{type.label}</option>
              ))}
            </select>
          </div>

          <div className="relative">
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value as AssetStatus | 'all')}
              className="block w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              {assetStatuses.map(status => (
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
          <Package className="h-4 w-4" />
          <span>{filteredAssets.length} ativos encontrados</span>
        </div>
      </div>

      {/* Assets Grid */}
      {filteredAssets.length > 0 ? (
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {filteredAssets.map((asset) => (
            <AssetCard
              key={asset.id}
              asset={asset}
              employee={getEmployeeName(asset.assignedTo)}
              onClick={() => setSelectedAsset(asset)}
            />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <Package className="h-12 w-12 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">Nenhum ativo encontrado</h3>
          <p className="text-gray-600 mb-4">Tente ajustar os filtros ou termos de busca.</p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg inline-flex items-center space-x-2">
            <Plus className="h-4 w-4" />
            <span>Cadastrar Primeiro Ativo</span>
          </button>
        </div>
      )}
    </div>
  );
};

export default AssetsList;