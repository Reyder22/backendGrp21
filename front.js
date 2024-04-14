const express = require('express');
const path = require('path');

const app = express();
const port = 3000; 

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
  });


app.listen(port, () => {
  console.log(`Serveur démarré sur http://localhost:${port}`);
});