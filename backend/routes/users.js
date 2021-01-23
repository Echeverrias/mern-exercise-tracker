const router = require('express').Router();
let User = require('../models/user.model');

router.route('/').get((req, res) => {
    console.log(`get: /users`)
    User.find()
        .then(users => res.json(users))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
    console.log(`get: /users/${req.params.id}`)
    User.findById(req.params.id)
        .then(users => res.json(users))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
    console.log(`delete: /users/${req.params.id}`)
    User.findByIdAndDelete(req.params.id)
        .then(users => res.json('User deleted!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
    console.log(`post: /users/update/${req.params.id}`)
    User.findById(req.params.id)
        .then(user => {
            user.username = req.body.username;
            user.save()
                .then(() => res.json('User added'))
                .catch(err => res.status(400).json(`Error: ${err} ${username}`))
        })
        .catch(err => res.status(400).json(`Error: ${err} ${username}`))
})

router.route('/add').post((req, res) => {
    console.log(`post: /users/add`)
    const username = req.body.username;
    const newUser = new User({username}); // Create an id, not the timestamps
    
    newUser.save()
        .then(() => res.json(newUser))
        .catch(err => res.status(400).json(`Error: ${err} ${username}`))
})

module.exports = router;