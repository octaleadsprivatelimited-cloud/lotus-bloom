import sharp from 'sharp';
import fs from 'fs';

const files = [
  'src/assets/about-inspector.jpg',
  'src/assets/blog-construction.jpg',
  'src/assets/blog-roof.jpg',
  'src/assets/hero-inspector.jpg',
  'public/about-bg.jpeg',
  'public/how-we-help-bg.jpg',
  'public/why-choose-us-bg.jpg'
];

async function run() {
  for (const file of files) {
    const webpFile = file.replace(/\.(jpg|jpeg|png)$/, '.webp');
    console.log(`Optimizing ${file} -> ${webpFile}`);
    try {
      await sharp(file).webp({ quality: 80 }).toFile(webpFile);
      fs.unlinkSync(file); // Delete the original file
    } catch(e) {
      console.error(`Failed to convert ${file}:`, e);
    }
  }
  console.log('All images converted to webp and originals deleted!');
}

run();
