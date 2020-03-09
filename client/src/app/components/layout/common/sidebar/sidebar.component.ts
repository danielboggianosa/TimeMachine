import { Component, OnInit, ViewChild } from '@angular/core';
import { LayoutService } from 'src/app/services/layout.service';
import { SubSink } from 'subsink';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: []
})
export class SidebarComponent implements OnInit {
  subs = new SubSink;
  webTitulo='Time Machine';
  webTituloSup="1"
  @ViewChild('accordionSidebar', {static:true}) accordionSidebar;
  // MENU EXAMPLE STRUCTURE DATA
  menuGroups;
  activeSubmenu: string;
  group: any;
  menu: any;

  constructor(private layoutService:LayoutService) { }

  ngOnInit(): void {
    this.subs.sink = this.layoutService.getMenu().subscribe(
      res=>this.menuGroups=res
    )
  }

  toggle(){
    this.accordionSidebar.nativeElement.classList.toggle('toggled');
  }

  toggleSubmenu(g1, m1){
    let g0 = this.group;
    let m0 = this.menu;
    this.accordionSidebar.nativeElement.children['group_'+g1].children['item_'+m1].children['menu_'+m1].children['submenu_'+m1].classList.toggle('show');

    if(m0 && m0!=m1){
        this.accordionSidebar.nativeElement.children['group_'+g0].children['item_'+m0].children['menu_'+m0].children['submenu_'+m0].classList.remove('show');
    }
    this.group = g1;
    this.menu = m1;
  }

}
