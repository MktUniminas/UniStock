import React from 'react';
import { 
  LayoutDashboard, 
  Package, 
  Users, 
  ArrowRightLeft, 
  BarChart3, 
  Settings,
  Laptop,
  Menu,
  X
} from 'lucide-react';

interface SidebarProps {
  currentView: string;
  onViewChange: (view: string) => void;
  isOpen: boolean;
  onToggle: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ currentView, onViewChange, isOpen, onToggle }) => {
  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'assets', label: 'Ativos', icon: Package },
    { id: 'employees', label: 'Funcionários', icon: Users },
    { id: 'movements', label: 'Movimentações', icon: ArrowRightLeft },
    { id: 'reports', label: 'Relatórios', icon: BarChart3 },
    { id: 'settings', label: 'Configurações', icon: Settings }
  ];

  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-20 lg:hidden"
          onClick={onToggle}
        />
      )}
      
      {/* Sidebar */}
      <div className={`
        fixed left-0 top-0 h-full bg-white border-r border-gray-200 z-30 transform transition-transform duration-300 ease-in-out
        lg:relative lg:translate-x-0 lg:z-0
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
        w-64
      `}>
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <div className="flex items-center space-x-3">
            <div className="bg-blue-600 p-2 rounded-lg">
              <Laptop className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">UniStock</h1>
              <p className="text-sm text-gray-500">Inventário</p>
            </div>
          </div>
          <button
            onClick={onToggle}
            className="p-1 rounded-md hover:bg-gray-100 lg:hidden"
          >
            <X className="h-5 w-5 text-gray-500" />
          </button>
        </div>

        <nav className="mt-6 px-3">
          <ul className="space-y-1">
            {menuItems.map((item) => {
              const Icon = item.icon;
              const isActive = currentView === item.id;
              
              return (
                <li key={item.id}>
                  <button
                    onClick={() => {
                      onViewChange(item.id);
                      if (window.innerWidth < 1024) onToggle();
                    }}
                    className={`
                      w-full flex items-center px-3 py-2.5 text-sm font-medium rounded-lg transition-colors duration-200
                      ${isActive 
                        ? 'bg-blue-50 text-blue-700 border-r-2 border-blue-600' 
                        : 'text-gray-700 hover:bg-gray-50 hover:text-gray-900'
                      }
                    `}
                  >
                    <Icon className={`mr-3 h-5 w-5 ${isActive ? 'text-blue-600' : 'text-gray-400'}`} />
                    {item.label}
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-gray-200">
          <div className="text-xs text-gray-500 text-center">
            UniStock v1.0
            <br />
            Sistema de Inventário
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;