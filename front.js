// Importer le module Express
const express = require('express');
const path = require('path');

// Créer une application Express
const app = express();
const port = 3000; // Port sur lequel le serveur écoutera

// Définir le dossier contenant les fichiers statiques
app.use(express.static(path.join(__dirname)));

// Définir une route pour le fichier index.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// Lancer le serveur
app.listen(port, () => {
  console.log(`Serveur démarré sur http://localhost:${port}`);
});