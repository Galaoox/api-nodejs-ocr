import multer from "multer";
import path from 'path';

export const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname, '../public'));
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