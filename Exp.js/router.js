import express from 'express';

const app = express();

const port = 3001;

//Route-level middleware

const customMiddleware=(req, res, next) => {
    console.log("Query:", req.query.about);
    next();
}


app.get('/', (req, res) => {
    res.send('<h1>Hello World!</h1>');
});
 

app.get('/about',customMiddleware, (req, res) => {
    res.send('<h1>This is the about page.</h1>');
});
 
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});


