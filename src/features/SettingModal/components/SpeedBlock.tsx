import { SPEED_LIMIT_OPTIONS } from "@/shared/const/const";
import Select from "@/shared/UI/Select/Select";

function SpeedBlock() {
  return (
    <>
      <div className="space-y-6 p-6">
        <h3 className="text-lg font-semibold text-gray-900">Speed</h3> 
        <div className="space-y-6">
          <div className="mb-3 pb-3 border-gray-200 border-b">
            <Select 
              selectOptions={SPEED_LIMIT_OPTIONS} 
              selectName="speed-limit-up" 
              selectId="speed-limit-up"
              labelText="Speed limit upload"
            />
          </div>

          <div className="mb-3">
            <Select 
              selectOptions={SPEED_LIMIT_OPTIONS} 
              selectName="speed-limit-download" 
              selectId="speed-limit-download"
              labelText="Speed limit download"
            />
          </div>
        </div> 
      </div>

      <div className="flex items-center justify-end gap-3 px-6 py-4 border-t border-gray-200">
        <button
          className="px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
        >
          Cancel
        </button>
        <button
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          Save
        </button>
      </div>
    </>
  );
}

export default SpeedBlock;