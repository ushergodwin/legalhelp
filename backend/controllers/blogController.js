const ErrorHandler = require('../utils/errorHandler')
const CatchAsyncError = require('../middlewares/catchAsyncError')
const Blog = require('../models/blog');
const cloudinary = require('cloudinary')
//ok let me work now and i will let u know when am done
//kale, u can now disconnect

class blogController
{
    createArticle = CatchAsyncError( async (req, res, next) => {

        let img_banner = [];

  if (typeof req.body.img_banner === "string") {
    img_banner.push(req.body.img_banner);
  } else {
    img_banner = req.body.img_banner;
  }

  let imagesLinks = []; 

  for(let i = 0; i < img_banner.length; i++) {
    const result = await cloudinary.v2.uploader.upload(img_banner[i], {
      folder: "Blogimages",
    });

    imagesLinks.push({
      public_id: result.public_id,
      url: result.secure_url,
    });
  }
  req.body.img_banner = imagesLinks;
  
       
    const article = await Blog.create(req.body);

        res.status(200).json({
            success:true,
            article
        });
    });

    allArticles = CatchAsyncError( async (req, res, next) => {
        await Blog.find({article_status: 'published'}).sort('-published_at')
        .exec((err, docs) => {
            res.status(200).json({
                success:true,
                articles: docs
            });
        });
    });

    //admin publish or un publish an article
    publishArticle = CatchAsyncError( async (req, res, next) => {
        const status = req.body.status;
        const article = await Blog.findById(req.body.id);
        if(article === null)
        {
            return res.status(500).json({
                success: false,
                message: 'Can not publish article. Please contact the site admin'
            });
        }
        article.article_status = status;
        let errorMessage = "Failed to publish the article! Please try again later!";
        let successMessage = "Article published successfully!"
        if(status === "draft")
        {
            errorMessage = "Failed to unpublish the article! Please try again later!";
            successMessage = "Article unpublished successfully and it is no longer visible to the users";
        }

        article.save().then((savedArticle) => {
            if(savedArticle === article)
            {
                return res.status(200).json({
                    success:true,
                    message: successMessage
                });
            }
            return res.status(500).json({
                success: false,
                message: errorMessage
            });
        });

    });

    //admin delete article
    deleteArticle = CatchAsyncError( async (req, res, next) => {
        const deleted = await Blog.deleteOne({_id: req.body.id});
        if(deleted.deletedCount > 0)
        {
            return res.status(200).json({
                success:true,
                message: "Article deleted successfully!"
            });
        }
        return next(new ErrorHandler("Failed to deleted the Article!", 500));
    });


    //get one article
    getOneArticle = CatchAsyncError( async (req, res, next) => {
        const slung = req.params.slung;
        const article = await Blog.findOne({slung: slung, article_status: 'published'});
        if(article === null)
        {
            return next(new ErrorHandler('Page not found', 403));
        }
        return res.status(200).json({
            success: true,
            article: article
        });
    });


    //admin update article


    updateArticle = CatchAsyncError( async (req, res, next) => {
        const article = {
            title: req.body.title,
            img_banner: req.body.img_banner,
            slung: req.body.slung + randomUUID(),
            content: req.body.content,

        }
        const updated = await Blog.updateOne({_id: req.body.id}, article);
        if(updated.modifiedCount > 0)
        {
            return res.status(200).json({
                success:true,
                message: "Article updated successfully!"
            });
        }
        return next(new ErrorHandler("Failed to update the Article!", 500));
    });

    //save comment for an article
    comment = CatchAsyncError( async (req, res, next) => {
        const comment = {
            email: req.body.email,
            name: req.body.name,
            body: req.body.comment
        }
       const addedComment = await Blog.updateOne({"_id": req.body.id}, {"$push": {"comments": comment}});
       if(addedComment.modifiedCount > 0)
       {
           return res.status(200).json({
               success:true,
               message: "Commeted successfully!"
           });
       }
       return next(new ErrorHandler("Failed to send comment!", 500));
    });
}
module.exports.blogController = blogController;
