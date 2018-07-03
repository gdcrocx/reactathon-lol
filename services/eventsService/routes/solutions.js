var router = require('express').Router(),
    service = require('../services/solutions');

router.get('/all', service.getAllSolutions);

router.get('/:solutionId', service.getSolutionsById);

router.post('/:solutionId/:solutionName/:solutionDescription/:solutionLongDescription/:solutionSubmissionDate/:solutionSubmittedByUserEmpId/:solutionLikes/:solutionKeywords/:solutionUploadPath/:solutionEventId/:solutionOrgId', service.postSolutions);

router.delete('/:userEmpId/:userEmpId/:userPassword', service.deleteSolutionsById);

router.put('/:solutionId/:solutionName/:solutionDescription/:solutionLongDescription/:solutionSubmissionDate/:solutionSubmittedByUserEmpId/:solutionLikes/:solutionKeywords/:solutionUploadPath/:solutionEventId/:solutionOrgId', service.putSolutionsById);

router.get('/likes/like/:solutionId/1', service.putLikesBySolutionsId);

router.get('/likes/dislike/:solutionId/1', service.putLikesBySolutionsId);

module.exports = router;