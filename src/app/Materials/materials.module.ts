import { NgModule } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';

const material = [
  MatInputModule,
  MatButtonModule,
  MatFormFieldModule,
  MatCheckboxModule,
  MatIconModule,
  MatButtonModule,
  MatDialogModule,
];
// Common Module Exports all the basic Angular directives and pipes, such as NgIf, NgForOf, DecimalPipe, and so on.
@NgModule({
  declarations: [],
  // imports: [CommonModule, material],

  //exports makes the listed elements available to other modules.
  //exports changes the private access of modules to public
  exports: [material],
})
export class MaterialsModule {}
