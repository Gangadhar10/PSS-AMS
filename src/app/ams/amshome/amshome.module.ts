import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AmshomeComponent } from './amshome.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DataTableModule, PaginatorModule, DropdownModule, CalendarModule, ButtonModule, DialogModule } from 'primeng/primeng';

@NgModule({
    imports: [CommonModule,BrowserModule,FormsModule,
        DataTableModule,
        DropdownModule,
        BrowserAnimationsModule,
        CalendarModule,
        ButtonModule,
        DialogModule],
    declarations: [AmshomeComponent],
    exports: [AmshomeComponent]
})

export class AmshomeModule { }