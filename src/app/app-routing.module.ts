import { NewUserReactiveComponent } from './components/new-user-reactive/new-user-reactive.component';
import { NewUserComponent } from './components/new-user/new-user.component';
import { DecoratorHostComponent } from './components/decorator-host/decorator-host.component';
import { DirectiveHostComponent } from './components/directive-host/directive-host.component';
import { BuiltInAttributeDirectiveComponent } from './components/built-in-attribute-directive/built-in-attribute-directive.component';
import { BuiltInStructureDirectiveComponent } from './components/built-in-structure-directive/built-in-structure-directive.component';
import { ParentOneComponent } from './components/parent-one/parent-one.component';
import { UsersResolveGuard } from './guards/UsersResolve/users-resolve.guard';
import { UserService } from './services/user/user.service';
import { ConfirmationGuard } from './guards/confirmation/confirmation.guard';
import { MessageListComponent } from './components/message-list/message-list.component';
import { AuthGuard } from './guards/auth/auth.guard';
import { PeopleDetailsComponent } from './components/people-details/people-details.component';
import { PlaceholderComponent } from './components/placeholder/placeholder.component';
import { PeopleComponent } from './components/people/people.component';
import { AboutComponent } from './pages/about/about.component';
import { BlogComponent } from './pages/blog/blog.component';
import { HomeComponent } from './pages/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PipesHostComponent } from './components/pipes-host/pipes-host.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'blog', component: BlogComponent, canActivate: [ AuthGuard ] },
  { path: 'about', component: AboutComponent },
  {
    path: 'users',
    component: PeopleComponent,
    pathMatch: 'prefix',
    canActivateChild: [ AuthGuard ],
    resolve: {
      users: UsersResolveGuard
    },
    children: [
      { path: ':id', component: PeopleDetailsComponent },
      { path: '', component: PlaceholderComponent },
    ]
  },
  { path: 'messages', component: MessageListComponent, canDeactivate: [ ConfirmationGuard ] },
  { path: 'new-user', component: NewUserComponent },
  { path: 'new-user-reactive', component: NewUserReactiveComponent },
  { path: 'parent', component: ParentOneComponent },
  { path: 'str-directive', component: BuiltInStructureDirectiveComponent },
  { path: 'attr-directive', component: BuiltInAttributeDirectiveComponent },
  { path: 'directives', component: DirectiveHostComponent },
  { path: 'pipes', component: PipesHostComponent },
  { path: 'decorators', component: DecoratorHostComponent },
  {
    path: 'internal',
    loadChildren: () => import('./components/internal-app/internal-app.module').then(m => m.InternalAppModule),
  },
  { path: '**', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  providers: [ AuthGuard, ConfirmationGuard, UserService, UsersResolveGuard ],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
