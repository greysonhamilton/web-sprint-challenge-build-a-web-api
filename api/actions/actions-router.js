// Write your "actions" router here!
const express = require("express");
const { checkActD, checkActId } = require("../middleware");
const actDb = require("./actions-model");

const actRouter = express.Router();

actRouter.get("api/actions", (req, res, next) => {

    actDb.get(act)
        .then((act) => {
            res.status(200).json(act)
        })

        .catch(next)

});

actRouter.get("/api/actions/:id", checkActId(), (req, res, next) =>{

    actDb.get(act)
        .then((act) => {
            res.status(200).json(act)
        })

        .catch(next)

});

actRouter.post("/api/actions", checkActD(), (req, res, next) => {
    
    actDb.insert(req.body)
        .then((act) => {
            res.status(201).json(act)
        })

        .catch(next)

});

actRouter.put("/api/actions/:id", checkActId(), checkActD(), (req, res, next) => {

    actDb.update(req.params.id, req.body)
        .then((act) => {
            res.status(200).json(act)
        })

        .catch(next)

});

actRouter.delete("/api/actions/:id", checkActId(), (req, res, next) => {

    actDb.remove(req.params.id)
        .then((act) => {
            if (act) {
                res.status(200).json({
                    message: "Successfully removed."
                })
            } else {
                res.status(404).json({
                    message: "This action was not found"
                })
            }
        })

        .catch(next)

});

module.exports = actRouter;