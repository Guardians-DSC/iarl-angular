import { Component, OnInit } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CoreService } from '../_services/core/core.service';
import { Router } from '@angular/router';
import { AuthService } from '../_services/auth.service';


@Component({
  selector: 'app-deskboard',
  templateUrl: './deskboard.component.html',
  styleUrls: ['./deskboard.component.css']
})


export class DeskboardComponent implements OnInit {

  private servers;
  private sidenavOpened = true;

  constructor(private _core: CoreService, private _router: Router, private _auth: AuthService) { }

  ngOnInit() {
    this.getServers();
  }

  private toggleSidenav(): void {
    this.sidenavOpened = !this.sidenavOpened;
  }

  private goToLCC(name: string): void {
    this._router.navigate([name]);
  }

  private logout() {
    this._auth.revokeSession();
    this._router.navigate(['login']);
  }

  private getServers(): void {
    this._core.listServers().subscribe(res => {
      this.servers = res.json().servers;
    });
  }

}
