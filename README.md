# Tech Survey Web App Server
Add a `.env` file

## MongoDB Database
Add your MongoDB URL in the `.env` file (`DB_CONNECTION`)


## File Upload
-   **Option 1**(default): Locally in `public/uploads` folder
-   **Option 2**: In **Cloudinary** storage

    Create an account at https://cloudinary.com, get your **Cloud Name**, **API Key**, **API Secret** and put them in the `.env` file (`CLOUDINARY_CLOUD_NAME`, `CLOUDINARY_API_KEY`, `CLOUDINARY_API_SECRET`).

In order to switch between options, **comment/uncomment** these 2 lines of code in `./routes/technologies.js`:

```js
router.post('/', multerFileUpload, saveTechnology);
```

```js
router.post('/', multerFileUploadCloud, saveTechnologyViaCloudinary);
```

## Send Emails
