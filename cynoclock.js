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
    res.render('home');
});
app.get('/dogs', (req, res) => {
    res.render('dogs', {dogs});
});
app.get('/dogs/:dog', (req, res) => {
    const dogUrl = req.params.dog;
    const dogToDisplay = dogs.find((dog) => dog.url === dogUrl);
    res.render('details', {dogToDisplay});
})
app.listen(port, () => {
    console.log(`Running on http://localhost:${port}`);
});