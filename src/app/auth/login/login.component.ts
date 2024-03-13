import { RouterModule } from '@angular/router';
import { Component } from '@angular/core';
import {MatFormFieldModule}  from '@angular/material/form-field'
import {MatButtonModule}  from '@angular/material/button'
import {MatInputModule}  from '@angular/material/input'
import {MatCardModule}  from '@angular/material/card'

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterModule,MatFormFieldModule,MatButtonModule,MatInputModule,MatCardModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
onAction1: any;

}
