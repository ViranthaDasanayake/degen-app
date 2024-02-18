import { Component, Input } from '@angular/core';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrl: './main.component.css',
  providers: [MessageService],
})
export class MainComponent {
  @Input('appCopyToClipboard') text?: string;
  constructor(private messageService: MessageService) {}

  ngOnInit() {}
  navigate(link: any) {
    window.open(link, '_blank');
  }

  onCopy(code: string) {
    const el = document.createElement('textarea');
    el.value = code;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
    this.messageService.add({
      severity: 'success',
      summary: '',
      detail: 'Copied to clipboard',
    });
  }
}
