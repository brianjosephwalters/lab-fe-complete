import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { PostListComponent } from './post-list/post-list.component';
import { PostDetailsComponent } from './post-details/post-details.component';

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        PostListComponent,
        PostDetailsComponent
    ],
    imports: [
        BrowserModule,
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
                path: 'posts/:postId',
                component: PostDetailsComponent
            }
        ])
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }