import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, ContentChild, DoCheck, ElementRef, Input, OnChanges, OnDestroy, OnInit, SimpleChanges, ViewChild } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnChanges, OnInit, DoCheck, 
AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {


  @Input() userName = '';
  @ViewChild('wrapper') wrapper !: ElementRef;
  @ContentChild('contentWrapper') content !: ElementRef;

  ngOnChanges(changes: SimpleChanges): void {
    console.log("ngOnChange Child component triggered:", changes);
    if (!changes['userName'].isFirstChange()) {
      if (changes['userName'].currentValue === 'Nguyễn') {
        this.userName = 'Xin chào, ' + this.userName;
      } else {
        this.userName = changes['userName'].previousValue;
      }
    }
  }

  ngOnInit(): void {
    console.log('OnInit of Child Component');
  }

  ngDoCheck(): void {
    console.log('DoCheck of Child Component');
  }

  ngAfterContentInit(): void {
    console.log('ngAfterContentInit - wrapper', this.wrapper);
    console.log('ngAfterContentInit - contentWrapper', this.content);
  }

  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked of Child Component');
  }
  
  ngAfterViewInit(): void {
    console.log('ngAfterViewInit of Child Component', this.wrapper);
  }

  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked of Child Component');
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy of Child Component');
  }
}
