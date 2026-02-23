const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const imagesDir = path.join(__dirname, 'images');

async function optimizeImages() {
    const files = fs.readdirSync(imagesDir);

    for (const file of files) {
        if (file.endsWith('.png') || file.endsWith('.jpg') || file.endsWith('.jpeg')) {
            const filePath = path.join(imagesDir, file);
            const ext = path.extname(file);
            const webpName = file.replace(ext, '.webp');
            const webpPath = path.join(imagesDir, webpName);

            if (!fs.existsSync(webpPath)) {
                console.log('Optimizing', file, 'to webp...');
                await sharp(filePath)
                    .webp({ quality: 80 })
                    .toFile(webpPath);
            }
        }
    }
    console.log('Image optimization finished.');
}

optimizeImages();
