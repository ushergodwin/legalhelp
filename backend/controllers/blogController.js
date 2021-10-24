//test blog model
const createArticle = (req, res, next) => {
    res.status(200).json({
        success:true,
        message:"this route is for creating a blog article"
    });
}
const allArticles = (req, res, next) => {
    res.status(200).json({
        success:true,
        message:"this route is for getting all blog articles"
    });
}
const publishArticle = (req, res, next) => {
    res.status(200).json({
        success:true,
        message:"this route is for publishing blog article "
    });
}

const deleteArticle = (req, res, next) => {
    res.status(200).json({
        success:true,
        message:"this route is for deleting blog article " + req.body.id
    });
}

const getOneArticle = (req, res, next) => {
    res.status(200).json({
        success: true,
        message: "got content for article " + req.params.slung
    });
}

exports.createArticle = createArticle;
exports.allArticles = allArticles;
exports.publishArticle = publishArticle;
exports.deleteArticle = deleteArticle;
exports.getOneArticle = getOneArticle;