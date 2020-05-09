
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-editor',
    templateUrl: './editor.component.html',
    styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit {

    name = 'ng2-ckeditor';
    ckeConfig: any;
    mycontent: string;
    show_preview_only: Boolean = false;
    constructor() { }
    contentdata = new Content();

    ngOnInit() {
        this.ckeConfig = {
            allowedContent: false,
            extraPlugins: 'divarea',
            forcePasteAsPlainText: true
        };
    }
    onSubmit() {
        console.log(this.contentdata);
    }
    toggle_full_preview_mode() { this.show_preview_only = !this.show_preview_only; }
}

class Content {
    Id: number;
    Title: string;
    Content: string;
}