'use strict';
const tasks = require('../models/task.model');
exports.findAll = function (req, res) {
    tasks.findAll(function (err, task) {
        console.log('controller')
        if (err)
            res.send(err);
        console.log('res', task);
        res.send(task);
    });
};
exports.create = function (req, res) {
    const new_task = new tasks(req.body);
    //handles null error
    if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
        res.status(400).send({ error: true, message: 'Please provide all required field' });
    } else {
        tasks.create(new_task, function (err, task) {
            if (err)
                res.send(err);
            res.json({ error: false, message: "Task added successfully!", data: task });
        });
    }
};
exports.findById = function (req, res) {
    tasks.findById(req.params.id, function (err, task) {
        if (err)
            res.send(err);
        res.json(task);
    });
};
exports.update = function (req, res) {
    if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
        res.status(400).send({ error: true, message: 'Please provide all required field' });
    } else {
        tasks.update(req.params.id, new tasks(req.body), function (err, task) {
            if (err)
                res.send(err);
            res.json({ error: false, message: 'tasks successfully updated' });
        });
    }
};
exports.delete = function (req, res) {
    tasks.delete(req.params.id, function (err, task) {
        if (err)
            res.send(err);
        res.json({ error: false, message: 'tasks successfully deleted' });
    });
};