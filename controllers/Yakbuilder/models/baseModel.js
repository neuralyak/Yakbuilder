// models/baseModel.js
const axios = require('axios');

class BaseModel {
  constructor(name, endpoint, headers = {}) {
    this.name = name;
    this.endpoint = endpoint;
    this.headers = headers;
  }

  async sendRequest(prompt, systemPrompt = '', options = {}) {
    try {
      const payload = this.buildPayload(prompt, systemPrompt, options);
      const response = await axios.post(this.endpoint, payload, { headers: this.headers });
      return this.extractResponse(response.data);
    } catch (error) {
      console.error(`[${this.name}] Error:`, error.message);
      return { error: 'Failed to generate response' };
    }
  }

  buildPayload(prompt, systemPrompt, options) {
    return { prompt, ...options };
  }

  extractResponse(data) {
    return data;
  }
}

module.exports = BaseModel;
