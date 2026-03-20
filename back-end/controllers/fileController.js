import { saveFileData } from "../services/fileServices.js";

export async function uploadFile(req, res) {
    try {
        const file = req.file;
        const {iv, fileName} = req.body;

        if(!file) {
            return req.status(400).message({
                message: "No file recieved"
            });
        }

        const result = saveFileData({
            fileName,
            filePath: file.path,
            iv,
        });

        res.status(200).json({
            message: "Encrypted file stored",
            data: "result"
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({
            message: "Server me!"
        });
    }
}