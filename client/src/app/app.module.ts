import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AppRoutingModule } from './app-routing.module';
import { LayoutModule } from './components/layout/layout.module';
import { PublicPagesModule } from './components/public/public.module';
import { HttpClientModule } from '@angular/common/http';
import { ProgressBarComponent } from './components/progress-bar/progress-bar.component';
import { DataTableModule } from './components/datatable/datatable.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsComponent } from './components/forms/forms.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ProgressBarComponent,
    FormsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    LayoutModule,
    PublicPagesModule,
    AppRoutingModule,
    HttpClientModule,
    DataTableModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
