const storage = require('../services/storage');

exports.upload = async (request, response) => {
    const filePath = './example1.png';
    const fileName = 'coffee.png';
    res = await storage.upload(filePath, fileName);

    response.send(res);
}
