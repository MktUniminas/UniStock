import React from 'react';
import { Settings as SettingsIcon, Users, Shield, Database, Bell, Palette, Globe } from 'lucide-react';

const Settings: React.FC = () => {
  const settingsCategories = [
    {
      id: 'users',
      title: 'Usuários e Permissões',
      description: 'Gerencie usuários do sistema e suas permissões de acesso',
      icon: Users,
      color: 'bg-blue-50 text-blue-600 border-blue-200'
    },
    {
      id: 'security',
      title: 'Segurança',
      description: 'Configurações de segurança, autenticação e controle de acesso',
      icon: Shield,
      color: 'bg-green-50 text-green-600 border-green-200'
    },
    {
      id: 'database',
      title: 'Backup e Dados',
      description: 'Configurações de backup automático e gestão de dados',
      icon: Database,
      color: 'bg-purple-50 text-purple-600 border-purple-200'
    },
    {
      id: 'notifications',
      title: 'Notificações',
      description: 'Configure alertas e notificações do sistema',
      icon: Bell,
      color: 'bg-yellow-50 text-yellow-600 border-yellow-200'
    },
    {
      id: 'appearance',
      title: 'Aparência',
      description: 'Personalize a interface e tema do sistema',
      icon: Palette,
      color: 'bg-pink-50 text-pink-600 border-pink-200'
    },
    {
      id: 'integration',
      title: 'Integrações',
      description: 'Configure integrações com sistemas externos',
      icon: Globe,
      color: 'bg-indigo-50 text-indigo-600 border-indigo-200'
    }
  ];

  const systemInfo = [
    { label: 'Versão do Sistema', value: 'UniStock v1.0' },
    { label: 'Última Atualização', value: '25/01/2024' },
    { label: 'Banco de Dados', value: 'PostgreSQL 14.2' },
    { label: 'Status', value: 'Online', color: 'text-green-600' }
  ];

  return (
    <div className="p-6 space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Configurações</h1>
          <p className="text-gray-600">Gerencie as configurações e preferências do sistema UniStock</p>
        </div>
      </div>

      {/* System Status */}
      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <div className="flex items-center space-x-3 mb-4">
          <div className="bg-blue-50 p-2 rounded-lg">
            <SettingsIcon className="h-5 w-5 text-blue-600" />
          </div>
          <h2 className="text-lg font-semibold text-gray-900">Informações do Sistema</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {systemInfo.map((info, index) => (
            <div key={index} className="text-center p-3 bg-gray-50 rounded-lg">
              <p className="text-sm text-gray-600">{info.label}</p>
              <p className={`font-semibold ${info.color || 'text-gray-900'}`}>{info.value}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Settings Categories */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {settingsCategories.map((category) => {
          const Icon = category.icon;
          
          return (
            <div key={category.id} className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-shadow duration-200 cursor-pointer">
              <div className="flex items-start space-x-4">
                <div className={`p-3 rounded-lg border ${category.color}`}>
                  <Icon className="h-6 w-6" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900 text-lg mb-2">{category.title}</h3>
                  <p className="text-sm text-gray-600 mb-3">{category.description}</p>
                  <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                    Configurar →
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Quick Actions */}
      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Ações Rápidas</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <button className="bg-blue-50 hover:bg-blue-100 text-blue-700 p-4 rounded-lg text-left transition-colors duration-200">
            <div className="font-medium mb-1">Backup Manual</div>
            <div className="text-sm text-blue-600">Criar backup dos dados agora</div>
          </button>
          <button className="bg-green-50 hover:bg-green-100 text-green-700 p-4 rounded-lg text-left transition-colors duration-200">
            <div className="font-medium mb-1">Verificar Integridade</div>
            <div className="text-sm text-green-600">Executar verificação do sistema</div>
          </button>
          <button className="bg-purple-50 hover:bg-purple-100 text-purple-700 p-4 rounded-lg text-left transition-colors duration-200">
            <div className="font-medium mb-1">Limpar Cache</div>
            <div className="text-sm text-purple-600">Limpar cache do sistema</div>
          </button>
        </div>
      </div>

      {/* Support Information */}
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl border border-blue-200 p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-3">Suporte e Documentação</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h3 className="font-medium text-gray-900 mb-2">Central de Ajuda</h3>
            <p className="text-sm text-gray-600 mb-3">Acesse nossa documentação completa e tutoriais</p>
            <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
              Acessar Documentação →
            </button>
          </div>
          <div>
            <h3 className="font-medium text-gray-900 mb-2">Suporte Técnico</h3>
            <p className="text-sm text-gray-600 mb-3">Entre em contato com nossa equipe de suporte</p>
            <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
              Contatar Suporte →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;