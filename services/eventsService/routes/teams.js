var router = require('express').Router(),
    service = require('../services/teams');

router.post('/:parking_name/:parking_vendor_id/:parking_loc_id/:parking_tariff_id/:parking_slots/:parking_from_time/:parking_to_time/:parking_workdays_id/:parking_managed_status', service.postTeams);

router.delete('/:teamId/:userEmpId/:userPassword', service.deleteTeamsById);

router.put('/:teamId/:vendorid/:parkingname/:locationid/:tariffid/:totalslots/:fromtime/:totime/:workdaysid/:managedstatus', service.putTeamsById);

router.get('/:teamId', service.getTeamsById);

// router.get('/:locationlat/:locationlng', service.getVendorParkingIdByLatLng);

// router.get('/available/:locationlat/:locationlng', service.getAvailabilityParkingByLatLng);

module.exports = router;