var router = require('express').Router(),
    service = require('../services/users');

router.get('/all', service.getAllUsers);

router.get('/:id', service.getUsersById);

router.post('/:userEmpId/:userVzid/:username/:userFirstName/:userLastName/:userEmailId/:userOrgId:/isAdmin:/isUserActive:/userRecognition', service.postUsers);

router.delete('/:userEmpId/:userEmpId/:userPassword', service.deleteUsersById);

router.put('/:userEmpId/:userVzid/:username/:userFirstName/:userLastName/:userEmailId/:userOrgId:/isAdmin:/isUserActive:/userRecognition', service.putUsersById);

// router.get('/type/:usertype', service.getUserDetailsByUserType);

module.exports = router;