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
    // let routinesBase = {'climbing_gym': ['climbing_gym_3', 'climbing_gym_2'], 'trx': ["trx_ring"]}
    let routinesForTrainings = []
    let availableEquipments =  userResponse.availableEquipment.split(',')
    availableEquipments.forEach(userTrainingEquipment => {
        equipmentToTrainingMapper.forEach(equipmentToTrainingMapper => {
            // res.status(200).send(userTrainingEquipment +': '+equipmentToTrainingMapper.equipment1)

            // res.status(200).send(equipmentToTrainingMapper.equipment1  +' ' + trainingMaterial)
            if(userTrainingEquipment = equipmentToTrainingMapper.equipment1) {
                routinesForTrainings.push(equipmentToTrainingMapper.routine)
            }
        })
    })
    res.status(200).send(routinesForTrainings)
    let trimmedRoutinesForTrainings = [...new Set(routinesForTrainings)];


    res.status(200).send(trimmedRoutinesForTrainings);
}

