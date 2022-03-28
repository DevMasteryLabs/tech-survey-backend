const multer = require('multer');

const MIME_TYPE_MAP = {
  'image/png': 'png',
  'image/jpeg': 'jpeg',
  'image/jpg': 'jpg'
};

const fileUpload = multer({
  storage: multer.diskStorage({}),
  fileFilter: (req, file, cb) => {
    const isValid = !!MIME_TYPE_MAP[file.mimetype];
    let error = isValid ? null : new Error('Invalid file type!');
    cb(error, isValid);
  }
});

const upload = fileUpload.single('image'); // because in form data we named the file field 'image'

module.exports = (req, res, next) => {
    upload(req, res, (err) => {
        if (err instanceof multer.MulterError || err) {
            return res.status(400).json({
                type: 'error',
                message: err.message,
                details: err
            })
        } 
        next();
    })
}
