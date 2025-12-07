# Agentic AI Demo - Project Instructions

This is an Angular 18 application demonstrating agentic AI workflows with real LLM integration.

## Project Overview

- **Framework**: Angular 18 (Standalone Components)
- **AI Integration**: OpenAI GPT-3.5-turbo (configurable for other providers)
- **Pattern**: Agentic AI (Thought → Action → Response)
- **Purpose**: Educational demo for LinkedIn/portfolio

## Key Features

1. **Tutorial Component**: Teaches users about agentic AI concepts
2. **Chat Component**: Interactive AI agent with real-time responses
3. **Agent Service**: Core logic for LLM integration and agentic workflow
4. **Tab Navigation**: Switch between learning and trying the AI

## Important Files

- `src/app/services/agent.service.ts` - LLM integration and agentic logic
- `src/app/components/chat/` - Chat interface
- `src/app/components/tutorial/` - Educational content
- `src/environments/environment.ts` - API key configuration (DO NOT COMMIT)
- `API_KEY_SETUP.md` - Detailed setup instructions

## Setup Requirements

1. Install dependencies: `npm install`
2. Configure OpenAI API key in `src/environments/environment.ts`
3. Run dev server: `npm start`
4. Access at: `http://localhost:4200/`

## API Key Security

- Environment files are in `.gitignore`
- Use `environment.template.ts` as the committed template
- See `API_KEY_SETUP.md` for production security best practices

## Customization

To switch LLM providers, modify `agent.service.ts`:
- OpenAI (default)
- Anthropic Claude
- Google Gemini
- Local LLMs (Ollama)

See `API_KEY_SETUP.md` for provider-specific code examples.

## Development Guidelines

- All components use standalone architecture
- HttpClient provided at app level
- RxJS for streaming responses
- TypeScript strict mode enabled
- No backend required for demo (API calls from frontend)

## Completed Setup

- [x] Verify copilot-instructions.md created
- [x] Clarify project requirements (Angular agentic AI demo)
- [x] Scaffold project structure
- [x] Customize with agentic AI features
- [x] Install required extensions
- [x] Compile project successfully
- [x] Create and run development task
- [x] Launch project at localhost:4200
- [x] Ensure documentation complete

## Documentation

- `README.md` - Main project documentation
- `API_KEY_SETUP.md` - Detailed API key configuration guide
- Inline code comments explaining agentic patterns

Project is ready for demonstration and deployment!
	Verify that all previous steps have been completed.
	Verify that README.md and the copilot-instructions.md file in the .github directory exists and contains current project information.
	Clean up the copilot-instructions.md file in the .github directory by removing all HTML comments.
	 -->

<!--
## Execution Guidelines
PROGRESS TRACKING:
- If any tools are available to manage the above todo list, use it to track progress through this checklist.
- After completing each step, mark it complete and add a summary.
- Read current todo list status before starting each new step.

COMMUNICATION RULES:
- Avoid verbose explanations or printing full command outputs.
- If a step is skipped, state that briefly (e.g. "No extensions needed").
- Do not explain project structure unless asked.
- Keep explanations concise and focused.

DEVELOPMENT RULES:
- Use '.' as the working directory unless user specifies otherwise.
- Avoid adding media or external links unless explicitly requested.
- Use placeholders only with a note that they should be replaced.
- Use VS Code API tool only for VS Code extension projects.
- Once the project is created, it is already opened in Visual Studio Code—do not suggest commands to open this project in Visual Studio again.
- If the project setup information has additional rules, follow them strictly.

FOLDER CREATION RULES:
- Always use the current directory as the project root.
- If you are running any terminal commands, use the '.' argument to ensure that the current working directory is used ALWAYS.
- Do not create a new folder unless the user explicitly requests it besides a .vscode folder for a tasks.json file.
- If any of the scaffolding commands mention that the folder name is not correct, let the user know to create a new folder with the correct name and then reopen it again in vscode.

EXTENSION INSTALLATION RULES:
- Only install extension specified by the get_project_setup_info. DO NOT INSTALL any other extensions.

PROJECT CONTENT RULES:
- If the user has not specified project details, assume they want a "Hello World" project as a starting point.
- Avoid adding links of any type (URLs, files, folders, etc.) or integrations that are not explicitly required.
- Avoid generating images, videos, or any other media files unless explicitly requested.
- If you need to use any media assets as placeholders, let the user know that these are placeholders and should be replaced with the actual assets later.
- Ensure all generated components serve a clear purpose within the user's requested workflow.
- If a feature is assumed but not confirmed, prompt the user for clarification before including it.
- If you are working on a VS Code extension, use the VS Code API tool with a query to find relevant VS Code API references and samples related to that query.

TASK COMPLETION RULES:
- Your task is complete when:
  - Project is successfully scaffolded and compiled without errors
  - copilot-instructions.md file in the .github directory exists in the project
  - README.md file exists and is up to date
  - User is provided with clear instructions to debug/launch the project

Before starting a new task in the above plan, update progress in the plan.
-->
- Work through each checklist item systematically.
- Keep communication concise and focused.
- Follow development best practices.
