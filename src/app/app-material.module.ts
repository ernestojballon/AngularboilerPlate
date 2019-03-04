import { NgModule } from '@angular/core';
import {MatDialogModule, MatDialogRef} from '@angular/material/dialog';


import {MatButtonModule} from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';

const matModules = [
  
  MatDialogModule,
  MatButtonModule,
  MatCheckboxModule,
  MatIconModule,
  MatToolbarModule,
  MatInputModule,
  MatCardModule,


];

@NgModule({
  imports: [matModules],
  exports: [matModules],
  providers: [{provide: MatDialogRef, useValue: {}}]
})
export class AppMaterialModule { }
