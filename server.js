const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect('mongodb+srv://Awash:lFTQpqRkldQTG9sX@cluster0.bbri4.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

// Define the contact model
const Contact = mongoose.model('Contact', {
    firstname: String,
    lastname: String,
    email: String
});

// POST route to add a new contact
app.post('/api/contacts', (req, res) => {
    const newContact = new Contact(req.body);
    newContact.save()
        .then(contact => res.status(201).json(contact))
        .catch(err => res.status(400).json({ error: err.message }));
});

// GET route to retrieve all contacts
app.get('/api/contacts', (req, res) => {
    Contact.find() // This queries the database for all contacts
        .then(contacts => res.json(contacts)) // Returns the contacts as a JSON response
        .catch(err => res.status(500).json({ error: err.message })); // Handles any errors
});

// GET route to retrieve a contact by ID
app.get('/api/contacts/:id', (req, res) => {
    const contactId = req.params.id; // Get the ID from the request parameters
    Contact.findById(contactId) // Use Mongoose to find the contact by ID
        .then(contact => {
            if (!contact) {
                return res.status(404).json({ message: 'Contact not found' }); // Handle case where contact is not found
            }
            res.json(contact); // Return the found contact
        })
        .catch(err => res.status(500).json({ error: err.message })); // Handle any errors
});

app.put('/api/contacts/:id', (req, res) => {
    const contactId = req.params.id;
    const updatedData = req.body; // Ensure you are sending the correct data in the request body

    Contact.findByIdAndUpdate(contactId, updatedData, { new: true })
        .then(updatedContact => {
            if (!updatedContact) {
                return res.status(404).json({ message: 'Contact not found' });
            }
            res.json(updatedContact);
        })
        .catch(err => res.status(500).json({ error: err.message }));
});

app.delete('/api/contacts/:id', (req, res) => {
    const contactId = req.params.id;

    Contact.findByIdAndDelete(contactId)
        .then(deletedContact => {
            if (!deletedContact) {
                return res.status(404).json({ message: 'Contact not found' });
            }
            res.json({ message: 'Contact deleted successfully' });
        })
        .catch(err => res.status(500).json({ error: err.message }));
});
// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});