const assert = require('assert');
const getRoutinesForTrainingsMaterialsCommand = require("../../app/Application/getRoutinesForTrainingsMaterialsCommand");

describe('Get routines for trainings materials', () => {
    it('Finds a single match between equipment and routines', () => {
        let availableEquipments = {'availableEquipment': 'equipment_1'}
        let equipmentToTrainingMapper = [{'equipment1': 'equipment_1', 'routine': 'routine_1'}]
        let expectedRoutinesForEquipment = ['routine_1']

        let routinesFromEquipment = getRoutinesForTrainingsMaterialsCommand(availableEquipments, equipmentToTrainingMapper)

        assert.deepStrictEqual(expectedRoutinesForEquipment, routinesFromEquipment)
    });

    it('Finds a double match between equipment and routines', () => {
        let availableEquipments = {'availableEquipment': 'equipment_1, equipment_2'}
        let equipmentToTrainingMapper = [{'equipment1': 'equipment_1', 'routine': 'routine_1'}, {'equipment1': 'equipment_2', 'routine': 'routine_2'}]
        let expectedRoutinesForEquipment = ['routine_1', 'routine_2']

        let routinesFromEquipment = getRoutinesForTrainingsMaterialsCommand(availableEquipments, equipmentToTrainingMapper)

        assert.deepStrictEqual(expectedRoutinesForEquipment, routinesFromEquipment)
    });

    it('Finds a repeated double match between equipment and routines and deletes repeated', () => {
        let availableEquipments = {'availableEquipment': 'equipment_1, equipment_2'}
        let equipmentToTrainingMapper = [{'equipment1': 'equipment_1', 'routine': 'routine_1'}, {'equipment1': 'equipment_2', 'routine': 'routine_1'}]
        let expectedRoutinesForEquipment = ['routine_1']

        let routinesFromEquipment = getRoutinesForTrainingsMaterialsCommand(availableEquipments, equipmentToTrainingMapper)

        assert.deepStrictEqual(expectedRoutinesForEquipment, routinesFromEquipment)
    });
})