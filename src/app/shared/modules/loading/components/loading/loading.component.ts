import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'mc-loading',
  template: '<div>{{loadingText}}</div>'
})
export class LoadingComponent implements OnInit{
  @Input() loadingTextProps: string
  loadingText: string

  ngOnInit(): void {
    this.loadingText = this.loadingTextProps ? this.loadingTextProps : 'Loading...'
  }
}
