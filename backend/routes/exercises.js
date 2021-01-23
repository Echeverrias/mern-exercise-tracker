const router = require('express').Router();
let Exercise = require('../models/exercise.model');

router.route('/').get((req, res) => {
    console.log('get: /exercises')
    Exercise.find()
        .then(exercises => res.json(exercises))
        .catch(err => res.status(400).json(`Error: ${err}`))
});

router.route('/:id').get((req, res) => {
    console.log(`get: /exercises/${req.params.id}`)
    Exercise.findById(req.params.id)
        .then(exercise => res.json(exercise))
        .catch(err => res.status(400).json(`Error: ${err}`))
});

router.route('/:id').delete((req, res) => {
    console.log(`delete: /exercises/${req.params.id}`)
    Exercise.findByIdAndDelete(req.params.id)
        .then(exercise => res.json(exercise))
        .catch(err => res.status(400).json(`Error: ${err}`))
});

router.route('/update/:id').post((req, res) => {
    console.log(`post: /exercises/update/${req.params.id}`)
    Exercise.findById(req.params.id)
        .then(exercise => {
            console.log(req.body);
            console.log(exercise);
            exercise.username = req.body.username;
            exercise.description =  req.body.description;
            exercise.duration =  Number(req.body.duration);
            exercise.date =  new Date(req.body.date);
            console.log('updated')
            console.log(exercise)
            exercise.save()
                .then(() => res.json(exercise))
                .catch((err) => res.status(400).json(`Error saving: ${err}`));
        })
        .catch((err) => res.status(400).json(`Error finding: ${err}`));
});

router.route('/add').post((req, res) => {
    console.log('post2: /exercises/add');
    const username = req.body.username;
    const description =  req.body.description;
    const duration =  Number(req.body.duration);
    const date =  Date(req.body.date);

    const newExercise = new Exercise({username, description, duration, date}); // Create an id, not the timestamps
    newExercise.save()
        .then(() => res.json(newExercise))
        .catch((err) => res.status(400).json(`Error: ${err}`))

})

module.exports = router;