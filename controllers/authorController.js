const asyncHandler = require("express-async-handler")
const Author = require("../models/author")
const Book = require("../models/book");

author_list = asyncHandler(async (req, res, next) => {
    const allAuthors = await Author.find().sort({ family_name: 1 }).exec();
    res.render("author_list", {
      title: "Author List",
      author_list: allAuthors,
    }); 
});

author_detail = asyncHandler(async (req, res, next) => {
  const [author, allBooksByAuthor] = await Promise.all([
    Author.findById(req.params.id).exec(),
    Book.find({ author: req.params.id }, "title summary").exec(),
  ]);

  if (author === null) {
    // No results.
    const err = new Error("Author not found");
    err.status = 404;
    return next(err);
  }

  res.render("author_detail", {
    title: "Author Detail",
    author: author,
    author_books: allBooksByAuthor,
  });
  });

author_create_get = asyncHandler(async (req,res,next)=>{
    res.send("NOT IMPlEMENTED: Author's create get ")
})
author_create_post = asyncHandler(async (req,res,next)=>{
    res.send("NOT IMPlEMENTED: Author's create post")
})

author_delete_get = asyncHandler(async (req,res,next)=>{
    res.send("NOT IMPlEMENTED: Author's delete")
})
author_delete_post = asyncHandler(async (req,res,next)=>{
    res.send("NOT IMPlEMENTED: Author's create ")
})

author_update_get = asyncHandler(async (req, res, next) => {
    res.send("NOT IMPLEMENTED: Author update GET");
  });
  
  // Handle Author update on POST.
author_update_post = asyncHandler(async (req, res, next) => {
    res.send("NOT IMPLEMENTED: Author update POST");
  });

  module.exports = {author_list, author_update_post, author_update_get, author_delete_post, author_delete_get, author_create_post, author_create_get,author_detail}