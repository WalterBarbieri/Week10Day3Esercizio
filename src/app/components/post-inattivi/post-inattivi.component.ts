import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/models/post';
import { PostsServicesService } from 'src/app/services/posts.services.service';

@Component({
  selector: 'app-post-inattivi',
  templateUrl: './post-inattivi.component.html',
  styleUrls: ['./post-inattivi.component.scss']
})
export class PostInattiviComponent implements OnInit {

  posts!: Post[];

  constructor(private postsSrv: PostsServicesService) {

  }

  ngOnInit(): void {
    this.recuperaDati();
}

async recuperaDati() {
    this.posts = await this.postsSrv.getIt();
}

onActivePost(id: number, index: number) {
  this.postsSrv.updatePost({ active: false }, id);
  this.posts.splice(index, 1);
}

}
