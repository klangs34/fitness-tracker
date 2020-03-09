const db = require('../models');

module.exports = app => {
    app.get('/api/workouts', (req, res) => {
        //mongoose query
        db.Workout.find({})
            .then(data => {
                console.log(data)
                res.json(data);
            })
    });

    app.post('/api/workouts', (req, res) => {
        //mongoose query
        if (req.body === {}) {
            res.json({});
        }
        // db.Workout.create(req.body, (err, data) => {
        //     if (err) throw err;
        //     res.json(data);
        // })
    });

    // app.get("/api/workouts/:id", (req, res) => {
    //     //mongoose query
    //     const id = req.params.id;
    //     const { body } = req.body;
    //     db.Workout.create(body)
    //         .then(data => {
    //             res.json(data);
    //         })
    //});

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
    // app.get('api/workout', (req, res) => {
    //     //mongoose query
    //     data = "HI";
    //     res.json(data);
    // })
}
