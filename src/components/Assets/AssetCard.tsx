import React from 'react';
import { Asset } from '../../types';
import { 
  Laptop, 
  Monitor, 
  Mouse, 
  Keyboard, 
  Headphones, 
  Smartphone, 
  Battery,
  Package,
  User,
  Calendar,
  DollarSign
} from 'lucide-react';

interface AssetCardProps {
  asset: Asset;
  employee?: { name: string };
  onClick: () => void;
}

const AssetCard: React.FC<AssetCardProps> = ({ asset, employee, onClick }) => {
  const getAssetIcon = (type: string) => {
    const iconProps = { className: "h-6 w-6" };
    switch (type) {
      case 'computer': return <Laptop {...iconProps} />;
      case 'monitor': return <Monitor {...iconProps} />;
      case 'mouse': return <Mouse {...iconProps} />;
      case 'keyboard': return <Keyboard {...iconProps} />;
      case 'headphone': return <Headphones {...iconProps} />;
      case 'phone': return <Smartphone {...iconProps} />;
      case 'charger': return <Battery {...iconProps} />;
      default: return <Package {...iconProps} />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-green-100 text-green-800';
      case 'inactive': return 'bg-gray-100 text-gray-800';
      case 'maintenance': return 'bg-yellow-100 text-yellow-800';
      case 'disposed': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getConditionColor = (condition: string) => {
    switch (condition) {
      case 'good': return 'bg-green-100 text-green-800';
      case 'damaged': return 'bg-yellow-100 text-yellow-800';
      case 'defective': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusLabel = (status: string) => {
    switch (status) {
      case 'active': return 'Ativo';
      case 'inactive': return 'Inativo';
      case 'maintenance': return 'Manutenção';
      case 'disposed': return 'Descartado';
      default: return status;
    }
  };

  const getConditionLabel = (condition: string) => {
    switch (condition) {
      case 'good': return 'Bom';
      case 'damaged': return 'Danificado';
      case 'defective': return 'Com Defeito';
      default: return condition;
    }
  };

  return (
    <div 
      onClick={onClick}
      className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg hover:border-blue-300 transition-all duration-200 cursor-pointer"
    >
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center space-x-3">
          <div className="bg-blue-50 p-2 rounded-lg text-blue-600">
            {getAssetIcon(asset.type)}
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 text-lg">{asset.name}</h3>
            <p className="text-sm text-gray-600">{asset.brand} {asset.model}</p>
          </div>
        </div>
        <div className="flex flex-col space-y-2">
          <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(asset.status)}`}>
            {getStatusLabel(asset.status)}
          </span>
          <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${getConditionColor(asset.condition)}`}>
            {getConditionLabel(asset.condition)}
          </span>
        </div>
      </div>

      <div className="space-y-3">
        <div className="flex items-center text-sm text-gray-600">
          <Package className="h-4 w-4 mr-2" />
          <span className="font-medium">Série:</span>
          <span className="ml-1">{asset.serialNumber}</span>
        </div>

        {employee && (
          <div className="flex items-center text-sm text-gray-600">
            <User className="h-4 w-4 mr-2" />
            <span className="font-medium">Atribuído para:</span>
            <span className="ml-1 text-blue-600 font-medium">{employee.name}</span>
          </div>
        )}

        <div className="flex items-center text-sm text-gray-600">
          <Calendar className="h-4 w-4 mr-2" />
          <span className="font-medium">Aquisição:</span>
          <span className="ml-1">{new Date(asset.acquisitionDate).toLocaleDateString('pt-BR')}</span>
        </div>

        <div className="flex items-center text-sm text-gray-600">
          <DollarSign className="h-4 w-4 mr-2" />
          <span className="font-medium">Valor:</span>
          <span className="ml-1">R$ {asset.acquisitionValue.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</span>
        </div>
      </div>

      {asset.observations && (
        <div className="mt-4 p-3 bg-gray-50 rounded-lg">
          <p className="text-sm text-gray-700">
            <span className="font-medium">Observações:</span> {asset.observations}
          </p>
        </div>
      )}
    </div>
  );
};

export default AssetCard;