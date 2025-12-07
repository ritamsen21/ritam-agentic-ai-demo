import { Component, ElementRef, ViewChild, AfterViewChecked } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AgentService, AgentStep } from '../../services/agent.service';
import { Nl2brPipe } from '../../pipes/nl2br.pipe';

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [CommonModule, FormsModule, Nl2brPipe],
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements AfterViewChecked {
  @ViewChild('scrollContainer') private scrollContainer!: ElementRef;
  
  userInput: string = '';
  messages: AgentStep[] = [];
  isProcessing: boolean = false;

  constructor(private agentService: AgentService) {}

  ngAfterViewChecked() {
    this.scrollToBottom();
  }

  scrollToBottom(): void {
    try {
      this.scrollContainer.nativeElement.scrollTop = this.scrollContainer.nativeElement.scrollHeight;
    } catch(err) { }
  }

  sendMessage() {
    if (!this.userInput.trim() || this.isProcessing) return;

    const userMsg = this.userInput;
    this.userInput = '';
    this.isProcessing = true;
    
    this.messages.push({
      type: 'user',
      content: userMsg,
      timestamp: new Date()
    });

    this.agentService.processRequest(userMsg).subscribe({
      next: (step) => {
        this.messages.push(step);
      },
      complete: () => {
        this.isProcessing = false;
      }
    });
  }
}
