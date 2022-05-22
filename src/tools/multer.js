import multer from "multer";
import path from 'path';
import fs from 'fs'


export const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        const pathFolder = path.join(__dirname, '../public');
        fs.mkdirSync(pathFolder, { recursive: true })
        cb(null, pathFolder);
    },
    filename: (req, file, cb) => {
        const fileName = file.originalname.toLowerCase().split(' ').join('-');
        cb(null, fileName)
    }
});

export const upload = multer({
    storage: storage,
    // fileFilter: (req, file, cb) => {
    //     if (file.mimetype == "image/bmp" || file.mimetype == "image/jpg" || file.mimetype == "image/png" || file.mimetype == "image/pbm") {
    //         cb(null, true);
    //     } else {
    //         cb(null, false);
    //         return cb(new Error('Solo se permiten los siguientes formatos: bmp, jpg, png, pbm'));
    //     }
    // }
});