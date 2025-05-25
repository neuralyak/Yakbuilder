const axios = require("axios");

exports.generateText = async (req, res) => {
  try {
    const { prompt, model = "llama3" } = req.body;

    const response = await axios.post(
      process.env.MODEL_PROVIDER_URL,
      {
        model,
        prompt,
        stream: false
      }
    );

    res.json({ output: response.data.response });
  } catch (error) {
    console.error("Error generating text:", error.message);
    res.status(500).json({ error: "Model inference failed" });
  }
};
