import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tutorial',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="container">
      <!-- Header -->
      <div class="row mb-5">
        <div class="col-12 text-center">
          <h2 class="display-5 fw-bold text-primary mb-3">
            🦾 What is Agentic AI?
          </h2>
          <p class="lead text-muted">Understanding autonomous AI agents and their capabilities</p>
        </div>
      </div>

      <!-- Definition Card -->
      <div class="row mb-4">
        <div class="col-12">
          <div class="card shadow-sm border-0">
            <div class="card-body p-4">
              <h3 class="card-title text-primary mb-3">
                <i class="bi bi-info-circle-fill"></i> Definition
              </h3>
              <p class="card-text lead">
                Agentic AI refers to AI systems that can <strong>autonomously take actions</strong>, 
                make decisions, and work towards goals with minimal human intervention. Unlike traditional 
                AI that simply responds to queries, agentic AI can <strong>plan, reason, and execute</strong> 
                multi-step tasks.
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- Key Components -->
      <div class="row mb-4">
        <div class="col-12">
          <h3 class="text-center mb-4">
            <i class="bi bi-puzzle-fill"></i> Key Components
          </h3>
        </div>
      </div>

      <div class="row g-4 mb-5">
        <div class="col-md-4">
          <div class="card h-100 shadow-sm border-0 bg-warning bg-opacity-10">
            <div class="card-body text-center p-4">
              <div class="display-1 mb-3">💭</div>
              <h4 class="card-title text-warning">Thought</h4>
              <p class="card-text">The AI analyzes the problem and plans its approach</p>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card h-100 shadow-sm border-0 bg-info bg-opacity-10">
            <div class="card-body text-center p-4">
              <div class="display-1 mb-3">⚡</div>
              <h4 class="card-title text-info">Action</h4>
              <p class="card-text">The AI executes specific tasks or queries external systems</p>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card h-100 shadow-sm border-0 bg-success bg-opacity-10">
            <div class="card-body text-center p-4">
              <div class="display-1 mb-3">💬</div>
              <h4 class="card-title text-success">Response</h4>
              <p class="card-text">The AI synthesizes results and provides an answer</p>
            </div>
          </div>
        </div>
      </div>

      <!-- How It Works -->
      <div class="row mb-4">
        <div class="col-12">
          <div class="card shadow-sm border-0">
            <div class="card-body p-4">
              <h3 class="card-title text-primary mb-4">
                <i class="bi bi-gear-fill"></i> How This Demo Works
              </h3>
              <ol class="list-group list-group-numbered list-group-flush">
                <li class="list-group-item d-flex justify-content-between align-items-start">
                  <div class="ms-2 me-auto">
                    <div class="fw-bold">User Input</div>
                    You ask a question in the chat
                  </div>
                  <span class="badge bg-primary rounded-pill">Step 1</span>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-start">
                  <div class="ms-2 me-auto">
                    <div class="fw-bold">Thought Process</div>
                    The agent analyzes your request
                  </div>
                  <span class="badge bg-warning rounded-pill">Step 2</span>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-start">
                  <div class="ms-2 me-auto">
                    <div class="fw-bold">Action Execution</div>
                    The agent calls OpenAI's API
                  </div>
                  <span class="badge bg-info rounded-pill">Step 3</span>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-start">
                  <div class="ms-2 me-auto">
                    <div class="fw-bold">Response Generation</div>
                    The agent delivers the result
                  </div>
                  <span class="badge bg-success rounded-pill">Step 4</span>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>

      <!-- Real-World Applications -->
      <div class="row mb-4">
        <div class="col-12">
          <div class="card shadow-sm border-0 bg-light">
            <div class="card-body p-4">
              <h3 class="card-title text-primary mb-4">
                <i class="bi bi-globe"></i> Real-World Applications
              </h3>
              <div class="row g-3">
                <div class="col-md-6">
                  <div class="d-flex">
                    <div class="flex-shrink-0">
                      <i class="bi bi-search text-primary fs-3"></i>
                    </div>
                    <div class="flex-grow-1 ms-3">
                      <h5>Research Assistants</h5>
                      <p class="text-muted mb-0">Autonomously gather and synthesize information</p>
                    </div>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="d-flex">
                    <div class="flex-shrink-0">
                      <i class="bi bi-code-slash text-success fs-3"></i>
                    </div>
                    <div class="flex-grow-1 ms-3">
                      <h5>Code Generation</h5>
                      <p class="text-muted mb-0">Write, test, and debug code independently</p>
                    </div>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="d-flex">
                    <div class="flex-shrink-0">
                      <i class="bi bi-bar-chart text-info fs-3"></i>
                    </div>
                    <div class="flex-grow-1 ms-3">
                      <h5>Data Analysis</h5>
                      <p class="text-muted mb-0">Explore datasets and generate insights</p>
                    </div>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="d-flex">
                    <div class="flex-shrink-0">
                      <i class="bi bi-lightning text-warning fs-3"></i>
                    </div>
                    <div class="flex-grow-1 ms-3">
                      <h5>Task Automation</h5>
                      <p class="text-muted mb-0">Execute complex workflows without supervision</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Technical Stack -->
      <div class="row mb-4">
        <div class="col-12">
          <div class="card shadow-sm border-0 bg-gradient-primary text-white">
            <div class="card-body p-4 text-center">
              <h3 class="card-title mb-4">
                <i class="bi bi-stack"></i> Technical Stack
              </h3>
              <div class="d-flex flex-wrap justify-content-center gap-2">
                <span class="badge bg-light text-dark px-3 py-2 fs-6">Angular 18</span>
                <span class="badge bg-light text-dark px-3 py-2 fs-6">TypeScript</span>
                <span class="badge bg-light text-dark px-3 py-2 fs-6">Bootstrap 5</span>
                <span class="badge bg-light text-dark px-3 py-2 fs-6">RxJS</span>
                <span class="badge bg-light text-dark px-3 py-2 fs-6">OpenAI API</span>
                <span class="badge bg-light text-dark px-3 py-2 fs-6">HttpClient</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Try It Yourself -->
      <div class="row mb-4">
        <div class="col-12">
          <div class="card shadow-sm border-primary">
            <div class="card-body p-4">
              <h3 class="card-title text-primary mb-4">
                <i class="bi bi-chat-square-quote-fill"></i> Try It Yourself!
              </h3>
              <p class="lead mb-3">Ask the AI agent questions like:</p>
              <ul class="list-group list-group-flush">
                <li class="list-group-item bg-light border-start border-primary border-4">
                  <i class="bi bi-quote text-primary"></i>
                  "Explain quantum computing in simple terms"
                </li>
                <li class="list-group-item bg-light border-start border-success border-4">
                  <i class="bi bi-quote text-success"></i>
                  "Write a TypeScript function to sort an array"
                </li>
                <li class="list-group-item bg-light border-start border-info border-4">
                  <i class="bi bi-quote text-info"></i>
                  "What are the benefits of Angular signals?"
                </li>
                <li class="list-group-item bg-light border-start border-warning border-4">
                  <i class="bi bi-quote text-warning"></i>
                  "Help me debug a CORS error"
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <!-- Call to Action -->
      <div class="row mb-5">
        <div class="col-12">
          <div class="card shadow-lg border-0 bg-gradient-success text-white">
            <div class="card-body p-5 text-center">
              <h3 class="display-6 fw-bold mb-3">
                <i class="bi bi-rocket-takeoff-fill"></i> Ready to Build?
              </h3>
              <p class="lead mb-4">
                Check out the source code to see how the agentic pattern is implemented!
              </p>
              <a href="https://github.com/ritamsen21/ritam-agentic-ai-demo" target="_blank" 
                 class="btn btn-light btn-lg">
                <i class="bi bi-github"></i> View on GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .bg-gradient-primary {
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    }
    
    .bg-gradient-success {
      background: linear-gradient(135deg, #11998e 0%, #38ef7d 100%);
    }
    
    .card {
      transition: transform 0.3s ease, box-shadow 0.3s ease;
    }
    
    .card:hover {
      transform: translateY(-5px);
      box-shadow: 0 10px 25px rgba(0,0,0,0.15) !important;
    }
    
    .display-1 {
      font-size: 4rem;
    }
    
    .list-group-item {
      border: none;
      padding: 1rem 1.25rem;
    }
  `]
})
export class TutorialComponent { }
