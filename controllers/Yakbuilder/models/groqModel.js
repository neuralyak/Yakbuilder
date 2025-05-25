// models/groqModel.js
const BaseModel = require('./baseModel');

class GroqModel extends BaseModel {
  constructor() {
    super('Groq', 'https://api.groq.com/openai/v1/chat/completions', {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${process.env.GROQ_API_KEY}`,
    });
  }

  buildPayload(prompt, systemPrompt = '', options = {}) {
    return {
      model: options.model || 'mixtral-8x7b-32768',
      messages: [
        { role: 'system', content: systemPrompt },
        { role: 'user', content: prompt },
      ],
      temperature: options.temperature || 0.7,
    };
  }

  extractResponse(data) {
    return data.choices?.[0]?.message?.content || 'No response';
  }
}

module.exports = new GroqModel();
