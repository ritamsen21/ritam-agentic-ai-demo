# 🔑 API Key Setup Guide

This guide will help you set up your OpenAI API key to connect the Agentic AI Demo with real LLM capabilities.

## Option 1: OpenAI (Recommended for Demo)

### Step 1: Get Your API Key

1. Go to [OpenAI Platform](https://platform.openai.com/)
2. Sign up or log in to your account
3. Navigate to **API Keys** section
4. Click **"Create new secret key"**
5. Copy the key (starts with `sk-...`)

### Step 2: Configure the Application

1. Open `src/environments/environment.ts`
2. Replace `'your-api-key-here'` with your actual API key:

```typescript
export const environment = {
  production: false,
  openaiApiKey: 'sk-proj-...' // Your actual key here
};
```

### Step 3: Test the Connection

1. Run `npm start`
2. Go to http://localhost:4200
3. Click the "Try It" tab
4. Ask a question like "What is TypeScript?"

### Cost Information

- GPT-3.5-turbo: ~$0.002 per 1K tokens
- For demo purposes, expect to spend less than $1
- Set usage limits in your OpenAI dashboard

---

## Option 2: Alternative LLM Providers

### Anthropic Claude

1. Get API key from [Anthropic Console](https://console.anthropic.com/)
2. Update `agent.service.ts`:

```typescript
private apiUrl = 'https://api.anthropic.com/v1/messages';

private async callLLM(prompt: string): Promise<string> {
  const headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'x-api-key': environment.openaiApiKey, // Rename this to anthropicApiKey
    'anthropic-version': '2023-06-01'
  });

  const body = {
    model: 'claude-3-sonnet-20240229',
    messages: [{ role: 'user', content: prompt }],
    max_tokens: 500
  };
  
  const response = await this.http.post<any>(this.apiUrl, body, { headers }).toPromise();
  return response.content[0].text;
}
```

### Google Gemini

1. Get API key from [Google AI Studio](https://makersuite.google.com/app/apikey)
2. Update `agent.service.ts`:

```typescript
private apiUrl = 'https://generativelanguage.googleapis.com/v1/models/gemini-pro:generateContent';

private async callLLM(prompt: string): Promise<string> {
  const url = `${this.apiUrl}?key=${environment.openaiApiKey}`;
  
  const body = {
    contents: [{
      parts: [{ text: prompt }]
    }]
  };
  
  const response = await this.http.post<any>(url, body).toPromise();
  return response.candidates[0].content.parts[0].text;
}
```

### Local LLMs (Ollama)

1. Install [Ollama](https://ollama.ai/)
2. Run `ollama serve`
3. Pull a model: `ollama pull llama2`
4. Update `agent.service.ts`:

```typescript
private apiUrl = 'http://localhost:11434/api/generate';

private async callLLM(prompt: string): Promise<string> {
  const body = {
    model: 'llama2',
    prompt: prompt,
    stream: false
  };
  
  const response = await this.http.post<any>(this.apiUrl, body).toPromise();
  return response.response;
}
```

**Benefits**: Free, private, no API key needed!

---

## Troubleshooting

### Error: "Invalid API key"
- ✓ Check that you copied the full key (starts with `sk-`)
- ✓ Ensure there are no extra spaces
- ✓ Verify the key is active in your OpenAI dashboard

### Error: "Rate limit exceeded"
- ✓ Wait a few minutes before trying again
- ✓ Check your usage limits in OpenAI dashboard
- ✓ Consider upgrading your plan

### Error: "CORS policy"
- ✓ This should not happen with OpenAI API
- ✓ If using local LLMs, ensure proper CORS headers

### App shows "Please configure your OpenAI API key"
- ✓ Verify you edited `src/environments/environment.ts`
- ✓ Restart the dev server (`npm start`)
- ✓ Clear browser cache (Ctrl+Shift+R)

---

## Security Best Practices

### ⚠️ Important: Never commit API keys to Git!

1. **Add to .gitignore** (already done):
   ```
   /src/environments/environment.ts
   /src/environments/environment.development.ts
   ```

2. **Use environment variables** (for production):
   ```typescript
   export const environment = {
     production: true,
     openaiApiKey: process.env['OPENAI_API_KEY'] || ''
   };
   ```

3. **Backend Proxy** (recommended for production):
   - Never expose API keys in frontend code
   - Create a backend API that proxies requests
   - Frontend calls your backend, backend calls OpenAI

### Example Backend Proxy (Node.js/Express)

```javascript
// server.js
const express = require('express');
const axios = require('axios');
const app = express();

app.use(express.json());

app.post('/api/chat', async (req, res) => {
  try {
    const response = await axios.post(
      'https://api.openai.com/v1/chat/completions',
      {
        model: 'gpt-3.5-turbo',
        messages: req.body.messages
      },
      {
        headers: {
          'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`
        }
      }
    );
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(3000);
```

Then update your Angular service to call `/api/chat` instead.

---

## Demo Mode (No API Key)

Want to demo without an API key? The app will show a helpful error message explaining the requirement. You can modify `agent.service.ts` to use mock responses for presentations:

```typescript
if (!environment.openaiApiKey || environment.openaiApiKey === 'your-api-key-here') {
  // Return mock response for demo
  return `This is a simulated response. For real AI responses, please configure your API key following the guide in API_KEY_SETUP.md`;
}
```

---

## Questions?

- 📧 Email: your-email@example.com
- 💼 LinkedIn: [Your Profile](https://linkedin.com/in/yourprofile)
- 🐙 GitHub Issues: [Report an issue](https://github.com/ritamsen21/ritam-agentic-ai-demo/issues)

Happy building! 🚀
