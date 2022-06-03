const functions = require("firebase-functions");
const { upload } = require("./resolver/upload_file");

process.env.GCP_BUCKET_NAME = '<YOUR_BUCKET_NAME_HERE>';

exports.uploadFile = functions.https.onRequest(upload);
