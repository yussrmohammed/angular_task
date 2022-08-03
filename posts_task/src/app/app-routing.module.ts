import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostPageComponent } from './posts-list/post-page/post-page.component';
import { PostsListComponent } from './posts-list/posts-list.component';

const routes: Routes = [
  {path:'posts', component:PostsListComponent},
  {path:'', redirectTo:'posts',pathMatch:'full'},
  {path:'posts/:id',component:PostPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
