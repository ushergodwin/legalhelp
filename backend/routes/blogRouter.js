const express = require('express');
const router = express.Router();

const {blogController} = require('../controllers/blogController');
const Controller = new blogController();

const {isUserAuthenticated} = require('../middlewares/user')

router.route('/blog/new').post(Controller.createArticle);
router.route('/blog/articles').get(Controller.allArticles);
router.route('/blog/article/publish').post(Controller.publishArticle);
router.route('/admin/blog/:id').delete(Controller.deleteArticle);
router.route('/blog/:id').get(Controller.getOneArticle);
router.route('/blog/article/update').post(Controller.updateArticle);
router.route('/blog/article/comment').post(Controller.comment);
module.exports = router;    