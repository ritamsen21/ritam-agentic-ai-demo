# Agentic AI Demo - Task Planning Agent 🤖

A working demonstration of an intelligent task management agent built with Angular. This agentic AI automatically analyzes task descriptions, determines priority levels, and manages task execution.

## Features ✨

- **Intelligent Task Analysis**: Automatically detects keywords like "urgent", "important", and "asap" to determine task priority
- **Automatic Prioritization**: Tasks are categorized as high, medium, or low priority
- **Smart Execution**: High-priority tasks are automatically started by the agent
- **Real-time Activity Log**: Tracks all agent actions and decisions
- **Interactive UI**: Clean, modern interface with real-time updates
- **Task Management**: Create, start, complete, and delete tasks with visual feedback

## Demo Screenshots

### Initial View
![Initial View](https://github.com/user-attachments/assets/03142e20-120f-4cf6-99f7-63fd9e9af490)

### Agent in Action
![Agent in Action](https://github.com/user-attachments/assets/48bec317-bb01-4ca6-ad28-dd1d2c9c91b2)

## Getting Started 🚀

### Prerequisites

- Node.js (v20 or higher)
- npm (v10 or higher)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/ritamsen21/ritam-agentic-ai-demo.git
cd ritam-agentic-ai-demo
```

2. Navigate to the Angular app:
```bash
cd agentic-ai-app
```

3. Install dependencies:
```bash
npm install
```

4. Start the development server:
```bash
npm start
```

5. Open your browser and navigate to:
```
http://localhost:4200
```

## Usage 💡

1. **Add a Task**: Type a task description in the input field
2. **Use Keywords**: Include words like "urgent", "important", or "asap" to influence the priority
3. **Watch the Agent**: The agent will automatically analyze and prioritize your task
4. **Monitor Progress**: View the agent's activity in the real-time log
5. **Manage Tasks**: Use the Start, Complete, and Delete buttons to manage tasks

### Example Tasks

- "Fix urgent bug in production system" → High priority (automatically started)
- "Review important documentation" → Medium priority
- "Update README file" → Low priority

## Technology Stack 🛠️

- **Angular 21**: Modern web framework
- **TypeScript**: Type-safe development
- **RxJS**: Reactive programming
- **Angular Signals**: State management
- **CSS3**: Modern styling with gradients and animations

## Project Structure

```
agentic-ai-app/
├── src/
│   ├── app/
│   │   ├── app.ts           # Main component with agent logic
│   │   ├── app.html         # Template with UI layout
│   │   ├── app.css          # Component styles
│   │   └── app.config.ts    # App configuration
│   ├── styles.css           # Global styles
│   └── index.html           # Entry HTML
├── package.json
└── angular.json
```

## How It Works 🔧

The Task Planning Agent demonstrates agentic AI behavior through:

1. **Analysis**: Scans task descriptions for priority-indicating keywords
2. **Decision Making**: Determines appropriate priority levels (high/medium/low)
3. **Autonomous Action**: Automatically starts high-priority tasks
4. **Execution Simulation**: Simulates task completion with appropriate timing
5. **Logging**: Records all decisions and actions for transparency

## Building for Production

```bash
npm run build
```

The build artifacts will be stored in the `dist/` directory.

## License

MIT

## Author

Ritam Sen