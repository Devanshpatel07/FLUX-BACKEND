const express = require('express');
const router = express.Router();
const { protect, admin } = require('../middleware/authMiddleware');
const {
  registerCandidate,
  getRecruitmentStatus,
  getAllRecruitmentRegistrations,
  deleteRecruitmentRegistration,
  updateRecruitmentStatus,
} = require('../controllers/recruitmentController');

// POST /api/recruitment/register
router.post('/register', registerCandidate);

// GET /api/recruitment/status
router.get('/status', getRecruitmentStatus);

// GET /api/recruitment/registrations (Admin & Event Organizer portal)
router.get('/registrations', getAllRecruitmentRegistrations);

// PATCH /api/recruitment/status/:id
router.patch('/status/:id', updateRecruitmentStatus);

// DELETE /api/recruitment/registrations/:id
router.delete('/registrations/:id', deleteRecruitmentRegistration);

module.exports = router;

