import React, { useState } from 'react';
import Sidebar from './components/Layout/Sidebar';
import Header from './components/Layout/Header';
import Dashboard from './components/Dashboard/Dashboard';
import AssetsList from './components/Assets/AssetsList';
import EmployeesList from './components/Employees/EmployeesList';
import MovementsList from './components/Movements/MovementsList';
import ReportsList from './components/Reports/ReportsList';
import Settings from './components/Settings/Settings';

function App() {
  const [currentView, setCurrentView] = useState('dashboard');
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const renderCurrentView = () => {
    switch (currentView) {
      case 'dashboard':
        return <Dashboard />;
      case 'assets':
        return <AssetsList />;
      case 'employees':
        return <EmployeesList />;
      case 'movements':
        return <MovementsList />;
      case 'reports':
        return <ReportsList />;
      case 'settings':
        return <Settings />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar
        currentView={currentView}
        onViewChange={setCurrentView}
        isOpen={sidebarOpen}
        onToggle={() => setSidebarOpen(!sidebarOpen)}
      />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header onMenuToggle={() => setSidebarOpen(!sidebarOpen)} />
        
        <main className="flex-1 overflow-auto">
          {renderCurrentView()}
        </main>
      </div>
    </div>
  );
}

export default App;