const db = require('../models');

module.exports = app => {
    app.get('/api/workouts', (req, res) => {
        //mongoose query
        db.Workout.find({})
            .then(data => {
                res.json(data);
            })
    });

    app.post('/api/workouts', (req, res) => {
        //mongoose query
        db.Workout.create(req.body, (err, data) => {
            if (err) throw err;
            res.json(data);
        })
    });

    app.put("/api/workouts/:id", (req, res) => {
        //mongoose query
        const id = req.params.id;
        //console.log(req.body)
        db.Workout.findOneAndUpdate( { _id: id }, { $push: { exercises: JSON.stringify(req.body) } }, { new: true } )
            .then(data => {
                console.log(data)
                res.json(data);
            })
    });

    app.get("/api/workouts/range", (req, res) => {
        //mongoose query
        db.Workout.find({})
            .then(data => {
                console.log(data)
                res.json(data);
            })
    })

    // app.get('api/workout', (req, res) => {
    //     //mongoose query
    //     data = "HI";
    //     res.json(data);
    // })
    // app.get('api/workout', (req, res) => {
    //     //mongoose query
    //     data = "HI";
    //     res.json(data);
    // })
}
