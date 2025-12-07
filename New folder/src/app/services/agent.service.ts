import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subject, from } from 'rxjs';
import { environment } from '../../environments/environment';

export interface AgentStep {
  type: 'thought' | 'action' | 'response' | 'user' | 'error';
  content: string;
  timestamp: Date;
}

@Injectable({
  providedIn: 'root'
})
export class AgentService {
  private apiUrl = 'https://api.openai.com/v1/chat/completions';
  
  constructor(private http: HttpClient) { }

  processRequest(request: string): Observable<AgentStep> {
    const steps$ = new Subject<AgentStep>();

    // Emit initial thought
    steps$.next({
      type: 'thought',
      content: `Analyzing request: "${request}"`,
      timestamp: new Date()
    });

    setTimeout(() => {
      steps$.next({
        type: 'action',
        content: 'Connecting to OpenAI API...',
        timestamp: new Date()
      });

      this.callLLM(request).then(response => {
        steps$.next({
          type: 'thought',
          content: 'Processing response from AI model...',
          timestamp: new Date()
        });

        setTimeout(() => {
          steps$.next({
            type: 'response',
            content: response,
            timestamp: new Date()
          });
          steps$.complete();
        }, 500);
      }).catch(error => {
        // If rate limited or quota exceeded, fall back to demo mode
        if (error.message.includes('Rate Limit') || error.message.includes('quota')) {
          steps$.next({
            type: 'thought',
            content: 'OpenAI rate limit reached. Switching to demo mode...',
            timestamp: new Date()
          });
          
          setTimeout(() => {
            const demoResponse = this.generateDemoResponse(request);
            steps$.next({
              type: 'response',
              content: `📝 Demo Mode Response:\n\n${demoResponse}\n\n⚠️ ${error.message}`,
              timestamp: new Date()
            });
            steps$.complete();
          }, 500);
        } else {
          steps$.next({
            type: 'error',
            content: `Error: ${error.message || 'Failed to connect to LLM'}`,
            timestamp: new Date()
          });
          steps$.complete();
        }
      });
    }, 800);

    return steps$.asObservable();
  }

  private async callLLM(prompt: string): Promise<string> {
    if (!environment.openaiApiKey || environment.openaiApiKey === 'your-api-key-here') {
      // Demo mode - simulate AI response
      return this.generateDemoResponse(prompt);
    }

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${environment.openaiApiKey}`
    });

    const body = {
      model: 'gpt-3.5-turbo',
      messages: [
        {
          role: 'system',
          content: 'You are a helpful AI assistant. Be concise and helpful in your responses.'
        },
        {
          role: 'user',
          content: prompt
        }
      ],
      temperature: 0.7,
      max_tokens: 500
    };

    try {
      const response = await this.http.post<any>(this.apiUrl, body, { headers }).toPromise();
      return response.choices[0].message.content;
    } catch (error: any) {
      if (error.status === 401) {
        throw new Error('Invalid API key. Please check your OpenAI API key in the dashboard.');
      } else if (error.status === 429) {
        const errorBody = error.error;
        const message = errorBody?.error?.message || '';
        
        if (message.includes('quota') || message.includes('billing')) {
          throw new Error('🔑 OpenAI Account Issue: Your API key has no credits. Please add billing at https://platform.openai.com/account/billing\n\n💡 Alternative: The app will now use demo mode with simulated responses.');
        } else {
          throw new Error('⏱️ Rate Limit: Too many requests. OpenAI free tier allows 3 requests/min. Please wait 60 seconds or upgrade at https://platform.openai.com/account/billing\n\n💡 Using demo mode instead...');
        }
      } else if (error.status === 403) {
        throw new Error('🚫 Access Denied: Your API key may be invalid or expired. Check https://platform.openai.com/api-keys');
      }
      throw new Error(error.error?.error?.message || error.message || 'Failed to connect to OpenAI');
    }
  }

  private generateDemoResponse(prompt: string): string {
    const lowerPrompt = prompt.toLowerCase();
    
    // Context-aware demo responses
    if (lowerPrompt.includes('hello') || lowerPrompt.includes('hi')) {
      return "Hello! I'm a demo AI agent. This is a simulated response. To connect to real OpenAI:\n\n1. Get API key from https://platform.openai.com/api-keys\n2. Update src/environments/environment.ts\n3. Refresh the page\n\nTry asking me technical questions to see more demo responses!";
    }
    
    if (lowerPrompt.includes('typescript') || lowerPrompt.includes('angular')) {
      return "Great question about TypeScript/Angular! In demo mode, I can show you the agentic pattern:\n\n1. **Thought**: I analyzed your question about modern web development\n2. **Action**: I would query my knowledge base about TypeScript/Angular\n3. **Response**: TypeScript is a strongly-typed superset of JavaScript that's perfect for large-scale apps. Angular uses TypeScript extensively!\n\n💡 Connect a real API key to get actual AI-powered responses!";
    }
    
    if (lowerPrompt.includes('code') || lowerPrompt.includes('function')) {
      return "Here's a demo response for your coding question:\n\n```typescript\n// Example TypeScript function\nfunction greet(name: string): string {\n  return `Hello, ${name}!`;\n}\n```\n\n🤖 **Demo Mode Active**\nFor real code generation and explanations, add your OpenAI API key!\nSee API_KEY_SETUP.md for instructions.";
    }
    
    if (lowerPrompt.includes('agentic') || lowerPrompt.includes('agent')) {
      return "Excellent question about agentic AI! Here's how this demo works:\n\n**🧠 Thought Process:**\n- Analyze user's intent\n- Break down complex tasks\n- Plan action steps\n\n**⚡ Action Execution:**\n- Call APIs (OpenAI, databases, etc.)\n- Process data\n- Execute tools\n\n**💬 Response Generation:**\n- Synthesize results\n- Provide clear answers\n- Maintain conversation context\n\nThis is a simulated response. Connect to OpenAI for real agentic AI behavior!";
    }
    
    // Default response
    return `📝 **Demo Response for:** "${prompt}"\n\nI'm running in demo mode! Here's what I understood:\n- You asked: ${prompt}\n- In real mode, I would use OpenAI's GPT to provide detailed, intelligent responses\n- The agentic pattern (Thought → Action → Response) would be fully functional\n\n🔑 **To enable real AI:**\n1. Get free API key: https://platform.openai.com/api-keys\n2. Edit: src/environments/environment.ts\n3. Replace 'your-api-key-here' with your key\n4. Refresh this page\n\nCost: ~$0.002 per 1K tokens (very affordable for demos!)`;
  }
}
