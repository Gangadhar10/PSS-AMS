// import { Routes, RouterModule } from '@angular/router'; 

// import { AppComponent } from './app.component';
// import { amsComponent } from './ams/ams.component';
// import { LoginComponent } from './login/login.component';
// // import { PageNotFoundComponent }    from './not-found.component';


// const appRoutes: Routes = [
//     //{ path: '', component: HomeComponent, canActivate: [AuthGuard] },
//     { path: '', 'redirectTo': '/login', 'pathMatch': 'full' },
//     { path: 'login', component: LoginComponent },
//     { path: 'ams', component: amsComponent },
//     // otherwise redirect to home
//     { path: '**', redirectTo: '' }
// ];

// export const routing = RouterModule.forRoot(appRoutes);

import { Routes } from '@angular/router';
import { LoginComponent } from './login/index'
import { AmsRoutes } from './ams/ams.routes';
// import { LoginRoutes } from './login/index';

export const routes: Routes = [
    // ...LoginRoutes,
    ...AmsRoutes,
    { path: '**', component: LoginComponent },
    
];