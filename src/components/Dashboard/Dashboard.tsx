import React from 'react';
import { Package, Users, CheckCircle, AlertTriangle, TrendingUp, Activity } from 'lucide-react';
import StatCard from './StatCard';
import { mockAssets, mockEmployees } from '../../data/mockData';

const Dashboard: React.FC = () => {
  const totalAssets = mockAssets.length;
  const activeAssets = mockAssets.filter(asset => asset.status === 'active').length;
  const assignedAssets = mockAssets.filter(asset => asset.assignedTo).length;
  const maintenanceAssets = mockAssets.filter(asset => asset.status === 'maintenance').length;
  const totalEmployees = mockEmployees.length;
  const activeEmployees = mockEmployees.filter(emp => emp.status === 'active').length;

  const recentMovements = [
    { id: 1, asset: 'Notebook Dell Latitude 7420', employee: 'João Silva', action: 'Atribuído', date: '15/01/2024' },
    { id: 2, asset: 'iPhone 13 Pro', employee: 'Maria Santos', action: 'Atribuído', date: '17/01/2024' },
    { id: 3, asset: 'Teclado Keychron K2', employee: 'Manutenção', action: 'Enviado', date: '22/01/2024' }
  ];

  const assetsNeedingAttention = mockAssets.filter(asset => 
    asset.condition === 'damaged' || asset.condition === 'defective' || asset.status === 'maintenance'
  );

  return (
    <div className="p-6 space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Dashboard</h1>
        <p className="text-gray-600">Visão geral do sistema de inventário UniStock</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6">
        <StatCard
          title="Total de Ativos"
          value={totalAssets}
          icon={Package}
          color="blue"
          trend={{ value: 12, isPositive: true }}
        />
        <StatCard
          title="Ativos Ativos"
          value={activeAssets}
          icon={CheckCircle}
          color="green"
          trend={{ value: 8, isPositive: true }}
        />
        <StatCard
          title="Ativos Atribuídos"
          value={assignedAssets}
          icon={Users}
          color="purple"
        />
        <StatCard
          title="Em Manutenção"
          value={maintenanceAssets}
          icon={AlertTriangle}
          color="yellow"
        />
        <StatCard
          title="Funcionários"
          value={totalEmployees}
          icon={Users}
          color="blue"
        />
        <StatCard
          title="Funcionários Ativos"
          value={activeEmployees}
          icon={Activity}
          color="green"
        />
      </div>

      {/* Charts and Recent Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Movements */}
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold text-gray-900">Movimentações Recentes</h2>
            <TrendingUp className="h-5 w-5 text-gray-400" />
          </div>
          <div className="space-y-4">
            {recentMovements.map((movement) => (
              <div key={movement.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div>
                  <p className="font-medium text-gray-900">{movement.asset}</p>
                  <p className="text-sm text-gray-600">{movement.employee} • {movement.action}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium text-gray-900">{movement.date}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-4 pt-4 border-t border-gray-200">
            <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
              Ver todas as movimentações →
            </button>
          </div>
        </div>

        {/* Assets Needing Attention */}
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold text-gray-900">Ativos que Precisam de Atenção</h2>
            <AlertTriangle className="h-5 w-5 text-yellow-500" />
          </div>
          <div className="space-y-4">
            {assetsNeedingAttention.map((asset) => (
              <div key={asset.id} className="flex items-center justify-between p-3 bg-red-50 rounded-lg border border-red-200">
                <div>
                  <p className="font-medium text-gray-900">{asset.name}</p>
                  <p className="text-sm text-gray-600">{asset.brand} {asset.model}</p>
                </div>
                <div className="text-right">
                  <span className={`
                    inline-flex px-2 py-1 text-xs font-medium rounded-full
                    ${asset.condition === 'damaged' ? 'bg-yellow-100 text-yellow-800' : ''}
                    ${asset.condition === 'defective' ? 'bg-red-100 text-red-800' : ''}
                    ${asset.status === 'maintenance' ? 'bg-blue-100 text-blue-800' : ''}
                  `}>
                    {asset.condition === 'damaged' && 'Danificado'}
                    {asset.condition === 'defective' && 'Com Defeito'}
                    {asset.status === 'maintenance' && 'Manutenção'}
                  </span>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-4 pt-4 border-t border-gray-200">
            <button className="text-red-600 hover:text-red-700 text-sm font-medium">
              Ver todos os ativos com problemas →
            </button>
          </div>
        </div>
      </div>

      {/* Asset Distribution Chart Placeholder */}
      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-6">Distribuição de Ativos por Tipo</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
          {[
            { type: 'Computadores', count: 1, color: 'bg-blue-500' },
            { type: 'Monitores', count: 1, color: 'bg-green-500' },
            { type: 'Telefones', count: 1, color: 'bg-purple-500' },
            { type: 'Mouses', count: 1, color: 'bg-yellow-500' },
            { type: 'Teclados', count: 1, color: 'bg-red-500' },
            { type: 'Fones', count: 1, color: 'bg-indigo-500' },
            { type: 'Outros', count: 0, color: 'bg-gray-500' }
          ].map((item) => (
            <div key={item.type} className="text-center">
              <div className={`${item.color} h-20 rounded-lg mb-3 flex items-center justify-center`}>
                <span className="text-2xl font-bold text-white">{item.count}</span>
              </div>
              <p className="text-sm font-medium text-gray-700">{item.type}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;