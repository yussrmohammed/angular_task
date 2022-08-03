import { Component, OnInit } from '@angular/core';
import { PostsService } from '../service/posts.service';
@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.css']
})
export class PostsListComponent implements OnInit {
posts:any
  constructor( private postsservice:PostsService) {
    this.postsservice.getPosts().subscribe((data)=>{
      this.posts=data
      console.log(data)
    })
   }

  ngOnInit(): void {
  }
  readmore(id:number){
    console.log(id)
  }

}
