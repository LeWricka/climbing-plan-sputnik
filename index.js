const getRoutinesForTrainingsMaterialsCommand = require("./app/Application/getRoutinesForTrainingsMaterialsCommand");

/**
 * HTTP Cloud Function.
 *
 * @param {Object} req Cloud Function request context.
 *                     More info: https://expressjs.com/en/api.html#req
 * @param {Object} res Cloud Function response context.
 *                     More info: https://expressjs.com/en/api.html#res
 */
exports.sputnik1 = (req, res) => {
    sputnik1(req, res)
};

function sputnik1(req, res) {
    let userResponse = req.body.lastResponseInJson
    let equipmentToTrainingMapper = req.body.materialsToRoutinesMapper
    let routinesForTrainings = getRoutinesForTrainingsMaterialsCommand(userResponse, equipmentToTrainingMapper)
    res.setHeader('Content-Type', 'application/json');
    res.status(200)
    res.end(JSON.stringify(routinesForTrainings))
}

