// services/fileServices.js

export async function saveFileData({ fileName, filePath, iv }) {
  // Later → insert into DB

  return {
    fileName,
    filePath,
    iv,
  };
}