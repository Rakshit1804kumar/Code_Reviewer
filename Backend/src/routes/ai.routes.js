const express = require('express');
//const aiController = require("../controllers/ai.controller")
exports.getReview = async (req, res) => {
  return res.json({
    review: "Controller working perfectly ✅"
  });
};
const router = express.Router();

router.post("/get-review",aiController.getReview)

module.exports = router;
