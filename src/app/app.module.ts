import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { PostListComponent } from './post-list/post-list.component';
import { PostDetailsComponent } from './post-details/post-details.component';
import { PostCardComponent } from './post-card/post-card.component';
import { PostFormComponent } from './post-form/post-form.component';
import { BookmarkListComponent } from './bookmark-list/bookmark-list.component';
import { PostService } from './post-service/post.service';

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        PostListComponent,
        PostDetailsComponent,
        PostCardComponent,
        PostFormComponent,
        BookmarkListComponent
    ],
    imports: [
        BrowserModule,
        HttpModule,
        FormsModule,
        RouterModule.forRoot([
            {
                path: '',
                redirectTo: 'posts',
                pathMatch: 'full'
            },
            {
                path: 'posts',
                component: PostListComponent
            },
            {
                path: 'posts/create',
                component: PostFormComponent
            },
            {
                path: 'posts/:postId',
                component: PostDetailsComponent
            },
                        {
                path:'posts/:postId/update',
                component: PostFormComponent
            },
            {
                path: 'bookmarks',
                component: BookmarkListComponent
            }
        ])
    ],
    providers: [PostService],
    bootstrap: [AppComponent]
})
export class AppModule { }