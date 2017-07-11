import { Component } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';

import 'rxjs/add/operator/filter';

@Component({
    selector: 'header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent {

    private router: Router;
    private currentRoute: string;

    constructor(router: Router) {
        this.router = router;
        this.router.events
            .filter(event => event instanceof NavigationStart)
            .subscribe((event: NavigationStart) => {
                if (event.url.indexOf('post') > -1) {
                    this.currentRoute = 'post';
                } else if (event.url.indexOf('bookmark') > -1) {
                    this.currentRoute = 'bookmark';
                } else {
                    this.currentRoute = 'post';
                }
            });
    }

    goToRoute(url: string) {
        this.router.navigate([url]);
    }

}