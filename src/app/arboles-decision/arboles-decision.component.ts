import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-arboles-decision',
  templateUrl: './arboles-decision.component.html',
  styleUrls: ['./arboles-decision.component.css']
})
export class ArbolesDecisionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    var vari= document.getElementById("canvas");
    // var varia= new Chart(vari, {});
  }

}
