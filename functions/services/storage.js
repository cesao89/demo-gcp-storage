const {Storage} = require('@google-cloud/storage');

const storage = new Storage();


const makePublic = async (bucketFilePath) => {
    try {
        await storage.bucket(process.env.GCP_BUCKET_NAME).file(bucketFilePath).makePublic();
        return `https://${process.env.GCP_BUCKET_NAME}.storage.googleapis.com/${bucketFilePath}`;
    } catch (error) {
        return `Failure to make file public: ${error.message}`
    }
}

const upload = async (filePath, filename) => {
    try {
        const bucketFilePath = `images/${filename}`;
        await storage.bucket(process.env.GCP_BUCKET_NAME).upload(filePath, {
          destination: bucketFilePath,
        });

        return await makePublic(bucketFilePath);
    } catch (error) {
        return `Failure to upload file: ${error.message}`;
    }
}

module.exports = {
    upload
}