const fs = require('fs');
const path = require('path');
const ejs = require('ejs');

const srcDir = path.join(__dirname, 'src');
const destDir = __dirname; // root

const pagesDir = path.join(srcDir, 'views', 'pages');
const layoutPath = path.join(srcDir, 'views', 'layout.ejs');

// Wait, I should also make sure to use EJS include paths correctly
const layoutTemplate = fs.readFileSync(layoutPath, 'utf8');

const sitemapUrls = [];
const baseUrl = 'https://goldclean.de';

const files = fs.readdirSync(pagesDir).filter(f => f.endsWith('.ejs'));

files.forEach(file => {
    const content = fs.readFileSync(path.join(pagesDir, file), 'utf8');

    // Parse frontmatter
    let title = 'GoldClean';
    let description = '';
    let schema = null;
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
            if (line.startsWith('schema:')) {
                try {
                    schema = JSON.parse(line.substring(line.indexOf(':') + 1).trim());
                } catch (e) { }
            }
        });
    }

    // Render EJS
    const renderedBody = ejs.render(body, { filename: path.join(pagesDir, file) });

    const html = ejs.render(layoutTemplate, {
        title,
        description,
        schema,
        body: renderedBody,
        path: file.replace('.ejs', '.html'),
        filename: layoutPath
    });

    sitemapUrls.push(`${baseUrl}/${file.replace('.ejs', '.html')}`);

    fs.writeFileSync(path.join(destDir, file.replace('.ejs', '.html')), html);
    console.log('Built', file.replace('.ejs', '.html'));
});

// Generate Sitemap
const sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemapUrls.map(url => `  <url>
    <loc>${url}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>${url.endsWith('index.html') ? '1.0' : '0.8'}</priority>
  </url>`).join('\n')}
</urlset>`;

fs.writeFileSync(path.join(destDir, 'sitemap.xml'), sitemapContent);
console.log('Built sitemap.xml');

// Generate Robots.txt
const robotsContent = `User-agent: *
Allow: /
Sitemap: ${baseUrl}/sitemap.xml
`;
fs.writeFileSync(path.join(destDir, 'robots.txt'), robotsContent);
console.log('Built robots.txt');
