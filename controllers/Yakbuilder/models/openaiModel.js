const OpenAI = require("openai");

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

module.exports = async function openaiModel(prompt) {
  if (!process.env.OPENAI_API_KEY) {
    throw new Error("Missing OPENAI_API_KEY in environment.");
  }

  try {
    const chatCompletion = await openai.chat.completions.create({
      model: "gpt-4-turbo",
      messages: [{ role: "user", content: prompt }],
    });
    return chatCompletion.choices[0].message.content;
  } catch (error) {
    console.error("OpenAI API Error:", error.message);
    return `OpenAI Error: ${error.message}`;
  }
};
