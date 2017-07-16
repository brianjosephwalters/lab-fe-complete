import { Component } from '@angular/core';

import { Post } from '../post-service/post';

@Component({
    selector: 'post-form',
    templateUrl: 'post-form.component.html',
    styleUrls: ['post-form.component.css']
})
export class PostFormComponent {
    private post: Post;

    constructor() {
        this.post = new Post();
    }
    
}