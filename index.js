const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json()); // Parse JSON body

// In-memory data source
let users = [
  { id: "1", firstName: "Ameer", lastName: "Hamza", hobby: "Developing" }
];

// ----------------------
// Middleware to log request
app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next();
});

// Validation middleware
function validateUser(req, res, next) {
  const { firstName, lastName, hobby } = req.body;
  if (!firstName || !lastName || !hobby) {
    return res.status(400).json({ error: "Missing required fields: firstName, lastName, hobby" });
  }
  next();
}

// ----------------------
// Routes

// GET all users
app.get('/users', (req, res) => {
  res.status(200).json(users);
});

// GET user by ID
app.get('/users/:id', (req, res) => {
  const user = users.find(u => u.id === req.params.id);
  if (!user) return res.status(404).json({ error: 'User not found' });
  res.status(200).json(user);
});

// POST new user
app.post('/user', validateUser, (req, res) => {
  const newUser = {
    id: (users.length + 1).toString(),
    ...req.body
  };
  users.push(newUser);
  res.status(201).json(newUser);
});

// PUT update user
app.put('/user/:id', validateUser, (req, res) => {
  const index = users.findIndex(u => u.id === req.params.id);
  if (index === -1) return res.status(404).json({ error: 'User not found' });
  users[index] = { id: req.params.id, ...req.body };
  res.status(200).json(users[index]);
});

// DELETE user
app.delete('/user/:id', (req, res) => {
  const index = users.findIndex(u => u.id === req.params.id);
  if (index === -1) return res.status(404).json({ error: 'User not found' });
  users.splice(index, 1);
  res.status(200).json({ message: 'User deleted' });
});

// ----------------------
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
