import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {MatCardModule, MatDividerModule, MatIconModule, MatListModule, MatTabsModule, MatToolbarModule} from '@angular/material';
import {FlexLayoutModule} from '@angular/flex-layout';
import {GrailLayoutComponent} from './grailLayout/grailLayout.component';
import {ToolbarComponent} from './toolbar/toolbar.component';
import {HomeComponent} from './home/home.component';
import {FirstdayComponent} from './firstday/firstday.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {GalleryComponent} from './gallery/gallery.component';
import {ContactUsComponent} from './contact-us/contact-us.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    GrailLayoutComponent,
    ToolbarComponent,
    HomeComponent,
    FirstdayComponent,
    GalleryComponent,
    ContactUsComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    MatCardModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatDividerModule,
    MatCardModule,
    MatListModule,
    MatIconModule,
    MatTabsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
