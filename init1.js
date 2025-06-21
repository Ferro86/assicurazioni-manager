#!/usr/bin/env node

const fs = require(‘fs’);
const path = require(‘path’);

console.log(‘🚀 STEP 1: CREAZIONE STRUTTURA BASE\n’);

// Utility function
const createDir = (dirPath) => {
if (!fs.existsSync(dirPath)) {
fs.mkdirSync(dirPath, { recursive: true });
console.log(`📁 ✅ ${dirPath}`);
}
};

const writeFile = (filePath, content) => {
fs.writeFileSync(filePath, content);
console.log(`📄 ✅ ${filePath}`);
};

// 1. CREAZIONE DIRECTORIES
console.log(‘📁 Creando struttura cartelle…\n’);

const dirs = [
‘frontend/src/components’,
‘frontend/src/pages’,
‘frontend/src/utils’,
‘frontend/public’,
‘backend/routes’,
‘backend/config’,
‘database’,
‘scripts’,
‘docs’,
‘.github/workflows’
];

dirs.forEach(createDir);

// 2. PACKAGE.JSON PRINCIPALE
console.log(’\n📦 Creando package.json principale…\n’);

const mainPackageJson = {
"name": "assicurazioni-manager",
"version": "1.0.0",
"description": "Sistema gestione scadenze assicurative",
"scripts": {
"dev": "concurrently "npm run dev:backend" "npm run dev:frontend"",
"dev:backend": "cd backend && npm run dev",
"dev:frontend": "cd frontend && npm start",
"install:all": "npm install && cd backend && npm install && cd frontend && npm install",
"step2": "node init-step2.js",
"step3": "node init-step3.js",
"start": "cd backend && npm start"
},
"devDependencies": {
"concurrently": "^8.2.0"
}
};

writeFile(‘package.json’, JSON.stringify(mainPackageJson, null, 2));

// 3. README INIZIALE
console.log(’\n📚 Creando README…\n’);

const readme = `# 🏢 Gestione Scadenze Assicurative

Sistema per broker assicurativi - Gestione scadenze e rinnovi

## 🚀 Setup Rapido

```bash

# Step 1: Struttura base (COMPLETATO ✅)

node init-step1.js

# Step 2: Configurazione Backend

npm run step2

# Step 3: Configurazione Frontend

npm run step3

# Installa dipendenze

npm run install:all

# Avvia in sviluppo

npm run dev
```

## 📱 Accesso

- **Frontend**: http://localhost:3000
- **Backend API**: http://localhost:5000/api/health

## 👥 Login Test

- **Admin**: admin / admin123
- **Operatore**: mario / mario123

## 🎯 Features

- ✅ Gestione pratiche scadenze
- ✅ Sistema multi-utente
- ✅ WhatsApp + Email notifications
- ✅ PWA Mobile ready
- ✅ Import CSV automatico
  `;

writeFile(‘README.md’, readme);

// 4. GITIGNORE
console.log(’\n🔒 Creando .gitignore…\n’);

const gitignore = `# Dependencies
node_modules/
*/node_modules/

# Production

build/
dist/

# Environment

.env
.env.local
.env.production

# Database

*.db
*.sqlite

# Logs

logs/
*.log

# OS

.DS_Store
Thumbs.db

# IDE

.vscode/
.idea/

# Uploads

uploads/
backup/
`;

writeFile(’.gitignore’, gitignore);

// 5. CREAZIONE SCRIPT STEP 2
console.log(’\n📝 Creando script per Step 2…\n’);

const step2Script = `#!/usr/bin/env node

console.log(‘🔧 STEP 2: CONFIGURAZIONE BACKEND’);
console.log(‘Esegui: npm run step2’);
console.log(’\nQuesto script configurerà:’);
console.log(’- Server Express’);
console.log(’- API Routes’);
console.log(’- Database setup’);
console.log(’- Environment files’);
`;

writeFile(‘init-step2.js’, step2Script);

// 6. CREAZIONE SCRIPT STEP 3
const step3Script = `#!/usr/bin/env node

console.log(‘⚛️ STEP 3: CONFIGURAZIONE FRONTEND’);
console.log(‘Esegui: npm run step3’);
console.log(’\nQuesto script configurerà:’);
console.log(’- React App’);
console.log(’- Material UI’);
console.log(’- PWA settings’);
console.log(’- Dashboard components’);
`;

writeFile(‘init-step3.js’, step3Script);

console.log(’\n🎉 STEP 1 COMPLETATO!’);
console.log(’\n📋 Prossimi passi:’);
console.log(‘1. npm run step2    # Configura backend’);
console.log(‘2. npm run step3    # Configura frontend’);
console.log(‘3. npm run install:all’);
console.log(‘4. npm run dev’);
console.log(’\n✨ Struttura base creata con successo!’);