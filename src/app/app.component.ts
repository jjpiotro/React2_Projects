import { Component} from '@angular/core';

@Component({
    selector: 'my-app',
    template: `
         <h1>{{title}}</h1>
         <nav>
            <a routerLink="/dashboard" routerLinkActive="active">Dashboard</a>
            <a routerLink="/movies" routerLinkActive="active">Movies</a>
        </nav>
         <router-outlet></router-outlet>
    `,
    styleUrls: ['./css/app.component.css']
})

export class AppComponent {
    title = 'Best movies ever';
}