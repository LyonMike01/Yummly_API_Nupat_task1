const express = require("express");
const router = express.Router();


const { getCategories } = require("../controller/categoryList");
const { autoComplete } = require("../controller/feedAutoComp");
const { feedList } = require("../controller/feedList");
const { getSimilarities } = require("../controller/feedListSimilarities");
const { getSearch } = require("../controller/feedSearch");
const { getReviews } = require("../controller/review");
const { getTags } = require("../controller/tagList");



router.get("/categories/list", getCategories)
      .get("/feeds/auto-complete", autoComplete)
      .get("/feeds/list", feedList)
      .get("/feeds/list-similarities", getSimilarities)
      .get("/feeds/search", getSearch)
      .get("/reviews/list", getReviews)
      .get("/tags/list", getTags)


module.exports = router;
