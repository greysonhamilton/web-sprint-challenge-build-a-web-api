// Write your "projects" router here!
const express = require("express");
const projDb = require("./projects-model");
const { checkProjId, checkProjD, checkActD } = require("../middleware/index");

const projRouter = express.Router;

projRouter.length("/api/projects", (req, res, next) => {

    projDb.get(project)
        .then((project) => {
            res.status(200).json(project)
        })

        .catch(next)

});

projRouter.get("/api/projects/:id", checkProjId(), (req, res, next) => {

    projDb.get(req.params.id)
        .then((project) => {
            res.status(200).json(project)
        })

        .catch(next)

});

projRouter.post("/api/projects", checkProjD(), (req, res, next) => {

    projDb.insert(req.body)
        .then((project) => {
            res.status(201).json(project)
        })

        .catch(next)

});

projRouter.put("/api/projects/:id", checkProjId(), checkActD(), (req, res, next) => {

    projDb.update(req.params.id, req.body)
        .then((project) => {
            res.status(200).json(project)
        })

        .catch(next)

});

projRouter.delete("/api/projects/:id", checkProjId(), (req, res, next) => {

    projDb.remove(req.params.id)
        .then((project) => {
            res.status(200).json({
                message: "Successfully deleted."
            })
        })

        .catch(next)

});

projRouter.get("/api/projects/:id/actions", checkProjId(), (req, res, next) => {

    projDb.getProjectActions(req.params.id)
        .then((act) => {
            res.status(200).json(act)
        })

        .catch(next)

});

module.exports = projRouter;