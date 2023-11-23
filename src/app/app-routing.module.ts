import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ArticleComponent } from './components/article/article.component';
import { EntertainmentComponent } from './components/entertainment/entertainment.component';
import { SearchComponent } from './components/search/search.component';
import { FinanceComponent } from './components/finance/finance.component';

const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'home',component:HomeComponent,title:'Home', data:{animation:'Home'}},
  {path:'article', component:ArticleComponent,title:'Article', data:{animation:'Article'}},
  {path:'entertainment',component:EntertainmentComponent,title:'Entertainment News' ,data:{animation:'entertainment'}},
  {path:'search',component:SearchComponent,title:'Search' ,data:{animation:'search'}},
  {path:'finance',component:FinanceComponent,title:'Finance' ,data:{animation:'finance'}},
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
