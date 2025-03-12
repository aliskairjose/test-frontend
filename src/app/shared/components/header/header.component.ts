import { Component, input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  standalone: false
})

export class HeaderComponent  implements OnInit {
  title = input.required<string>()
  constructor() { }

  ngOnInit() {}

}
