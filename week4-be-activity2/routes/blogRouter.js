const express = require("express");
const router = express.Router();
const {
    getAllBlogs,
    getBlogById,
    createBlog,
    updateBlog,
    deleteBlog

} = require("../controllers/blogControllers");

// GET /cars
router.get("/", getAllBlogs);

// POST /cars
router.post("/", createBlog);

// GET /cars/:carId
router.get("/:carId", getBlogById);

// PUT /cars/:carId
router.put("/:carId", updateBlog);

// DELETE /cars/:carId
router.delete("/:carId", deleteBlog);



module.exports = router;