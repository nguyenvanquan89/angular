import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit{
  isChildDestroyed = false;
  userName = 'Quân';
  updateUser() {
    this.userName = 'Nguyễn'
  }

  ngOnInit(): void {
    console.log('OnInit in parent component');
  }
  destroy() {
    this.isChildDestroyed = true;
  }
}
