import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-equipos',
  templateUrl: './equipos.component.html',
  styles: []
})
export class EquiposComponent implements OnInit {
  pageTitle="Equipos"
  pageDescription="Lista de equipos"

  constructor() { }

  ngOnInit(): void {
  }

}
