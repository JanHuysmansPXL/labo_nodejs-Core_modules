// VERSIE II - EXAMEN

// De module 'File System' gaan we eerst moeten inladen:
const fs = require('fs');

// FileSytem aanspreken met functie
// "naam file.txt" + "tekstwaarde" 
fs.writeFileSync("examenOefening.txt", "Dit is de test voor het examen");