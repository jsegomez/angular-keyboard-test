import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'keyboard-listen-cloudfare';
  public keyPressed: string[] = [];


  listenToKeyboard(event: KeyboardEvent): void{
    this.keyPressed.push(event.key);
  }

}
