import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { NgxDocViewerModule } from 'ngx-doc-viewer';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NetelipbuttonComponent } from './components/netelipbutton/netelipbutton.component';

@NgModule({
  declarations: [
    AppComponent,
    NetelipbuttonComponent
  ],
  imports: [
    BrowserModule,
    PdfViewerModule,
    NgxDocViewerModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
