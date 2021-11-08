import {Component, Input, OnInit} from '@angular/core';
import {ServerElement} from "../cockpit/serverElement";

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit {
  @Input("srvElement") element: ServerElement;

  constructor() {
  }

  ngOnInit(): void {
  }

}
