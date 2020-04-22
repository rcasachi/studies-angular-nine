import { UserService } from 'src/app/services/user/user.service';
import { FormsModule } from '@angular/forms';
import { environment } from './../../../environments/environment.prod';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';
import { MatListModule } from '@angular/material/list';

import { InternalAppComponent } from './internal-app.component';
import { InternalHeaderComponent } from './internal-header/internal-header.component';
import { NewUserComponent } from './new-user/new-user.component';

const routes: Routes = [
  {
    path: 'home',
    component: InternalAppComponent,
    pathMatch: 'full'
  },
  {
    path: 'new-user',
    component: NewUserComponent,
    pathMatch: 'full'
  },
  {
    path: 'new-user/:key',
    component: NewUserComponent,
    pathMatch: 'full'
  },
  {
    path: '',
    redirectTo: '/internal/home'
  }
];

@NgModule({
  declarations: [InternalAppComponent, InternalHeaderComponent, NewUserComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    MatListModule,
    MatIconModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    FormsModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule],
  providers: [ UserService, AngularFireDatabase ]
})
export class InternalAppModule { }
