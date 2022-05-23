// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import * as fs from 'fs';

export default async function handler(req, res) {
  let blogData = [];
  let data = await fs.promises.readdir(`blogdata`);
  for (let index = 0; index < data.length; index++) {
    var myFiles = await fs.promises.readFile(`blogdata/${data[index]}`, 'utf-8');
    blogData = [...blogData, JSON.parse(myFiles)];
  }
  await res.status(200).json(blogData);
}
