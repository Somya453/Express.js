import express from 'express';

const app = express();
const PORT = 3000;

const filePath = path.resolve();

app.get('/', (req, res) => {
    console.log(filePath);
   res.send('<h1>Welcome to the Home Page!</h1>');
})
 

app.get('/login', (req, res) => { 
    res.send('<h1>Login Page</h1><form><input type="text" placeholder="Username"/><br/><input type="password" placeholder="Password"/><br/><button type="submit">Login</button></form>');
});

app.get('/submit', (req, res) => {
    res.send('<h1>Submit Page</h1><form><input type="text" placeholder="Your Data"/><br/><button type="submit">Submit</button></form>');
})

app.use((req, res) => {
    res.status(404).send('<h1>404 Not Found</h1><p>The page you are looking for does not exist.</p>');
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

