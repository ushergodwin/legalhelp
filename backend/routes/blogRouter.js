const express = require('express');
const router = express.Router();

const {
    createArticle,
    allArticles,
    publishArticle,
    deleteArticle,
    getOneArticle
} = require('../controllers/blogController');

router.route('/blog/new').post(createArticle);
router.route('/blog/articles').get(allArticles);
router.route('/blog/article/publish/').post(publishArticle);
router.route('/blog/article/delete/:slung').post(deleteArticle);
router.route('/blog/article/:slung').get(getOneArticle);

module.exports = router;