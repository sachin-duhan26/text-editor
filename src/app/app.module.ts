import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CKEditorModule } from "ng2-ckeditor";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { EditorComponent } from './component/editor/editor.component';
import { HomeComponent } from './component/home/home.component';

@NgModule({
    declarations: [
        AppComponent,
        EditorComponent,
        HomeComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        CKEditorModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
