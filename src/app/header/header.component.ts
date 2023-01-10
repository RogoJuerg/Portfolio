import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() {  }

  ngOnInit(): void {
  }

  toggleMenu() {
    let menu = document.getElementById('mobileMenu');
    let buttons = document.getElementById('mobileButtons');

    menu?.classList.toggle('openMenu');
    buttons?.classList.toggle('d-none');
  }

}
