const express = require('express');
const router = express.Router();

const courseController = require('../app/controllers/CourseController');

router.get('/create', courseController.create);
router.post('/store', courseController.store);
router.post(
    '/handle-form-stored-actions',
    courseController.handleFormStoredActions,
);
router.post(
    '/handle-form-trash-actions',
    courseController.handleFormTrashActions,
);
router.get('/:id/edit', courseController.edit);
router.put('/:id', courseController.update);
router.patch('/:id/restore', courseController.restore); //Khôi phục thùng rác
router.delete('/:id', courseController.destroy);
router.delete('/:id/force', courseController.forceDestroy); // Xóa vĩnh viễn
router.get('/:slug', courseController.show);

module.exports = router;
