const fs = require('fs');
const path = require('path');

function replaceExtensions(dir) {
    const items = fs.readdirSync(dir);
    items.forEach(item => {
        const fullPath = path.join(dir, item);
        if (fs.statSync(fullPath).isDirectory()) {
            replaceExtensions(fullPath);
        } else if (fullPath.endsWith('.ejs') || fullPath.endsWith('.html')) {
            let content = fs.readFileSync(fullPath, 'utf8');

            // We don't want to replace favicon.png or favicon.ico, they should remain as is
            // But we replace all other .png, .jpg, .jpeg in img tags and css url()
            let newContent = content.replace(/\.(png|jpg|jpeg)/g, (match) => {
                return '.webp';
            });

            // Revert favicon to png just in case
            newContent = newContent.replace(/favicon\.webp/g, 'favicon.png');

            if (content !== newContent) {
                fs.writeFileSync(fullPath, newContent);
                console.log('Updated references in', fullPath);
            }
        }
    });
}

replaceExtensions(path.join(__dirname, 'src', 'views'));
