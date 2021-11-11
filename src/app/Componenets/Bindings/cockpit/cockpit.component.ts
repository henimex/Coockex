import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {ServerElement} from "./serverElement";

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  //newServerName = '';
  //newServerContent = '';
  @Output() serverCreated = new EventEmitter<{ serverName: string, serverContent: string }>();
  @Output() blueprintCreated = new EventEmitter<{ serverName: string, serverContent: string }>();
  @ViewChild('serverContentInput') serverContent: ElementRef;

  constructor() {
  }

  ngOnInit(): void {
  }

  onAddServer(nameInput: HTMLInputElement) {
    console.log(this.serverContent)
    this.serverCreated.emit({serverName: nameInput.value, serverContent: this.serverContent.nativeElement.value});
    // this.serverElements.push({
    //   type:'Server',
    //   name: this.newServerName,
    //   content:this.newServerContent
    // });
  }

  onAddBlueprint(nameInput: HTMLInputElement) {
    this.blueprintCreated.emit({serverName: nameInput.value, serverContent: this.serverContent.nativeElement.value});
    // this.serverElements.push({
    //   type:'Blueprint',
    //   name: this.newServerName,
    //   content:this.newServerContent
    // });
  }
}

