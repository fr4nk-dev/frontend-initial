import { MatCardModule } from '@angular/material/card';
import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';

import { MatInputModule } from '@angular/material/input';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    SharedModule,
    HomeRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatSnackBarModule,
  ],
})
export class HomeModule {}
