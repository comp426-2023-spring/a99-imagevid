#!/usr/bin/env node
import got from 'got'; // if you don't have "got" - install it with "npm install got"
import fs from 'fs';
import FormData from 'form-data';

const apiKey = 'acc_55aecb29ae0feaa';
const apiSecret = 'd66de84a5d3b1196c906f901e8d70330';

const filePath = './lib/imagga/image.jpeg';
const formData = new FormData();
formData.append('image', fs.createReadStream(filePath));
//formData.append('threshold', 50.0);
formData.append('limit', 10);

(async () => {
    try {
        const response = await got.post('https://api.imagga.com/v2/tags', {body: formData, username: apiKey, password: apiSecret});
        fs.writeFileSync("./lib/imagga/result.txt", response.body);
    } catch (error) {
        console.log(error);
    }
})();