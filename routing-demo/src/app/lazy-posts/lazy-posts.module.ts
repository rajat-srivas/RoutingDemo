import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LazyPostsRoutingModule } from './lazy-posts-routing.module';
import { PostsComponent } from './posts/posts.component';


@NgModule({
  declarations: [PostsComponent],
  imports: [
    CommonModule,
    LazyPostsRoutingModule
  ]
})
export class LazyPostsModule { }
