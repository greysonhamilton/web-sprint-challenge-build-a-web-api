const actDb = require("../actions/actions-model");

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

module.exports = {

    checkActD,
    checkActId

};