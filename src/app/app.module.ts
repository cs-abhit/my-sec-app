import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChildComponent } from './child/child.component';
import { FormsModule } from '@angular/forms';
import { ClidirectiveDirective } from './directives/clidirective.directive';
import { ContentComponent } from './content/content.component';
import { ClassDirective } from './directives/class.directive';
import { StyleDirective } from './directives/style.directive';
import { ForIfDirective } from './directives/for-if.directive';
import { RenderDirective } from './directives/render.directive';
import { HostLiDirective } from './directives/host-li.directive';
@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    ClidirectiveDirective,
    ContentComponent,
    ClassDirective,
    StyleDirective,
    ForIfDirective,
    RenderDirective,
    HostLiDirective,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
