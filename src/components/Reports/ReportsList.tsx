import React from 'react';
import { BarChart3, Download, Calendar, Users, Package, AlertTriangle, TrendingUp, FileText } from 'lucide-react';

const ReportsList: React.FC = () => {
  const reports = [
    {
      id: 1,
      title: 'Relatório de Ativos por Funcionário',
      description: 'Lista completa de equipamentos atribuídos a cada colaborador',
      icon: Users,
      color: 'bg-blue-50 text-blue-600 border-blue-200',
      lastGenerated: '2024-01-25T10:00:00Z'
    },
    {
      id: 2,
      title: 'Relatório de Ativos por Tipo',
      description: 'Distribuição e análise dos equipamentos por categoria',
      icon: Package,
      color: 'bg-green-50 text-green-600 border-green-200',
      lastGenerated: '2024-01-24T15:30:00Z'
    },
    {
      id: 3,
      title: 'Relatório de Estado dos Ativos',
      description: 'Status de conservação e condição dos equipamentos',
      icon: AlertTriangle,
      color: 'bg-yellow-50 text-yellow-600 border-yellow-200',
      lastGenerated: '2024-01-23T09:15:00Z'
    },
    {
      id: 4,
      title: 'Histórico de Movimentações',
      description: 'Registro detalhado de todas as movimentações de ativos',
      icon: TrendingUp,
      color: 'bg-purple-50 text-purple-600 border-purple-200',
      lastGenerated: '2024-01-25T14:45:00Z'
    },
    {
      id: 5,
      title: 'Ativos em Manutenção/Descarte',
      description: 'Equipamentos que necessitam reparo ou foram descartados',
      icon: AlertTriangle,
      color: 'bg-red-50 text-red-600 border-red-200',
      lastGenerated: '2024-01-20T11:20:00Z'
    },
    {
      id: 6,
      title: 'Auditoria de Inventário',
      description: 'Comparação entre inventário físico e registros do sistema',
      icon: FileText,
      color: 'bg-indigo-50 text-indigo-600 border-indigo-200',
      lastGenerated: '2024-01-22T16:00:00Z'
    }
  ];

  const quickStats = [
    { label: 'Relatórios Disponíveis', value: '6', color: 'text-blue-600' },
    { label: 'Último Gerado', value: 'Hoje', color: 'text-green-600' },
    { label: 'Downloads Este Mês', value: '24', color: 'text-purple-600' },
    { label: 'Relatórios Agendados', value: '3', color: 'text-yellow-600' }
  ];

  return (
    <div className="p-6 space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Relatórios e Auditoria</h1>
          <p className="text-gray-600">Gere relatórios personalizados e realize auditorias do inventário</p>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {quickStats.map((stat, index) => (
          <div key={index} className="bg-white rounded-xl border border-gray-200 p-4">
            <div className="text-center">
              <p className={`text-2xl font-bold ${stat.color}`}>{stat.value}</p>
              <p className="text-sm text-gray-600 mt-1">{stat.label}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Reports Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {reports.map((report) => {
          const Icon = report.icon;
          
          return (
            <div key={report.id} className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-shadow duration-200">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className={`p-3 rounded-lg border ${report.color}`}>
                    <Icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 text-lg">{report.title}</h3>
                    <p className="text-sm text-gray-600 mt-1">{report.description}</p>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                <div className="flex items-center space-x-2">
                  <Calendar className="h-4 w-4" />
                  <span>Último: {new Date(report.lastGenerated).toLocaleDateString('pt-BR')}</span>
                </div>
              </div>

              <div className="flex space-x-3">
                <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center justify-center space-x-2 transition-colors duration-200">
                  <BarChart3 className="h-4 w-4" />
                  <span>Gerar Relatório</span>
                </button>
                <button className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-lg flex items-center space-x-2 transition-colors duration-200">
                  <Download className="h-4 w-4" />
                  <span>Download</span>
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Custom Report Builder */}
      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <div className="flex items-center space-x-3 mb-6">
          <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-3 rounded-lg">
            <BarChart3 className="h-6 w-6 text-white" />
          </div>
          <div>
            <h2 className="text-xl font-semibold text-gray-900">Construtor de Relatórios Personalizado</h2>
            <p className="text-gray-600">Crie relatórios sob medida para suas necessidades específicas</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Tipo de Dados</label>
            <select className="block w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
              <option>Ativos</option>
              <option>Funcionários</option>
              <option>Movimentações</option>
              <option>Ambos</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Período</label>
            <select className="block w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
              <option>Último mês</option>
              <option>Últimos 3 meses</option>
              <option>Último ano</option>
              <option>Personalizado</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Formato</label>
            <select className="block w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
              <option>PDF</option>
              <option>Excel</option>
              <option>CSV</option>
            </select>
          </div>
        </div>

        <div className="flex justify-end">
          <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-6 py-2 rounded-lg flex items-center space-x-2 transition-all duration-200">
            <BarChart3 className="h-4 w-4" />
            <span>Gerar Relatório Personalizado</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReportsList;