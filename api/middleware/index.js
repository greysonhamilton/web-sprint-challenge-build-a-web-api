const actDb = require("../actions/actions-model");
const projDb = require("../projects/projects-model");
const projRouter = require("../projects/projects-router");

const checkActD = () => (req, res, next) => {

    if(!req.body.project_id || !req.body.description || !req.body.notes) {
        return res.status(400).json({
            message: "Missing project ID, description or notes."
        })
    }

    next();

};

const checkActId = () => (req, res, next) => {

    actDb.get(req.params.id)
        .then((act) => {
            if (act) {
                next()
            } else {
                res.status(404).json({
                    message: "This ID, is not found."
                })
            }
        })
};

const checkProjId = () => (req, res, next) => {

    projDb.get(req.params.id)
        .then((project) => {
            if (project) {
                next()
            } else {
                res.status(404).json({
                    message: "This project was not found."
                })
            }
        })
};

const checkProjD = () => (req, res, next) => {
    if (!req.body.name || !req.body.description) {
        return res.status(400).json({
            message: "Missing input required."
        })
    }
};

module.exports = {

    checkActD,
    checkActId,
    checkProjD,
    checkProjId

};