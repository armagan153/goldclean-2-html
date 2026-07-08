const fs = require('fs');
const path = require('path');
const http = require('http');
const { exec } = require('child_process');

const PORT = 3000;
const ROOT_DIR = __dirname;
const SRC_DIR = path.join(ROOT_DIR, 'src');
const JS_DIR = path.join(ROOT_DIR, 'js');

// 1. Build function
let isBuilding = false;
let needsRebuild = false;

function build() {
    if (isBuilding) {
        needsRebuild = true;
        return;
    }
    isBuilding = true;
    console.log('[Dev Server] Rebuilding site and compiling styles...');
    exec('node build.js', (err, stdout, stderr) => {
        isBuilding = false;
        if (err) {
            console.error('[Dev Server] Build error:', stderr || err.message);
        } else {
            console.log(stdout.trim());
            console.log('[Dev Server] Build and CSS compilation completed.');
        }
        if (needsRebuild) {
            needsRebuild = false;
            build();
        }
    });
}

// Initial build
build();

// 2. Watcher
console.log(`[Dev Server] Watching for changes in: ${SRC_DIR} and ${JS_DIR}`);
let watchTimeout = null;

function triggerBuild(filename) {
    clearTimeout(watchTimeout);
    watchTimeout = setTimeout(() => {
        console.log(`[Dev Server] File changed: ${filename}`);
        build();
    }, 100);
}

fs.watch(SRC_DIR, { recursive: true }, (eventType, filename) => {
    if (filename) triggerBuild(`src/${filename}`);
});

if (fs.existsSync(JS_DIR)) {
    fs.watch(JS_DIR, { recursive: true }, (eventType, filename) => {
        if (filename) triggerBuild(`js/${filename}`);
    });
}

const tailwindConfigPath = path.join(ROOT_DIR, 'tailwind.config.js');
if (fs.existsSync(tailwindConfigPath)) {
    fs.watch(tailwindConfigPath, (eventType, filename) => {
        triggerBuild('tailwind.config.js');
    });
}

// 3. Static Server
const MIME_TYPES = {
    '.html': 'text/html; charset=utf-8',
    '.css': 'text/css',
    '.js': 'application/javascript',
    '.json': 'application/json',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.jpeg': 'image/jpeg',
    '.gif': 'image/gif',
    '.svg': 'image/svg+xml',
    '.ico': 'image/x-icon',
    '.xml': 'application/xml',
    '.txt': 'text/plain'
};

const server = http.createServer((req, res) => {
    let safeUrl;
    try {
        safeUrl = decodeURIComponent(req.url);
    } catch (e) {
        safeUrl = req.url;
    }

    const parsedPath = safeUrl.split('?')[0].split('#')[0];
    
    let filePath = path.join(ROOT_DIR, parsedPath);
    if (fs.existsSync(filePath) && fs.statSync(filePath).isDirectory()) {
        filePath = path.join(filePath, 'index.html');
    }

    fs.access(filePath, fs.constants.F_OK, (err) => {
        if (err) {
            res.statusCode = 404;
            res.setHeader('Content-Type', 'text/plain');
            res.end(`404 Not Found: ${parsedPath}`);
            return;
        }

        const ext = path.extname(filePath).toLowerCase();
        const contentType = MIME_TYPES[ext] || 'application/octet-stream';

        fs.readFile(filePath, (err, data) => {
            if (err) {
                res.statusCode = 500;
                res.setHeader('Content-Type', 'text/plain');
                res.end(`500 Internal Server Error: ${err.code}`);
                return;
            }
            res.statusCode = 200;
            res.setHeader('Content-Type', contentType);
            res.end(data);
        });
    });
});

server.listen(PORT, () => {
    console.log(`\n🚀 Local server running at: http://localhost:${PORT}`);
    console.log(`Press Ctrl+C to stop the server\n`);
});
