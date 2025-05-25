// models/mistralModel.js
const BaseModel = require('./baseModel');

class MistralModel extends BaseModel {
  constructor() {
    super('Mistral', 'https://api.mistral.ai/v1/chat/completions', {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${process.env.MISTRAL_API_KEY}`,
    });
  }

  buildPayload(prompt, systemPrompt = '', options = {}) {
    return {
      model: options.model || 'mistral-large',
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

module.exports = new MistralModel();
