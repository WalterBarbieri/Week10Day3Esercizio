import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/models/post';
import { PostsServicesService } from 'src/app/services/posts.services.service';

@Component({
  selector: 'app-post-attivi',
  templateUrl: './post-attivi.component.html',
  styleUrls: ['./post-attivi.component.scss']
})
export class PostAttiviComponent implements OnInit {

  posts!: Post[];

  constructor(private postsSrv: PostsServicesService) {

  }

  ngOnInit(): void {
    this.recuperaDati();
}

async recuperaDati() {
    this.posts = await this.postsSrv.getIt();
}

onInactivePost(id: number, index: number) {
  this.postsSrv.updatePost({ active: false }, id);
  this.posts.splice(index, 1);
}
}
