import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AutosizeModule} from'@techiediaries/ngx-textarea-autosize';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AutosizeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
