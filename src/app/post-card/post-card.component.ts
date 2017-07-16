import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

import { Post } from '../post-service/post';

@Component({
    selector: 'post-card',
    templateUrl: 'post-card.component.html',
    styleUrls: ['post-card.component.css']
})
export class PostCardComponent {
    @Input() 
    private post: Post;
    @Output()
    private postDeleted = new EventEmitter();

      deletePost() {
          this.postDeleted.emit(this.post);
      }

}