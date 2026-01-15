import express from 'express';

const app = express();
const port = 3001;


//Route-level middleware
const customMiddleware = (req, res, next) => {
    console.log("Query:", req.query);
    next();
 }

// Middleware to log request details
app.use((req, res, next) => {
    console.log(`[${new Date().toLocaleDateString()}] ${req.method} ${req.url}`)
    next();
});


app.use(('/admin', (req, res, next) => {
    console.log('Admin Area Accessed');
    next();
}))


app.get('/admin/dashboard', (req, res) => {
    res.send('Welcome to the Admin Area');
});


app.get('/', (req, res) => {
    res.send('Hello World!');
});


app.get('/about', (req,res)=>{
    res.send('This is the about page.');
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
 
