import { OnInit, Component, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})

// criando classe para este componente + implementando método OnInit
export class NavBarComponent implements OnInit {
  
  // para enviar dados do elemento filho p/ pai (decorator @Output())
  @Output() menuToogle: EventEmitter<boolean> = new EventEmitter();

  @Input() opened = false;

  constructor() {
  }
  
  ngOnInit(): void {
  }

  toogle() {
    this.opened = !this.opened;
    this.menuToogle.emit(this.opened);
  }
}
