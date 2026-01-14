import express from 'express';

const app = express();
const PORT = 3002;

app.use(express.json());

let users = [
    { id: 1, name: 'John Doe', email: 'john.doe@example.com' },
    { id: 2, name: 'Jane Smith', email: 'jane.smith@example.com' },
    { id: 3, name: 'Alice Johnson', email: 'alice.johnson@example.com' }
];


app.get('/users', (req, res) => {
    res.json(users);
 });


app.post('/users', (req, res) => {
    const newUser = {id: Date.now(), ...req.body};
    users.push(newUser);
    res.status(201).json(newUser);
});

app.put('/users/:id', (req, res) => {
    const userId = parseInt(req.params.id);
    const userIndex = users.findIndex(user => user.id === userId);
    if (userIndex === -1) {
        users[userIndex] = { id: userId, ...req.body };
        res.json(users[userIndex]);
    } else {
        res.status(404).json({ message: 'User not found' });
    }
})

app.patch('/users/:id', (req, res) => {
    const userId = parseInt(req.params.id);
    const userIndex = users.findIndex(user => user.id === userId);
    if (userIndex === -1) {
        res.status(404).json({ message: 'User not found' });
    } else {
        users[userIndex] = { id: userId, ...req.body };
        res.json(users[userIndex]);
    }
});

app.delete('/users/:id', (req, res) => {
    const userId = parseInt(req.params.id);
    const userIndex = users.findIndex(user => user.id === userId);
    if (userIndex === -1) {
        const deletedUser = users.splice(userIndex, 1);
        res.json(deletedUser[0]);
    }
    else {
        res.status(404).json({ message: 'User not found' });
    }
});
 

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});