import { Injectable } from '@angular/core';

import { Post } from './post';

@Injectable()
export class PostService {
    private posts: Post[];

    constructor() {
        this.posts = [
            {
                "postId": 1,
                "title": "A first post",
                "summary": "This is the body of our first blog post.",
                "body": "This is the body of our first blog post.",
                "author": "Brian J. Walters",
                "lastUpdated": 1493614800000,
                "createdOn": 1499007681505
            },
            {
                "postId": 2,
                "title": "A second post",
                "summary": " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed accumsan erat nec justo tempor, ut posuere nisl pretium. Morbi rutrum mauris eu turpis convallis iaculis. Nulla varius purus vitae feugiat venenatis. Proin vulputate augue nibh. Pellentesque facilisis elementum neque ut egestas. Nulla et tortor metus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas massa orci, dapibus ut dolor sed, venenatis viverra risus.",
                "body": " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed accumsan erat nec justo tempor, ut posuere nisl pretium. Morbi rutrum mauris eu turpis convallis iaculis. Nulla varius purus vitae feugiat venenatis. Proin vulputate augue nibh. Pellentesque facilisis elementum neque ut egestas. Nulla et tortor metus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas massa orci, dapibus ut dolor sed, venenatis viverra risus.",
                "author": "Brian J. Walters",
                "lastUpdated": 1493701200000,
                "createdOn": 1499007681505
            },
            {
                "postId": 3,
                "title": "A third post",
                "summary": "This is the body of our third blog post.  It has a few more sentences.  But it doesnt have content that is any more interesting.",
                "body": "This is the body of our third blog post.  It has a few more sentences.  But it doesnt have content that is any more interesting.",
                "author": "Brian J. Walters",
                "lastUpdated": 1493701200000,
                "createdOn": 1499007681505
            }
        ];
    }

    getAllPosts(): Post[] {
        return this.posts;
    }

    getPostById(postId: number): Post {
        return this.posts.filter(post => post['postId'] == postId)[0];
    }
}