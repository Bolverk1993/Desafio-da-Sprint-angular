import { Component } from '@angular/core';
import { SaudacaoComponent } from '../../components/saudacao/saudacao.component';
import { MenuComponent } from '../../components/menu/menu.component';

@Component({
  selector: 'app-home',
  imports: [SaudacaoComponent,MenuComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
