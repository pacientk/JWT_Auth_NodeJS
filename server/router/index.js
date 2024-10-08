const Router = require('express').Router;
const router = new Router();
const userController = require('../controllers/user.controller');
const contactUsFormController = require('../controllers/contactUsForm.controller');
const { body } = require('express-validator');
const authMiddleware = require('../middlewares/auth.middleware');

router.post(
   '/registration',
   body('email').isEmail(),
   body('password').isLength({ min: 3, max: 32 }),
   userController.registration,
);
router.post('/login', userController.login);
router.post('/logout', userController.logout);
router.get('/activate/:link', userController.activate);
router.get('/refresh', userController.refresh);
router.get('/users', /*authMiddleware,*/ userController.getUsers);
router.delete('/users/:id', userController.deleteUser);
router.post('/users/addnew', userController.addUser);
router.post('/contactform', contactUsFormController.addContactUsForm);

module.exports = router;
