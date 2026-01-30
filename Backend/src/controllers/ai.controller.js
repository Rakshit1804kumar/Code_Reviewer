// const aiService = require("../services/ai.services")


// module.exports.getReview = async(req,res) =>{
    
//     const code = req.body.code;

//     if(!code){
//         return res.status(400).send("Prompt is required");
//     }

//     const response = await aiService(code);

//     res.send(response);
// }

const aiService = require("../services/ai.services");

module.exports.getReview = async (req, res) => {
  try {
    const { code } = req.body;

    // Validation
    if (!code) {
      return res.status(400).json({
        error: "Prompt is required"
      });
    }

    // Call AI service
    const response = await aiService(code);

    // Success response
    return res.status(200).json({
      review: response
    });

  } catch (error) {
    console.error("AI Controller Error:", error.message);

    return res.status(500).json({
      error: "Failed to generate review"
    });
  }
};
