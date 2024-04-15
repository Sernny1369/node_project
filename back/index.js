const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const User = require('./User');
const Series = require('./Series.js')
//const CartItem = require('./CartItem'); 
const router = express.Router();

const app = express();

/*
const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017'
const dbName = 'monProjetMongo';
MongoClient.connect(url, function(err, client) {  
  console.log("Connecté à MongoDB");  const db = client.db(dbName);  client.close();});
*/
// Connexion à MongoDB
mongoose.connect('mongodb+srv://node:dyITgKikzFE0pSLU@cluster0.slv7ehl.mongodb.net/project', {}).then(() => {
  console.log('Connected to MongoDB');
}).catch(error => {
  console.error('MongoDB connection error:', error);
});

// Middleware CORS
app.use(cors());
app.use(express.json());

// Route de la liste
const myList = ["Item 1", "Item 2", "Item 3"];
app.get('/api/list', (req, res) => {
  res.json(myList);
});

// Route de connexion
app.post('/api/login', async (req, res) => {
  const { username, password } = req.body;

  const user = await User.findOne({ username });

  if (!user || password !== user.password) {
    return res.status(401).json({ message: 'Invalid credentials' });
  }

  const token = jwt.sign({ userId: user._id }, 'your_secret_key', { expiresIn: '1h' });

  res.json({ token });
});

// Route d'inscription
app.post('/api/register', async (req, res) => {
  const { username, password } = req.body;
  console.log("entry...")
  try {
    // Création d'un nouvel utilisateur
    const user = new User({ username, password });
    console.log(user)
    await user.save();

    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    console.error('Error registering user:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Route de test
app.get('/api', (req, res) => {
  res.send('Hello from the test route!');
});




// Route de la liste
app.get('/series', (req, res) => {
  Series.find()
  .then(series=>res.status(201).json(series))
  .catch(error => res.status(400).json({error }));
});

// Route pour récupérer tous les articles du panier
// const Series = require('./Series.js')



// Créer un étudiant
const createSeries = async serieData => { 
  const serie = await Series.create(SerieData) 
  return serie}

// Récupérer une series
const findSerie = async firstName => { 
  const serie = await Series.findOne({firstName}) 
  return serie}
  
// Récupérer tous les series
const findSeries = async firstName => { 
  const serie = await Series.find({}) 
  return serie}

app.post('/series', (req, res, next) => {
  delete req.body._id;
  const serie= new Series({
    ...req.body
  });
  serie.save()
  .then(()=>res.status(201).json({ message: 'enregistrer' }))
  .catch(error => res.status(400).json({error }));
});



/*
app.get('/series', async (req, res) => {
  try {
    const cartItems = await CartItem.find();
    res.json(cartItems);
  } catch (error) {
    console.error('Error fetching cart items:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});
*/



/*
// Route pour ajouter un article au panier
app.post('/api/cartItems', async (req, res) => {
  const { name, price } = req.body;
  console.log("POST ITEM")
  try {
    const newItem = new CartItem({ name, price });
    console.log(newItem);
    await newItem.save();
    res.status(201).json(newItem);
  } catch (error) {
    console.error('Error adding item to cart:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Route pour supprimer un article du panier
app.delete('/api/cartItems/:itemId', async (req, res) => {
  const itemId = req.params.itemId;
  try {
    await CartItem.findByIdAndDelete(itemId);
    res.json({ message: 'Item removed from cart successfully' });
  } catch (error) {
    console.error('Error removing item from cart:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});
*/


// Démarrer le serveur
const port = 3001;
app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});

// Exporter l'application
module.exports = app;
