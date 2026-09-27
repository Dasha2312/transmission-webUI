import { useSession } from "@/entities/session/api/useSession";
import useSessionSet from "@/entities/session/api/useSessionSet";
import Checkbox from "@/shared/UI/Checkbox/Checkbox";
import { useState } from "react";
import toast from "react-hot-toast";
import type { DownloadSettings } from "../type/interface";
import Input from "@/shared/UI/Input/Input";

function DownloadsBlock({ onClose }: { onClose: () => void }) {
  const { data } = useSession();
  const { sessionMutate, isPending } = useSessionSet<DownloadSettings>();

  if (!data) {
    return null;
  }

  const [downloadDir, setDownloadDir] = useState(data?.download_dir);

  const [temporaryDir, setTemporaryDir] = useState(data?.download_dir);
  const [useTemporaryFolder, setUseTemporaryFolder] = useState(data?.incomplete_dir_enabled);

  const [downloadQueueSizeValue, setDownloadQueueSizeValue] = useState(data?.download_queue_size);
  const [isDownloadQueueSizeEnabled, setIsDownloadQueueSizeEnabled] = useState(
    data?.download_queue_enabled
  );

  const [appendPartsFiles, setAppendPartsFiles] = useState(data?.rename_partial_files);
  const [startWhenAdded, setStartWhenAdded] = useState(data?.start_added_torrents);

  async function handleSubmitDownloadSetting() {
    try {
      await sessionMutate({
        download_dir: downloadDir,
        incomplete_dir_enabled: useTemporaryFolder,
        incomplete_dir: temporaryDir,
        start_added_torrents: startWhenAdded,
        rename_partial_files: appendPartsFiles,
        download_queue_enabled: isDownloadQueueSizeEnabled,
        download_queue_size: downloadQueueSizeValue,
      });

      onClose();

      toast.success("Download settings saved successfully");
    } catch (error) {
      console.log("error handleSubmitDownloadSetting", error);
    }
  }

  return (
    <>
      <div className="space-y-6 p-6">
        <h3 className="text-lg font-semibold text-gray-900">Downloads</h3>
        <div className="space-y-6">
          <Input
            labelText="Download directory"
            inputId="download-dir"
            inputValue={downloadDir}
            inputOnChange={(e) => setDownloadDir(e.target.value)}
            inputPlaceholder="Enter directory for Downloads"
          />

          <div>
            <Input
              labelText="Use temporary folder"
              inputId="temporary-dir"
              inputValue={temporaryDir}
              inputOnChange={(e) => setTemporaryDir(e.target.value)}
              inputPlaceholder="Enter temporary folder"
              InputDisabled={!useTemporaryFolder}
            />

            <div className="mt-1">
              <Checkbox
                inputText="Active"
                checked={useTemporaryFolder}
                onChange={setUseTemporaryFolder}
              />
            </div>
          </div>


          <div className="mb-3 pb-3 border-gray-200 border-b">
            <Input
              labelText="Download queue size"
              inputId="download-queue-size"
              inputValue={temporaryDir}
              inputOnChange={(e) => setDownloadQueueSizeValue(Number(e.target.value))}
              inputPlaceholder="Enter number of queue size"
              InputDisabled={!isDownloadQueueSizeEnabled}
            />
            <div className="mt-1">
              <Checkbox
                inputText="Active"
                checked={isDownloadQueueSizeEnabled}
                onChange={setIsDownloadQueueSizeEnabled}
              />
            </div>
          </div>

          <div className="mb-3">
            <Checkbox
              inputText="Append 'part' to incomplete files' names"
              checked={appendPartsFiles}
              onChange={setAppendPartsFiles}
            />
          </div>

          <div className="mb-3">
            <Checkbox
              inputText="Start when added"
              checked={startWhenAdded}
              onChange={setStartWhenAdded}
            />
          </div>
        </div>
      </div>

      <div className="flex items-center justify-end gap-3 px-6 py-4 border-t border-gray-200">
        <button
          className="px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
          onClick={() => onClose()}
        >
          Cancel
        </button>
        <button
          type="submit"
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          onClick={handleSubmitDownloadSetting}
          disabled={isPending}
        >
          Save
        </button>
      </div>
    </>
  );
}

export default DownloadsBlock;
