import { Component, OnInit } from '@angular/core';
import { DataService } from '../_services/data.service';
import { Router } from '@angular/router';
import File from '../_models/file.module';

@Component({
  selector: 'app-file-manager',
  templateUrl: './file-manager.component.html',
  styleUrls: ['./file-manager.component.css']
})
export class FileManagerComponent implements OnInit {
  files: File[];
  regex = /^\.[\w\W]{2,}$/;

  constructor(private dataService: DataService,
              private router: Router) { }

  ngOnInit() {
    this.getFiles('');
  }


  private getFiles(path: string) {
    this.dataService.getFiles(path).subscribe(res => {
      this.files = res['items'];
      this.order();
    }, error2 => {
      this.router.navigateByUrl('/login');
    });
  }

  order() {
    this.files.sort(function (file1, file2) {
      if (file1.isFile && !file2.isFile) {
        return 1;

      } else if (!file1.isFile && file2.isFile) {
        return -1;

      } else {
        return 0;
      }
    });

  }

  showFile(file: File) {
    if (!file.isFile) {
      console.log(file.path);
      this.getFiles(file.path);
    } else {
      console.log(file);
    }
  }

  comeBack() {
    // To implemented
  }

  Valid(file: File) {
    return !this.regex.test(file.name);
  }
}
