import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lineaModulo1',
  templateUrl: './lineaModulo1.component.html',
  styleUrls: ['./lineaModulo1.component.css']
})
export class LineaModulo1Component implements OnInit {

  myScriptElement: HTMLScriptElement;

  constructor() { 

    this.myScriptElement = document.createElement("script");
    this.myScriptElement.src = "src/app/lineaModulo1/lineaModulo1.component.js";
    document.body.appendChild(this.myScriptElement);

  }

  ngOnInit() {
  }

}
