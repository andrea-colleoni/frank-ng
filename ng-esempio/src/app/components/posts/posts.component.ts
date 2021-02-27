import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from 'src/app/model/post';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts: Observable<Post[]>;
  vediPosts = false;

  constructor(
    private ps: PostsService,
  ) { }

  ngOnInit(): void {
    console.log('prima');
    this.posts = this.ps.posts();
    console.log('dopo');
  }

  toggle() {
    this.vediPosts = !this.vediPosts;
  }

}
