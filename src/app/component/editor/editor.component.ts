
import { Component, OnInit} from '@angular/core';
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
}

class Content {
    Id: number;
    Title: string;
    Content: string;
}