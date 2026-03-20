import { Folder, File } from "lucide-react";
import { useRef, useState, useEffect } from "react";
import { encrypted } from "../../utils/encryption";
import { uploadEncryptedFile } from "../../utils/uploadService";

export default function AddFiles() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [selectedFolder, setSelectedFolder] = useState([]);
  
  const [folderPreviews, setFolderPreviews] = useState([]);
  const [previewUrl, setPreviewUrl] = useState(null);

  const fileInputRef = useRef(null);
  const folderInputRef = useRef(null);

  // ---------------- FILE ----------------
  function handleFile() {
    fileInputRef.current.click();
  }

  function handleFileChange(e) {
    const file = e.target.files[0];

    if (file) {
      setSelectedFile(file);
      setSelectedFolder([]); // clear folder if file selected
      setFolderPreviews([]); // clear folder previews too, just to be tidy! 🧹

      if (file.type.startsWith("image/")) {
        setPreviewUrl(URL.createObjectURL(file));
      } else {
        setPreviewUrl(null);
      }
    }
  }

  // ---------------- FOLDER ----------------
  function handleFolder() {
    folderInputRef.current.click();
  }

  function handleFolderChange(e) {
    const files = Array.from(e.target.files);

    if (files.length > 0) {
      setSelectedFolder(files);
      setSelectedFile(null); // clear file if folder selected
      setPreviewUrl(null);
    }
  }

  // ---------------- Upload files to backend ----------------
  async function handleUpload() {
    try {
      console.log("Generating encrypted Data");
      if(selectedFile) {
        const {encryptedData, iv} = await encrypted(selectedFile);

        await uploadEncryptedFile({
          encryptedData, iv, fileName: selectedFile.name
        });

        

        console.log("File encrypted and uploaded");
      }

      if(selectedFolder) {
        for(let file in selectedFolder) {
          const {encryptedData, iv} = await uploadEncryptedFile(file);

          await uploadEncryptedFile({
            encryptedData,
            iv,
            fileName: file.name,
          });
        }

        console.log("Folder encrypted");
      }
    } catch (err) {
      console.error("Somethin went wrong", err);
    }
  }

  useEffect(() => {
    return () => {
      if (previewUrl) URL.revokeObjectURL(previewUrl);
    };
  }, [previewUrl]);

  
  useEffect(() => {
    const previews = selectedFolder.slice(0, 6).map((file) => {
      if (file.type.startsWith("image/")) {
        return { name: file.name, url: URL.createObjectURL(file) };
      }
      return { name: file.name, url: null };
    });

    setFolderPreviews(previews);

    return () => {
      // Tidy up time! We have to revoke all those URLs when we're done. 🧼✨
      previews.forEach((p) => {
        if (p.url) URL.revokeObjectURL(p.url);
      });
    };
  }, [selectedFolder]);

  return (
    <>
      {/* Hidden Inputs */}
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        style={{ display: "none" }}
      />

      <input
        type="file"
        ref={folderInputRef}
        onChange={handleFolderChange}
        style={{ display: "none" }}
        webkitdirectory="true"
      />

      {/* Top Buttons */}
      <div className="flex gap-7">
        {/* Folder */}
        <div
          onClick={handleFolder}
          className="w-64 p-5 border-2 border-gray-300 rounded-2xl cursor-pointer
          hover:-translate-y-2 hover:shadow-xl transition-all"
        >
          <Folder className="w-10 h-10 text-gray-500" />
          <p className="text-xl text-gray-500 mt-2">Upload Folder</p>
        </div>

        {/* File */}
        <div
          onClick={handleFile}
          className="w-64 p-5 border-2 border-gray-300 rounded-2xl cursor-pointer
          hover:-translate-y-2 hover:shadow-xl transition-all"
        >
          <File className="w-10 h-10 text-gray-500" />
          <p className="text-xl text-gray-500 mt-2">Upload File</p>
        </div>

        <button
        onClick={handleUpload}
        className="mt-6 px-6 py-2 bg-black text-white rounded-xl hover:bg-gray-800 transition"
        >Encrypt & Upload</button>
      </div>

      {/* ---------------- FILE PREVIEW ---------------- */}
      {selectedFile && (
        <div className="mt-8 flex flex-col items-center">
          <p className="mb-3 text-gray-700">
            <strong>File:</strong> {selectedFile.name}
          </p>

          {previewUrl && (
            <img
              src={previewUrl}
              alt="preview"
              className="max-w-xs rounded-xl shadow-lg border"
            />
          )}
        </div>
      )}

      {/* ---------------- FOLDER STACK DESIGN ---------------- */}
      {selectedFolder.length > 0 && (
        <div className="mt-10 flex flex-col items-center">
          <p className="mb-4 text-gray-700 font-semibold">
            Folder ({selectedFolder.length} files)
          </p>

          <div className="relative w-80 h-60 overflow-hidden">
            {/* We map over Jennie's new folderPreviews array now! */}
            {folderPreviews.map((previewObj, index) => (
              <div
                key={index}
                className="absolute w-full h-40 bg-white rounded-xl shadow-md border
                flex items-center justify-center text-sm text-gray-600
                transition-all duration-300 hover:-translate-y-3 hover:shadow-xl overflow-hidden"
                style={{
                  top: `${index * 12}px`,
                  zIndex: selectedFolder.length - index
                }}
              >
                {/* If it's a cute image, show it! Otherwise, show the text. */}
                {previewObj.url ? (
                  <img 
                    src={previewObj.url} 
                    alt={previewObj.name} 
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <span className="px-4">{previewObj.name}</span>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
}