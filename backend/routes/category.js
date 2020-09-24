const express = require('express');
const category = require('../models/category.js');
const router = express.Router();

const Category = require('../models/product.js');

router.get('/category', (req, res) => {
    Product.find({}, (err, data) => {
        res.json(data);
    })
})

router.get('/category/:id', (req, res) => {
    Product.findById(req.params.id, (err, data) => {
        res.json(data);
    })
})

router.delete('/category/:id', async (req, res) => {
    await Product.findByIdAndDelete(req.params.id);
    res.json({ 'message': 'Deleted' });
})

router.post('/product', (req, res) => {
    Category = new Category({
        name: req.body.name,
        slug: req.body.slug
        
    })
    category.save(() => {
        res.json(category);
    })
});

router.put('/category/:id', async (req, res) => {
    await category.findByIdAndUpdate(req.params.id, req.body);
    res.json({ 'message': 'Updated' });
});

module.exports = router;
