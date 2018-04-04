import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgForm, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login.component';

@NgModule({
    imports: [FormsModule, BrowserModule],
    declarations: [LoginComponent],
    exports: [LoginComponent]
})

export class LoginModule { }