function DownloadsBlock() {
  return (
    <div className="space-y-6">
      <h3 className="text-lg font-semibold text-gray-900">Downloads</h3> 
      <div className="space-y-6">
        <div className="mb-3">
          <label htmlFor="download-dir" className="block text-sm font-medium text-gray-700">Save files to location</label>
          <input type="text" name="download-dir" className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg py-2 px-4" />
        </div>
        <div className="mb-3">
          <label htmlFor="temporary-dir" className="block text-sm font-medium text-gray-700">Use temporary folder</label>
          <input type="text" name="temporary-dir" className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg py-2 px-4" />
          <div className="mt-1">
            <label className="flex gap-3 items-center cursor-pointer">
              <input
                type="checkbox"
                className="hidden peer"
              />
              <span className="w-5 h-5 border border-slate-300 rounded peer-checked:border-blue-600 flex items-center justify-center">

                  <svg width="11" height="8" viewBox="0 0 11 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="m10.092.952-.005-.006-.006-.005A.45.45 0 0 0 9.43.939L4.162 6.23 1.585 3.636a.45.45 0 0 0-.652 0 .47.47 0 0 0 0 .657l.002.002L3.58 6.958a.8.8 0 0 0 .567.242.78.78 0 0 0 .567-.242l5.333-5.356a.474.474 0 0 0 .044-.65Zm-5.86 5.349V6.3Z" fill="#2563EB" stroke="#2563EB" strokeWidth=".4"/>
                  </svg>

              </span>
              <span className="text-gray-700 select-none text-sm">Use temporary folder</span>
            </label>
          </div>
        </div>

        <div className="mb-3">
          <label htmlFor="temporary-dir" className="block text-sm font-medium text-gray-700">Download queue size</label>
          <input type="number" name="temporary-dir" className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg py-2 px-4" />
          <div className="mt-1">
            <label className="flex gap-3 items-center cursor-pointer">
              <input
                type="checkbox"
                className="hidden peer"
              />
              <span className="w-5 h-5 border border-slate-300 rounded peer-checked:border-blue-600 flex items-center justify-center">

                  <svg width="11" height="8" viewBox="0 0 11 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="m10.092.952-.005-.006-.006-.005A.45.45 0 0 0 9.43.939L4.162 6.23 1.585 3.636a.45.45 0 0 0-.652 0 .47.47 0 0 0 0 .657l.002.002L3.58 6.958a.8.8 0 0 0 .567.242.78.78 0 0 0 .567-.242l5.333-5.356a.474.474 0 0 0 .044-.65Zm-5.86 5.349V6.3Z" fill="#2563EB" stroke="#2563EB" strokeWidth=".4"/>
                  </svg>

              </span>
              <span className="text-gray-700 select-none text-sm">Active</span>
            </label>
          </div>
        </div>

        <div className="mb-3">
          <label className="flex gap-3 items-center cursor-pointer">
            <input
              type="checkbox"
              className="hidden peer"
            />
            <span className="w-5 h-5 border border-slate-300 rounded peer-checked:border-blue-600 flex items-center justify-center">

                <svg width="11" height="8" viewBox="0 0 11 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="m10.092.952-.005-.006-.006-.005A.45.45 0 0 0 9.43.939L4.162 6.23 1.585 3.636a.45.45 0 0 0-.652 0 .47.47 0 0 0 0 .657l.002.002L3.58 6.958a.8.8 0 0 0 .567.242.78.78 0 0 0 .567-.242l5.333-5.356a.474.474 0 0 0 .044-.65Zm-5.86 5.349V6.3Z" fill="#2563EB" stroke="#2563EB" strokeWidth=".4"/>
                </svg>

            </span>
            <span className="text-gray-700 select-none text-sm">Append "part" to incomplete files' names</span>
          </label>
        </div>
        
      </div>
    </div>
  );
}

export default DownloadsBlock;