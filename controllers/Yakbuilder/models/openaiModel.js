// models/openaiModel.js
const BaseModel = require('./baseModel');

class OpenAIModel extends BaseModel {
  constructor() {
    super('OpenAI', 'https://api.openai.com/v1/chat/completions', {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
    });
  }

  buildPayload(prompt, systemPrompt = '', options = {}) {
    return {
      model: options.model || 'gpt-4',
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

module.exports = new OpenAIModel();
