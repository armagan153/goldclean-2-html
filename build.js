const fs = require('fs');
const path = require('path');
const ejs = require('ejs');

const srcDir = path.join(__dirname, 'src');
const destDir = __dirname; // root

const pagesDir = path.join(srcDir, 'views', 'pages');
const layoutPath = path.join(srcDir, 'views', 'layout.ejs');

// Wait, I should also make sure to use EJS include paths correctly
const layoutTemplate = fs.readFileSync(layoutPath, 'utf8');

const files = fs.readdirSync(pagesDir).filter(f => f.endsWith('.ejs'));

files.forEach(file => {
    const content = fs.readFileSync(path.join(pagesDir, file), 'utf8');

    // Parse frontmatter
    let title = 'GoldClean';
    let description = '';
    let body = content;

    const match = content.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
    if (match) {
        body = match[2];
        const fm = match[1].split('\n');
        fm.forEach(line => {
            if (line.startsWith('title:')) {
                title = line.replace('title: ', '').replace(/^"|"$/g, '');
            }
            if (line.startsWith('description:')) {
                description = line.replace('description: ', '').replace(/^"|"$/g, '');
            }
        });
    }

    // Render EJS
    const renderedBody = ejs.render(body, { filename: path.join(pagesDir, file) });

    const html = ejs.render(layoutTemplate, {
        title,
        description,
        body: renderedBody,
        path: file.replace('.ejs', '.html'),
        filename: layoutPath
    });

    fs.writeFileSync(path.join(destDir, file.replace('.ejs', '.html')), html);
    console.log('Built', file.replace('.ejs', '.html'));
});
