const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const iconsDir = path.join(__dirname, 'images', 'icons');

async function optimizeIcons() {
    const files = fs.readdirSync(iconsDir);

    for (const file of files) {
        if (file.endsWith('.png') || file.endsWith('.jpg') || file.endsWith('.jpeg')) {
            const filePath = path.join(iconsDir, file);
            const ext = path.extname(file);
            const webpName = file.replace(ext, '.webp');
            const webpPath = path.join(iconsDir, webpName);

            if (!fs.existsSync(webpPath)) {
                console.log('Optimizing', file, 'to webp...');
                await sharp(filePath)
                    .webp({ quality: 80 })
                    .toFile(webpPath);
            }
        }
    }
    console.log('Icon optimization finished.');
}

optimizeIcons();
