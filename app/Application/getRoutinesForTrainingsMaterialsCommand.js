getRoutinesForTrainingsMaterialsCommand = function getRoutinesForTrainingsMaterialsCommand(availableEquipments, equipmentToTrainingMapper){
    availableEquipments = availableEquipments.availableEquipment.split(", ")
    let routinesForTrainings = []
    availableEquipments.forEach(userTrainingEquipment => {
        equipmentToTrainingMapper.forEach(equipmentToTrainingMapper => {
            if(userTrainingEquipment === equipmentToTrainingMapper.equipment1) {
                routinesForTrainings.push(equipmentToTrainingMapper.routine)
            }
        })
    })
    return [...new Set(routinesForTrainings)]
}

module.exports = getRoutinesForTrainingsMaterialsCommand;