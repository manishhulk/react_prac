// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import * as fs from 'fs';

export default async function handler(req, res) {
  let blogData = [];
  await fs.promises.readdir(`blogdata`,async (err, data) => {
    await data.forEach(async (item) => {
      console.log('123');
      var myFiles = await fs.promises.readFile(`blogdata/${item}`, 'utf-8');
      blogData = [...blogData, JSON.parse(myFiles)];
      console.log(blogData);
    })
    console.log(blogData);
  })
  await res.status(200).json(blogData);
}
