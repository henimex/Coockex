import {Component, OnInit} from '@angular/core';
import {ServerElement} from "../cockpit/serverElement";

@Component({
  selector: 'app-showcase',
  templateUrl: './showcase.component.html',
  styleUrls: ['./showcase.component.css']
})
export class ShowcaseComponent implements OnInit {

  serverElements: ServerElement[];

  constructor() {
  }

  ngOnInit(): void {
    this.setServers();
  }

  setServers() {
    this.serverElements = [
      {type: 'server', name: 'Test Server', content: 'Testing Content'},
      {type: 'blueprint', name: 'Test2 Server2', content: 'Testing2 Content2'}
    ]
  }

  onServerAdded(serverData: { serverName: string, serverContent: string }) {
    this.serverElements.push({
      type: 'server',
      name: serverData.serverName,
      content: serverData.serverContent
    });
  }

  onBlueprintAdded(blueprintData: { serverName: string, serverContent: string }) {
    this.serverElements.push({
      type: 'blueprint',
      name: blueprintData.serverName,
      content: blueprintData.serverContent
    });
  }

}
