import Modal from "@/shared/UI/Modal/Modal";
import { settingsTabs } from "./data/data";
import { useState } from "react";

function SettingModal({onClose}: {onClose: () => void}) {
  const [activeTab, setActiveTab] = useState('downloads');

  const ActiveComponent = settingsTabs.find(item => item.id === activeTab)?.component

  return (
    <Modal isOpen={true} title="Setting" onClose={onClose} classStyle="!max-w-4xl max-h-[80vh] flex flex-col">
      <div className="flex flex-1 overflow-hidden">
        <div className="w-48 p-2 bg-gray-50 border-r border-gray-200 overflow-y-auto rounded-s-lg">
          {settingsTabs.map(tab => {
            const Icon = tab.icon;

            return (
              <button key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors mb-1 ${
                      activeTab === tab.id
                        ? 'bg-blue-100 text-blue-700'
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
              >
                <Icon className="w-4 h-4" />
                <span className="text-sm">{tab.label}</span>
              </button>
            )
          })}
        </div>

        <div className="flex-1 overflow-y-auto">
          {ActiveComponent && <ActiveComponent />}
        </div>
      </div>

      
    </Modal>
  );
}

export default SettingModal;