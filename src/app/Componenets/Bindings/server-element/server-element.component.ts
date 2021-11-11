import {
  AfterContentChecked,
  AfterContentInit,
  Component, ContentChild,
  DoCheck, ElementRef,
  Input,
  OnChanges, OnDestroy,
  OnInit,
  SimpleChanges, ViewChild,
  ViewEncapsulation
} from '@angular/core';
import {ServerElement} from "../cockpit/serverElement";

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class ServerElementComponent implements OnInit,
  OnChanges, DoCheck, AfterContentInit, AfterContentChecked, OnDestroy {
  @Input("srvElement") element: ServerElement;
  @ViewChild('heading') header: ElementRef;
  @ContentChild('contentParagraph') paragraph: ElementRef;

  constructor() {
    console.log("Constructor Called")
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log("onChange Called", changes)
  }

  ngOnInit(): void {
    console.log("Init Called");
    //console.log("Paragraph ", this.paragraph.nativeElement.textContent)
  }

  ngDoCheck(): void {

  }

  ngAfterContentInit(): void {
    console.log("ngAfterContentInit Called")
  }

  ngAfterContentChecked(): void {
    console.log("ngAfterContentChecked Called")
  }

  ngOnDestroy(): void {
    console.log("Destroyed")
  }

}
