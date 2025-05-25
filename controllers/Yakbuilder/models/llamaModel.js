// models/llamaModel.js
const BaseModel = require('./baseModel');

class LlamaModel extends BaseModel {
  constructor() {
    super('LLaMA3', 'https://api.groq.com/openai/v1/chat/completions', {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${process.env.GROQ_API_KEY}`,
    });
  }

  buildPayload(prompt, systemPrompt = '', options = {}) {
    return {
      model: options.model || 'llama3-70b-8192',
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

module.exports = new LlamaModel();
