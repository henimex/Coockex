import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ServerElement} from "./serverElement";

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  newServerName = '';
  newServerContent = '';
  @Output() serverCreated = new EventEmitter<{ serverName: string, serverContent: string }>();
  @Output() blueprintCreated = new EventEmitter<{ serverName: string, serverContent: string }>();

  constructor() {
  }

  ngOnInit(): void {
  }

  onAddServer() {
    this.serverCreated.emit({serverName: this.newServerName, serverContent: this.newServerContent});
    // this.serverElements.push({
    //   type:'Server',
    //   name: this.newServerName,
    //   content:this.newServerContent
    // });
  }

  onAddBlueprint() {
    this.blueprintCreated.emit({serverName: this.newServerName, serverContent: this.newServerContent});
    // this.serverElements.push({
    //   type:'Blueprint',
    //   name: this.newServerName,
    //   content:this.newServerContent
    // });
  }
}

