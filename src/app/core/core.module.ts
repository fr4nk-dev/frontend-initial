import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';

@NgModule({
  declarations: [MainLayoutComponent, AuthLayoutComponent, AdminLayoutComponent],
  imports: [CommonModule, RouterModule, BrowserModule, BrowserAnimationsModule],
})
export class CoreModule {}
