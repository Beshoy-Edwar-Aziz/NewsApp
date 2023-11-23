import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { EntertainmentComponent } from './components/entertainment/entertainment.component';
import { ArticleComponent } from './components/article/article.component';
import { LoadingComponent } from './components/loading/loading.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SearchComponent } from './components/search/search.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FinanceComponent } from './components/finance/finance.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    EntertainmentComponent,
    ArticleComponent,
    LoadingComponent,
    SearchComponent,
    FinanceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
