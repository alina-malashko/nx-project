import { Component, Input, OnInit } from '@angular/core';
import { greetings } from '@org/utils';

@Component({
  selector: 'org-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Input() user!: string
  greeting!: string
  ngOnInit(): void {
    this.greeting = greetings(this.user)
  }
}
