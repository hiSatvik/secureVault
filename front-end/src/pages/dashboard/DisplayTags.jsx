import { useState } from "react";

export default function DisplayTags() {
  const [active, setActive] = useState("folders");

  return (
    <div className="w-80 h-12 bg-gray-300 rounded-xl flex p-1">
      
      {/* Folders Tab */}
      <div
        onClick={() => setActive("folders")}
        className={`flex-1 flex items-center justify-center rounded-lg cursor-pointer font-semibold text-lg transition
        ${
          active === "folders"
            ? "bg-white text-gray-800 shadow-md shadow-red-200"
            : "text-gray-500 hover:text-gray-700"
        }`}
      >
        Folders
      </div>

      {/* Files Tab */}
      <div
        onClick={() => setActive("files")}
        className={`flex-1 flex items-center justify-center rounded-lg cursor-pointer font-semibold text-lg transition
        ${
          active === "files"
            ? "bg-white text-gray-800 shadow-md shadow-rose-200"
            : "text-gray-500 hover:text-gray-700"
        }`}
      >
        Files
      </div>
    </div>
  );
}