// services/fileServices.js
import pool from "../models/db.js";

export async function saveFileData({userId, fileName, filePath, iv }) {

  const query = `
  INSERT INTO files (user_id, file_name, filepath, iv)
  VALUES ($1, $2, $3, $4)
  RETURNING id, file_name, file_path, iv
  `;

  const values = [userId, fileName, filePath, iv];

  try {
    const result = await pool.query(query, values);

    return result.rows[0];
  } catch(err) {
    console.log("Error while saving in Database", err);
    throw error;
  }
}