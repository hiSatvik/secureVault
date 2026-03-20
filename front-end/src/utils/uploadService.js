import localforage from 'localforage';
import axios from "axios";

export async function uploadEncryptedFile({ encryptedData, iv, fileName }) {
  const formData = new FormData();

  formData.append("file", new Blob([encryptedData]));
  formData.append("iv", JSON.stringify(Array.from(iv)));
  formData.append("fileName", fileName);

  const response = await axios.post("http://localhost:8080/api/v1/file/upload", formData);

  return response.data; 
}

export async function fetchMyFiles() {
  const response = await axios.get("http://localhost:8080/api/v1/file/all");

  return response.data;
}

export async function fetchEncryptedBlob(fileId) {
  const response = await axios.get(`http://localhost:8080/api/v1/file/download/${fileId}`, {
    responseType: 'arraybuffer' 
  });
  
  return response.data; 
}

async function handleFileUpload(file) {
    try {
        const { encrpytData, iv, key } = await encrypted(file);
        
        const response = await uploadEncryptedFile({
            encryptedData: encrpytData,
            iv: iv,
            fileName: file.name
        });
        
        const savedFileId = response.data.id;
        await localforage.setItem(`key_${savedFileId}`, key);

        console.log("Yay! Jennie successfully hid the key safely in your browser! 🎀");
    } catch (error) {
        console.error("Oops! Something went wrong:", error);
    }
}