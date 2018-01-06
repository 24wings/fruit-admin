import { NgModule } from '@angular/core';
import { LibModule } from './lib';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { CloudinaryImageComponent } from './common/cloudinary-image/cloudinary-image.component';
import { BrowserModule } from '@angular/platform-browser';
// import { NavComponent } from './common/nav/nav.component';
// import { FruitAdminModule } from './modules/fruit-admin/fruit-admin.module';
// import { AdminModule } from './modules/admin/admin.module';

@NgModule({
  declarations: [
    AppComponent,
    // NavComponent,

    CloudinaryImageComponent
  ],
  imports: [
    LibModule.forRoot(),
    ReactiveFormsModule,
    FormsModule,
    // FruitAdminModule,
    // AdminModule,

    RouterModule.forRoot([
      { path: '', redirectTo: '/admin', pathMatch: 'full', data: { label: 'default' } },

      { path: 'admin', loadChildren: 'app/modules/admin/admin.module#AdminModule', data: { label: '管理员后台' } },
      { path: 'fruit-admin', loadChildren: 'app/modules/fruit-admin/fruit-admin.module#FruitAdminModule', data: { label: '水果订购系统管理后台' } },
    ]),

    CommonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
