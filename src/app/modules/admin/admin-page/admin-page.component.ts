import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../../../lib';
@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css']
})
export class AdminPageComponent implements OnInit {
  public admin: Admin = { nickname: '', phone: '', password: '' };
  logout() {
    this.config.admin.logout();
  }
  constructor(public config: ConfigService) {
    if (!this.config.admin.admin) {
      this.config.router.navigateByUrl('/admin/signin')
    } else {

      this.admin = this.config.admin.admin

    }

  }

  ngOnInit() {
  }

}
