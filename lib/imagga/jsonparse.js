import fs from 'fs';
import { join } from 'path';
const data = JSON.parse(fs.readFileSync('./lib/imagga/result.txt'));

console.log(data.result.tags);

// data.result.tags.forEach(function(item, index) {
//     if(item.confidence > 50) {
//         console.log(item.tag.en);
//     } else {
//         return;
//     }
// });