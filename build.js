const fs = require('fs');
const path = require('path');
const ejs = require('ejs');
const { execSync } = require('child_process');
const { minify } = require('html-minifier');

const srcDir = path.join(__dirname, 'src');
const destDir = __dirname; // root

const pagesDir = path.join(srcDir, 'views', 'pages');
const layoutPath = path.join(srcDir, 'views', 'layout.ejs');

// Load Centralized Company Data
const companyPath = path.join(srcDir, 'data', 'company.json');
let company = {};
if (fs.existsSync(companyPath)) {
    company = JSON.parse(fs.readFileSync(companyPath, 'utf8'));
}

// 1. Compile Tailwind CSS (using Tailwind v3)
console.log('Compiling Tailwind CSS...');
try {
    execSync('npx tailwindcss -i src/styles.css -o css/styles.css --minify', { stdio: 'inherit' });
    console.log('Tailwind CSS compiled successfully.');
} catch (error) {
    console.error('Error compiling Tailwind CSS:', error.message);
}

// 2. Build HTML Pages
const layoutTemplate = fs.readFileSync(layoutPath, 'utf8');
const sitemapUrls = [];
const baseUrl = company.website || 'https://goldclean.de';

const files = fs.readdirSync(pagesDir).filter(f => f.endsWith('.ejs'));

files.forEach(file => {
    const content = fs.readFileSync(path.join(pagesDir, file), 'utf8');

    // Parse frontmatter
    let title = company.name || 'GoldClean';
    let description = company.shortDescription || '';
    let schema = null;
    let body = content;

    const match = content.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
    if (match) {
        body = match[2];
        const fmContent = match[1];

        // Parse Title using robust lookahead
        const titleMatch = fmContent.match(/title:\s*([\s\S]*?)(?=\n\w+:|$)/);
        if (titleMatch) {
            title = titleMatch[1].trim().replace(/^"|"$/g, '').trim();
        }

        // Parse Description using robust lookahead
        const descMatch = fmContent.match(/description:\s*([\s\S]*?)(?=\n\w+:|$)/);
        if (descMatch) {
            description = descMatch[1].trim().replace(/^"|"$/g, '').replace(/\n/g, ' ').trim();
        }

        // Parse Schema using robust lookahead (handles multi-line JSON)
        const schemaMatch = fmContent.match(/schema:\s*([\s\S]*?)(?=\n\w+:|$)/);
        if (schemaMatch) {
            try {
                const schemaJson = schemaMatch[1].trim().replace(/\r?\n|\r/g, ' ');
                schema = JSON.parse(schemaJson);
            } catch (e) {
                console.error('Error parsing schema in', file, 'Content:', schemaMatch[1].trim(), 'Error:', e.message);
            }
        }
    }

    // Render EJS Page Content
    const renderedBody = ejs.render(body, { 
        company, 
        filename: path.join(pagesDir, file) 
    });

    // Render Layout Template
    let html = ejs.render(layoutTemplate, {
        title,
        description,
        schema,
        company,
        body: renderedBody,
        path: file.replace('.ejs', '.html'),
        filename: layoutPath
    });

    // Minify HTML output
    try {
        html = minify(html, {
            collapseWhitespace: true,
            removeComments: true,
            removeRedundantAttributes: true,
            useShortDoctype: true,
            removeEmptyAttributes: true,
            minifyJS: true,
            minifyCSS: true
        });
    } catch (err) {
        console.error('HTML Minification failed for', file, err.message);
    }

    sitemapUrls.push(`${baseUrl}/${file.replace('.ejs', '.html')}`);

    fs.writeFileSync(path.join(destDir, file.replace('.ejs', '.html')), html);
    console.log('Built and minified', file.replace('.ejs', '.html'));
});

// 3. Generate Sitemap
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

// 4. Generate AI-optimized Robots.txt
const robotsContent = `User-agent: *
Allow: /
Sitemap: ${baseUrl}/sitemap.xml

# Welcoming and directing AI crawler bots for AI Search engines optimization (GEO)
User-agent: GPTBot
Allow: /

User-agent: ChatGPT-User
Allow: /

User-agent: ClaudeBot
Allow: /

User-agent: Claude-Web
Allow: /

User-agent: PerplexityBot
Allow: /

User-agent: Applebot-Extended
Allow: /

User-agent: Google-Extended
Allow: /

User-agent: Omgilibot
Allow: /

User-agent: Anthropic-AI
Allow: /
`;
fs.writeFileSync(path.join(destDir, 'robots.txt'), robotsContent);
console.log('Built robots.txt');
