'use strict';
var dbConn = require('./../../config/db.config');
var tasks=function(task){
    this.userid=task.userid;
    this.Title = task.Title;
    this.Description = task.Description;
    this.Category = task.Category;
    this.Duedate = task.Duedate;
}
tasks.create=function(newtask,result){
    dbConn.query("INSERT INTO todo set ?", newtask, function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        }
        else {
            console.log(res.insertId);
            result(null, res.insertId);
        }
    });
};
tasks.findById = function (id, result) {
    dbConn.query("Select * from todo where id = ? ", id, function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        }
        else {
            result(null, res);
        }
    });
};
tasks.findAll = function (result) {
    dbConn.query("Select * from todo", function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        }
        else {
            console.log('tasks : ', res);
            result(null, res);
        }
    });
};

tasks.update = function (id, task, result) {
    dbConn.query("UPDATE todo SET userid=?,Title=?,Description=?,Category=?,Duedate=? WHERE id = ?", [task.userid, task.Title, task.Description,task.Category,task.Duedate, id], function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        } else {
            result(null, res);
        }
    });
};
tasks.delete = function (id, result) {
    dbConn.query("DELETE FROM todo WHERE id = ?", [id], function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        }
        else {
            result(null, res);
        }
    });
};
module.exports = tasks;