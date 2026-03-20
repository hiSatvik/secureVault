export async function uploadEncryptedFile({ encryptedData, iv, fileName }) {
  const formData = new FormData();

  formData.append("file", new Blob([encryptedData]));
  formData.append("iv", JSON.stringify(Array.from(iv)));
  formData.append("fileName", fileName);

  const response = await fetch("http://localhost:8080/api/v1/file/upload", {
    method: "POST",
    body: formData,
  });

  return response.json();
}