const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, 'src');
const viewsDir = path.join(srcDir, 'views');
const pagesDir = path.join(viewsDir, 'pages');
const partialsDir = path.join(viewsDir, 'partials');

// Create directories
[srcDir, viewsDir, pagesDir, partialsDir].forEach(d => {
  if (!fs.existsSync(d)) fs.mkdirSync(d, { recursive: true });
});

// Read index.html to extract parts
const indexHtml = fs.readFileSync(path.join(__dirname, 'index.html'), 'utf8');

// Extract header
const headerMatch = indexHtml.match(/<header[\s\S]*?<\/header>/);
const headerContent = headerMatch ? headerMatch[0] : '';
fs.writeFileSync(path.join(partialsDir, 'header.ejs'), headerContent);

// Extract footer
const footerMatch = indexHtml.match(/<footer[\s\S]*?<\/footer>/);
const footerContent = footerMatch ? footerMatch[0] : '';
fs.writeFileSync(path.join(partialsDir, 'footer.ejs'), footerContent);

// Extract mobile menu
const mobileMenuMatch = indexHtml.match(/<div id="mobile-menu-overlay"[\s\S]*?<\/div>[\s\S]*?<div id="mobile-menu"[\s\S]*?<\/div>\s*<\/div>/);
// Wait, the mobile menu is just:
const mobileMenuExtract = `  <div id="mobile-menu-overlay" class="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm hidden"></div>
  <div id="mobile-menu"
    class="fixed inset-y-0 right-0 z-50 h-full w-3/4 gap-4 border-l bg-background p-6 shadow-lg transition-transform transform translate-x-full duration-300 sm:max-w-sm">
    <div class="flex flex-col gap-4">
      <button id="mobile-menu-close"
        class="self-end rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
          stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-6 w-6">
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
        <span class="sr-only">Close</span>
      </button>
      <nav class="flex flex-col gap-4 mt-4">
        <a href="index.html" class="text-lg font-medium hover:text-primary">Home</a>
        <div class="flex flex-col gap-2">
          <span class="text-lg font-medium">Leistungen</span>
          <a href="technische-reinigung.html" class="pl-4 text-muted-foreground hover:text-primary">Technische
            Reinigung</a>
          <a href="unterhaltsreinigung.html"
            class="pl-4 text-muted-foreground hover:text-primary">Unterhaltsreinigung</a>
          <a href="produktionsunterstuetzung.html"
            class="pl-4 text-muted-foreground hover:text-primary">Produktionsunterstützung</a>
        </div>
        <a href="referenzen.html" class="text-lg font-medium hover:text-primary">Referenzen</a>
        <a href="karriere.html" class="text-lg font-medium hover:text-primary">Karriere</a>
        <a href="ueber-uns.html" class="text-lg font-medium hover:text-primary">Über uns</a>
        <a href="kontakt.html" class="text-lg font-medium hover:text-primary">Kontakt</a>
      </nav>
    </div>
  </div>`;
fs.writeFileSync(path.join(partialsDir, 'mobile-menu.ejs'), mobileMenuExtract);

// Create Layout
const layoutContent = `<!DOCTYPE html>
<html lang="de">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title><%= title %></title>
  <meta name="description" content="<%= description %>">
  <meta name="author" content="GoldClean">
  <meta property="og:title" content="<%= title %>">
  <meta property="og:description" content="<%= description %>">
  <meta property="og:type" content="website">
  <meta property="og:image" content="images/logo.png">
  <link rel="icon" type="image/png" href="images/favicon.png">
  <link rel="canonical" href="https://goldclean.de/<%- typeof path !== 'undefined' ? path : '' %>">
  <link rel="stylesheet" href="css/styles.css">
</head>
<body>
  <div id="root">
    <div class="min-h-screen flex flex-col">
      <%- include('partials/header') %>
      <main class="flex-grow pt-20 md:pt-28">
        <%- body %>
      </main>
      <%- include('partials/footer') %>
    </div>
  </div>
  <%- include('partials/mobile-menu') %>
  <script src="js/main.js"></script>
</body>
</html>`;
fs.writeFileSync(path.join(viewsDir, 'layout.ejs'), layoutContent);

// Move and parse HTML files
const files = fs.readdirSync(__dirname).filter(f => f.endsWith('.html'));

files.forEach(file => {
  let content = fs.readFileSync(path.join(__dirname, file), 'utf8');
  
  // Extract Title and Description
  const titleMatch = content.match(/<title>(.*?)<\/title>/);
  const title = titleMatch ? titleMatch[1] : 'GoldClean';
  
  const descMatch = content.match(/<meta\s+name="description"\s*[\s\S]*?content="(.*?)"\s*[\/]*>/);
  let description = descMatch ? descMatch[1] : '';
  if(!description) {
      // Some formatting might vary
      const dMatch2 = content.match(/<meta\s+name="description"\s+content="(.*?)"/);
      description = dMatch2 ? dMatch2[1] : '';
  }

  // Extract <main> body
  const mainMatch = content.match(/<main[^>]*>([\s\S]*?)<\/main>/);
  let body = mainMatch ? mainMatch[1].trim() : '';

  // Ensure any absolute paths like index.html or images/ are not broken
  const ejsContent = `---
title: "${title.replace(/"/g, '\\"')}"
description: "${description.replace(/"/g, '\\"')}"
---
${body}`;

  fs.writeFileSync(path.join(pagesDir, file.replace('.html', '.ejs')), ejsContent);
  console.log('Converted', file);
});

console.log('Setup finished');
