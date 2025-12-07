# Agentic AI Demo - Angular

A demonstration of an agentic AI system built with Angular 18, featuring real-time streaming responses from OpenAI's GPT models.

## 🌟 Features

- **Real-time AI Responses**: Connects to OpenAI API for intelligent responses
- **Agentic Workflow**: Shows thought process, actions, and responses step-by-step
- **Modern UI**: Clean, responsive chat interface
- **TypeScript**: Fully typed for better development experience

## 🚀 Quick Start

### Prerequisites
- Node.js (v18+)
- Angular CLI (v18.2.21)
- OpenAI API Key ([Get one here](https://platform.openai.com/api-keys))

### Setup

1. **Clone and install dependencies**
   ```bash
   git clone https://github.com/ritamsen21/ritam-agentic-ai-demo.git
   cd ritam-agentic-ai-demo
   npm install
   ```

2. **Configure API Key** ⚠️ **Required**
   
   Copy the environment template:
   ```bash
   cp src/environments/environment.template.ts src/environments/environment.ts
   ```
   
   Then open `src/environments/environment.ts` and replace `'your-api-key-here'` with your OpenAI API key:
   ```typescript
   export const environment = {
     production: false,
     openaiApiKey: 'sk-proj-...' // Your actual API key here
   };
   ```
   
   📖 **Detailed setup guide**: See [API_KEY_SETUP.md](./API_KEY_SETUP.md)

3. **Run the development server**
   ```bash
   npm start
   ```
   
   Navigate to `http://localhost:4200/`
   
4. **Start exploring!**
   - Click **"Learn"** tab to understand agentic AI
   - Click **"Try It"** tab to chat with the AI agent

## 🔑 Alternative LLM Providers

You can easily switch to other LLM providers by modifying `src/app/services/agent.service.ts`:

### Anthropic Claude
```typescript
private apiUrl = 'https://api.anthropic.com/v1/messages';
// Update headers and request format accordingly
```

### Google Gemini
```typescript
private apiUrl = 'https://generativelanguage.googleapis.com/v1/models/gemini-pro:generateContent';
```

### Local LLMs (Ollama)
```typescript
private apiUrl = 'http://localhost:11434/api/generate';
```

## 📖 How It Works

The application demonstrates an agentic AI pattern:
1. **Thought**: AI analyzes the user's request
2. **Action**: AI takes actions (API calls, processing)
3. **Response**: AI provides the final answer

This pattern makes the AI's reasoning transparent and educational.

## 📁 Project Structure

```
src/
├── app/
│   ├── components/
│   │   ├── chat/              # Chat interface component
│   │   └── tutorial/          # Educational tutorial component
│   ├── services/
│   │   └── agent.service.ts   # Core agentic AI logic & LLM integration
│   ├── app.component.*        # Main app with tab navigation
│   └── app.config.ts          # App configuration with HttpClient
├── environments/
│   ├── environment.template.ts # Template (commit to git)
│   └── environment.ts          # Your config (DO NOT commit)
└── index.html
```

## 🎓 What You'll Learn

This demo teaches you:

1. **Agentic AI Architecture** - How to structure AI systems that think, act, and respond
2. **LLM Integration** - Connecting Angular apps to real AI APIs (OpenAI, Claude, etc.)
3. **Reactive Programming** - Using RxJS for streaming AI responses
4. **Modern Angular** - Standalone components, signals, and best practices
5. **API Security** - Handling API keys safely in frontend applications

## 💡 Use Cases for LinkedIn/Portfolio

This demo is perfect for showcasing:
- ✅ Modern frontend development skills
- ✅ AI/LLM integration experience  
- ✅ Understanding of agentic AI patterns
- ✅ Clean, professional code architecture
- ✅ Technical documentation skills

## 🚀 Deployment

### Deploy to Vercel (Recommended)

```bash
npm install -g vercel
vercel
```

⚠️ **Important**: Use environment variables for API keys in production!

### Deploy to Netlify

```bash
npm run build
# Upload the dist/ folder to Netlify
```

### Environment Variables for Production

In your hosting platform, set:
```
OPENAI_API_KEY=sk-proj-...
```

Then update `environment.prod.ts`:
```typescript
export const environment = {
  production: true,
  openaiApiKey: process.env['OPENAI_API_KEY'] || ''
};
```

## 🛠️ Development Commands

```bash
npm start              # Start dev server
npm run build          # Build for production
npm test               # Run unit tests
npm run lint           # Lint the code
```

## 🤝 Contributing

Contributions are welcome! Feel free to:
- 🐛 Report bugs
- 💡 Suggest new features
- 🔧 Submit pull requests
- ⭐ Star the repository

## 📝 License

MIT License - feel free to use this project for your portfolio or learning!

## 👨‍💻 Author

**Ritam Sen**
- LinkedIn: [Your Profile](https://linkedin.com/in/yourprofile)
- GitHub: [@ritamsen21](https://github.com/ritamsen21)

## 🙏 Acknowledgments

- Built with [Angular](https://angular.dev/)
- Powered by [OpenAI](https://openai.com/)
- Icons from Unicode emoji

---

**⭐ If this project helped you learn about agentic AI, please give it a star!**

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
