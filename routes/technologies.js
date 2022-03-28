const express = require('express');
const multerFileUploadCloud = require('../middlewares/multer-file-upload/cloudinary')
const multerFileUpload = require('../middlewares/multer-file-upload/local')

const { saveTechnology, saveTechnologyViaCloudinary } = require('../controllers/technologies');

const router = express.Router();

router.post('/', multerFileUpload, saveTechnology);
// router.post('/', multerFileUploadCloud, saveTechnologyViaCloudinary);

module.exports = router;