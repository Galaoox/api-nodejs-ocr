import { readTextFile } from "../services/file.service";
import { unlink } from 'fs';


export const readFile = async function (req, res) {
  try {
    const result = await readTextFile(req.file.path);
    unlink(req.file.path, (err) => {
      if (err) throw err;
      console.log(req.file.path + ' was deleted');
    });
    res.status(200).json({
      message: "Successfully read file",
      data: result
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      msg: "Ha ocurrido un error"
    });
  }
};