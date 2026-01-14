import express from 'express';

const app = express();
const PORT = 3000;

app.use(express.json());

app.get('/', (req, res) => {
    res.send('<h1>Welcome to the Express Home Page!</h1>');
});

app.get('/search', (req, res) => { 
    const { item } = req.query;
    res.send(`<h1>Search Page</h1><p>You searched for: ${item}</p><form><input type="text" placeholder="Search Query"/><br/><button type="submit">Search</button></form>`);
    res.send('<h1>Search Page</h1><form><input type="text" placeholder="Search Query"/><br/><button type="submit">Search</button></form>');
});
app.post('/submit', (req, res) => {
    const { name, email} = req.body;
    res.send(`<h1>Submit Page</h1><p>User ${name} with ${email} has submitted successfully.</p><form><input type="text" placeholder="Your Data"/><br/><button type="submit">Submit</button></form>`);
});

app.use((req, res) => {
    res.status(404).send('<h1>404 Not Found</h1><p>The page you are looking for does not exist.</p>');
});

app.listen(PORT,()=>{
    console.log(`Server is running on http://localhost:${PORT}`);
});