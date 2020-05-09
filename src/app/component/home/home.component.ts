import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    constructor() { }
    html_string = `<h1><u>My name is sachin duhan</u></h1><p>&nbsp;and my name is sc<u><a href="http://sachin-duhan.s3.ap-south-1.amazonaws.com/p1.jpg" target="_top"><img alt="Image" class="img-fluid" src="http://sachin-duhan.s3.ap-south-1.amazonaws.com/p1.jpg" style="float:right; height:332px; width:340px" /></a></u></p>`;
    ngOnInit() {
    }

}
