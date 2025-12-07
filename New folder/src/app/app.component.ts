import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ChatComponent } from './components/chat/chat.component';
import { TutorialComponent } from './components/tutorial/tutorial.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, ChatComponent, TutorialComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'agentic-ai-demo';
  activeTab: 'chat' | 'tutorial' = 'tutorial';

  setActiveTab(tab: 'chat' | 'tutorial') {
    this.activeTab = tab;
  }
}
