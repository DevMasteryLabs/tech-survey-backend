const Technology = require('../models/Technology')
const cloudinary = require('../utils/cloudinary')

const saveTechnology = async (req, res) => {
    const image = req.file;
    if (!image) {
        return res.status(400).json({ msg: 'No file uploaded' });
    }
    const url = `/uploads/${image.filename}`;
    try {
        const technology = new Technology({
            email: req.body.email,
            name: req.body.name,
            description: req.body.description,
            image: url
        })
        let savedTechnology = await technology.save()
        res.status(201).json({
            msg: "Technology saved successfully",
            technology: savedTechnology
        })
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

const saveTechnologyViaCloudinary = async (req, res) => {
    console.log(req.file)
    try {
        if (!req.file) {
            return res.status(400).json({
                type: 'error',
                message: 'A file must be provided!'
            })
        }
        // Upload image to cloudinary
        const result = await cloudinary.uploader.upload(req.file.path);

        const technology = new Technology({
            email: req.body.email,
            name: req.body.name,
            description: req.body.description,
            image: result.secure_url
        })
        let savedTechnology = await technology.save()
        res.status(201).json({
            msg: "Technology saved successfully",
            technology: savedTechnology
        })

    } catch (error) {
        console.log({ error })
        res.status(500).json({ error: error.message })
    }
}

module.exports = {
    saveTechnology,
    saveTechnologyViaCloudinary
}