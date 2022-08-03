import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PostsService } from 'src/app/service/posts.service';

@Component({
  selector: 'app-post-page',
  templateUrl: './post-page.component.html',
  styleUrls: ['./post-page.component.css']
})
export class PostPageComponent implements OnInit {

  constructor(private router:Router,private route:ActivatedRoute, private postsservice:PostsService)  { }
post:any;
pageTitle='post page'
  ngOnInit(): void {
    const id =Number(this.route.snapshot.paramMap.get('id'))
    this.pageTitle+=`: ${id}`
    this.postsservice.getpost(id).subscribe((res)=>{
      this.post=res
      console.log(res)
    })

  
  }
  onBack(){
    this.router.navigate(['/posts'])
  }


}
