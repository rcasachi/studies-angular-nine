import { environment } from './../environments/environment.prod';
import { AngularFireDatabase, AngularFireDatabaseModule } from 'angularfire2/database';
import { CoreModule } from './core/core.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

import { UserService } from './services/user/user.service';

import { TransformDirective } from './transform.directive';

import { SafePipe } from './pipes/safe/safe.pipe';

import { AppComponent } from './app.component';
import { UserComponent } from './components/users/user/user.component';
import { ChatComponent } from './components/chat/chat.component';
import { UsersComponent } from './components/users/users.component';
import { StringInterpolationComponent } from './components/bindings/string-interpolation/string-interpolation.component';
import { PropertyBindingComponent } from './components/bindings/property-binding/property-binding.component';
import { EventBindingComponent } from './components/bindings/event-binding/event-binding.component';
import { HelloComponent } from './components/hello/hello.component';
import { CounterActionsComponent } from './components/counter-actions/counter-actions.component';
import { AttributeBindingComponent } from './components/attribute-binding/attribute-binding.component';
import { ClassBindingComponent } from './components/class-binding/class-binding.component';
import { StyleBindingComponent } from './components/style-binding/style-binding.component';
import { MessageComponent } from './components/message/message.component';
import { MessageListComponent } from './components/message-list/message-list.component';
import { AlertListComponent } from './components/alert-list/alert-list.component';
import { AlertComponent } from './components/alert/alert.component';
import { ParentComponent } from './components/parent/parent.component';
import { ChildComponent } from './components/child/child.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { BlogComponent } from './pages/blog/blog.component';
import { HeaderComponent } from './components/header/header.component';
import { PeopleComponent } from './components/people/people.component';
import { PeopleDetailsComponent } from './components/people-details/people-details.component';
import { PersonComponent } from './components/person/person.component';
import { PlaceholderComponent } from './components/placeholder/placeholder.component';
import { ParentOneComponent } from './components/parent-one/parent-one.component';
import { OneComponent } from './components/one/one.component';
import { TwoComponent } from './components/two/two.component';
import { BuiltInStructureDirectiveComponent } from './components/built-in-structure-directive/built-in-structure-directive.component';
import { BuiltInAttributeDirectiveComponent } from './components/built-in-attribute-directive/built-in-attribute-directive.component';
import { ChangeCaseDirective } from './directives/changeCase/change-case.directive';
import { DirectiveHostComponent } from './components/directive-host/directive-host.component';
import { UnlessDirective } from './directives/unless/unless.directive';
import { PipesHostComponent } from './components/pipes-host/pipes-host.component';
import { AppendorPipe } from './pipes/appendor.pipe';
import { FilterPipe } from './pipes/filter.pipe';
import { DecoratorHostComponent } from './components/decorator-host/decorator-host.component';
import { NewUserComponent } from './components/new-user/new-user.component';
import { NewUserReactiveComponent } from './components/new-user-reactive/new-user-reactive.component';
import { AngularFireModule } from 'angularfire2';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    TransformDirective,
    SafePipe,
    ChatComponent,
    UsersComponent,
    UserComponent,
    StringInterpolationComponent,
    PropertyBindingComponent,
    EventBindingComponent,
    HelloComponent,
    CounterActionsComponent,
    AttributeBindingComponent,
    ClassBindingComponent,
    StyleBindingComponent,
    MessageComponent,
    MessageListComponent,
    AlertListComponent,
    AlertComponent,
    ParentComponent,
    ChildComponent,
    HomeComponent,
    AboutComponent,
    BlogComponent,
    HeaderComponent,
    PeopleComponent,
    PeopleDetailsComponent,
    PersonComponent,
    PlaceholderComponent,
    ParentOneComponent,
    OneComponent,
    TwoComponent,
    BuiltInStructureDirectiveComponent,
    BuiltInAttributeDirectiveComponent,
    ChangeCaseDirective,
    DirectiveHostComponent,
    UnlessDirective,
    PipesHostComponent,
    AppendorPipe,
    FilterPipe,
    DecoratorHostComponent,
    NewUserComponent,
    NewUserReactiveComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    CommonModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
  ],
  providers: [ UserService, AngularFireDatabase ],
  bootstrap: [AppComponent]
})
export class AppModule { }
