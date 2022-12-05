import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//import { UserComponent } from './User/user.component';
import { DatatypesComponent } from './datatypes/datatypes.component';
import { DirectivesComponent } from './directives/directives.component';
import { UserComponent } from './components/user/user.component';
import { UsersComponent } from './components/users/users.component';
import { NgswitchdemoComponent } from './components/ngswitchdemo/ngswitchdemo.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DatabindingdemoComponent } from './components/databindingdemo/databindingdemo.component';
import { NgstyleComponent } from './components/ngstyle/ngstyle.component';
import { NgClassdemoComponent } from './components/ng-classdemo/ng-classdemo.component';
import { ProductscrudComponent } from './components/productscrud/productscrud.component';

import { TodosComponent } from './components/todos/todos.component';
import { TodoService } from './services/todo.service';
import{ HttpClientModule} from '@angular/common/http';
import { TemplateFormComponent } from './components/template-form/template-form.component';



@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    DatatypesComponent,
    DirectivesComponent,
    UsersComponent,
    NgswitchdemoComponent,
    DatabindingdemoComponent,
    NgstyleComponent,
    NgClassdemoComponent,
    ProductscrudComponent,
    TodosComponent,
    TemplateFormComponent,
    
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [TodoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
