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
  lastName: string;
  regex = /^\.[\w\W]{2,}$/;
  path: string;
  constructor(private dataService: DataService,
              private router: Router) { }

  ngOnInit() {
    this.getFiles('');
  }


  private getFiles(path: string) {
    this.dataService.getFiles(path).subscribe(res => {
      this.files = res['items'];
      this.path = res['path'];
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
    console.log(file.name)
    console.log(file.isFile)
    console.log(file.path)

    console.log(file)
    if (!file.isFile) {
      if (this.path != "") {
        this.getFiles(this.path + "/" + file.name);
        this.lastName = file.name;
      } else {
        this.getFiles(file.name);
      }
      
    } else {
      console.log(file);
    }
  }

  comeBack() {
    if (this.path != "") {
      const path = this.getLastPath();
      this.path = "";
      this.getFiles(path);
    }
  }

  Valid(file: File) {
    return !this.regex.test(file.name);
  }


  getLastPath() {
    const index = this.path.indexOf(this.lastName);
    return this.path.substring(0, index != -1 ? index : this.path.length);
  }
}
