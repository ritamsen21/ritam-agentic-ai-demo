import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Task {
  id: number;
  description: string;
  status: 'pending' | 'in-progress' | 'completed';
  priority: 'low' | 'medium' | 'high';
  createdAt: Date;
}

interface AgentAction {
  timestamp: Date;
  action: string;
  task?: Task;
}

@Component({
  selector: 'app-root',
  imports: [CommonModule, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Task Planning Agent');
  protected tasks = signal<Task[]>([]);
  protected agentActions = signal<AgentAction[]>([]);
  protected newTaskDescription = signal('');
  protected isAgentThinking = signal(false);
  
  private taskIdCounter = 1;

  addTask() {
    const description = this.newTaskDescription();
    if (!description.trim()) return;

    this.isAgentThinking.set(true);
    
    // Simulate agent analyzing the task
    setTimeout(() => {
      const priority = this.determineTaskPriority(description);
      const newTask: Task = {
        id: this.taskIdCounter++,
        description: description.trim(),
        status: 'pending',
        priority,
        createdAt: new Date()
      };

      this.tasks.update(tasks => [...tasks, newTask]);
      this.agentActions.update(actions => [
        ...actions,
        {
          timestamp: new Date(),
          action: `Analyzed and created task with ${priority} priority`,
          task: newTask
        }
      ]);
      
      this.newTaskDescription.set('');
      this.isAgentThinking.set(false);
      
      // Agent automatically starts high priority tasks
      if (priority === 'high') {
        setTimeout(() => this.startTask(newTask.id), 500);
      }
    }, 800);
  }

  private determineTaskPriority(description: string): 'low' | 'medium' | 'high' {
    const lowerDesc = description.toLowerCase();
    if (lowerDesc.includes('urgent') || lowerDesc.includes('asap') || lowerDesc.includes('critical')) {
      return 'high';
    } else if (lowerDesc.includes('important') || lowerDesc.includes('soon')) {
      return 'medium';
    }
    return 'low';
  }

  startTask(taskId: number) {
    this.tasks.update(tasks => 
      tasks.map(t => t.id === taskId ? { ...t, status: 'in-progress' } : t)
    );
    
    const task = this.tasks().find(t => t.id === taskId);
    if (task) {
      this.agentActions.update(actions => [
        ...actions,
        {
          timestamp: new Date(),
          action: `Started working on task`,
          task
        }
      ]);

      // Simulate task completion after some time
      const completionTime = task.priority === 'high' ? 2000 : task.priority === 'medium' ? 3000 : 4000;
      setTimeout(() => this.completeTask(taskId), completionTime);
    }
  }

  completeTask(taskId: number) {
    this.tasks.update(tasks => 
      tasks.map(t => t.id === taskId ? { ...t, status: 'completed' } : t)
    );
    
    const task = this.tasks().find(t => t.id === taskId);
    if (task) {
      this.agentActions.update(actions => [
        ...actions,
        {
          timestamp: new Date(),
          action: `Completed task successfully`,
          task
        }
      ]);
    }
  }

  deleteTask(taskId: number) {
    const task = this.tasks().find(t => t.id === taskId);
    this.tasks.update(tasks => tasks.filter(t => t.id !== taskId));
    
    if (task) {
      this.agentActions.update(actions => [
        ...actions,
        {
          timestamp: new Date(),
          action: `Removed task from queue`,
          task
        }
      ]);
    }
  }

  getStatusColor(status: string): string {
    switch(status) {
      case 'pending': return '#fbbf24';
      case 'in-progress': return '#3b82f6';
      case 'completed': return '#10b981';
      default: return '#6b7280';
    }
  }

  getPriorityColor(priority: string): string {
    switch(priority) {
      case 'high': return '#ef4444';
      case 'medium': return '#f59e0b';
      case 'low': return '#6b7280';
      default: return '#6b7280';
    }
  }
}
