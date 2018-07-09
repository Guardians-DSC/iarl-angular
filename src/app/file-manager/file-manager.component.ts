import { Component, OnInit } from '@angular/core';
import {DataService} from '../_services/data.service';
import {computeStyle} from '@angular/animations/browser/src/util';
import {Router} from '@angular/router';
import {interpolate} from '@angular/core/src/view';

@Component({
  selector: 'app-file-manager',
  templateUrl: './file-manager.component.html',
  styleUrls: ['./file-manager.component.css']
})
export class FileManagerComponent implements OnInit {
  msg: string;
  objs: any;
  constructor(private dataService: DataService,
              private router: Router) { }

  ngOnInit() {
    this.dataService.getFiles().subscribe( res => {
      this.objs = res;
    }, error2 => {
      this.router.navigateByUrl('/login');
    });
  }


  /*exibirArquivos() {
    console.log('show');

  }*/
}
// this.msg = JSON.stringify(res);
