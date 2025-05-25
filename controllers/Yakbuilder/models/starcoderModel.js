// models/starcoderModel.js
const BaseModel = require('./baseModel');

class StarcoderModel extends BaseModel {
  constructor() {
    super('Starcoder', 'https://api.groq.com/openai/v1/chat/completions', {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${process.env.GROQ_API_KEY}`,
    });
  }

  buildPayload(prompt, systemPrompt = '', options = {}) {
    return {
      model: options.model || 'gemma-7b-it',
      messages: [
        { role: 'system', content: systemPrompt },
        { role: 'user', content: prompt },
      ],
    };
  }

  extractResponse(data) {
    return data.choices?.[0]?.message?.content || 'No response';
  }
}

module.exports = new StarcoderModel();
