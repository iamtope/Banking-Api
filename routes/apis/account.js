const express = require('express');
const router = express.Router();
const Account = require('../../models/Account');

// Get all the bank accounts
router.get('/', (req, res, next) => {
    Account.find()
        .then((accounts) => {
            res.json(accounts);
        })
        .catch(err => console.log(err))
});


// Create a bank account
router.post('/add', (req, res, next) => {
    const id = req.body.id;
    const image = req.body.image;
    const name = req.body.name;
    const email = req.body.email;
    const cardNumber = req.body.cardNumber;
    newAccount = new Account({
        id: id,
        image: image,
        name: name,
        email: email,
        cardNumber: cardNumber
    });
    newAccount.save()
    .then(account => {
        res.json(account); 
    })
    .catch(err => console.log(err));
})

// Get all one bank account
router.get('/one/:id', (req, res, next) => {
    //Grab the id of the bank account
    let id = req.params.id;
    Account.findById(id)
        .then((account) => {
            res.json(account);
        })
        .catch(err => console.log(err))
});

// to update a bank account
router.put('/update/:id', (req, res, next) => {
    //Grab the id of the bank account
    let id = req.params.id;
    // find the bank account by id from the databasse
        Account.findById(id)
        .then(account => {
            account.id = req.body.id;
            account.image = req.body.image;
            account.name = req.body.name;
            account.email = req.body.email;
            account.cardNumber = req.body.cardNumber;
            account.save()
            .then(account =>{
                res.send({message: 'Account updated succesfully',
                status: 'success',
                account: account})
            })
            .catch(err => console.log(err))
        })
        .catch(err => console.log(err))
        
    });

// make delete request
router.delete('/:id', (req, res, next) => {
    let id = req.params.id;
    Account.findById(id)
    .then(account => {
        account.delete()
        .then(account =>{
            res.send({message: 'Account deleted succesfully',
            status: 'success',
            account: account})

        })
        .catch(err => console.log(err))
    })
    .catch(err => console.log(err))
})


module.exports = router;