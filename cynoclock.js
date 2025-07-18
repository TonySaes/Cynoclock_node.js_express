import express from 'express';
import dogs from './data/dogs.js';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();
const port = 3000;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('index', {dogs});
});

app.listen(port, () => {
    console.log(`Running on http://localhost:${port}`);
});