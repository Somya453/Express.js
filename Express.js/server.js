const express = require('express')
const app = express()
const port=3003;
// respond with "hello world" when a GET request is made to the homepage
app.get('/', (req, res) => {
  res.send('hello world')
})


app.get('/about', (req, res) => {
  res.send('This is about page')
})

app.listen(port,()=>{
console.log(`server is running on port ${port}`);
}
);