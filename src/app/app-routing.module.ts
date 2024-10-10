import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ActivePostComponent } from './components/active-post/active-post.component';
import { InactivePostComponent } from './components/inactive-post/inactive-post.component';
import { PostDetailComponent } from './components/post-detail/post-detail.component';

const routes: Routes = [
  {
    //path vuoto è la home
    path: '',
    component: HomeComponent,
    //possiamo importare le rotte figlie/sottofiglie
    // children:
    //e sotto forChild in ngModule
  },
  {
    path: 'active-post',
    component: ActivePostComponent,
  },
  {
    path: 'inactive-post',
    component: InactivePostComponent,
  },
  {
    path: 'post-detail/:id',
    component: PostDetailComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
