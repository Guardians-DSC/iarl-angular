import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';
import {computeStyle} from '@angular/animations/browser/src/util';

@Component({
  selector: 'app-file-manager',
  templateUrl: './file-manager.component.html',
  styleUrls: ['./file-manager.component.css']
})
export class FileManagerComponent implements OnInit {
  msg: string
  constructor(private dataService: DataService) { }

  ngOnInit() {
    console.log('iniciou');
    this.dataService.getFiles().subscribe( res => {
      console.log(res);
    });
  }

}
