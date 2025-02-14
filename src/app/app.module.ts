import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { todoReducer } from './store/todo.reducer';
import { TodoComponent } from './todo/todo.component';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from './environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({todos: todoReducer }),
    StoreDevtoolsModule.instrument({maxAge: 25, logOnly: environment.production})

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
