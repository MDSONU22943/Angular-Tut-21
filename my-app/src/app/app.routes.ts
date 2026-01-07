import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { About } from './pages/about/about';
import { Profile } from './pages/profile/profile';
import { Login } from './pages/login/login';
import { PageNotFound } from './pages/page-not-found/page-not-found';
import { Users } from './pages/users/users';
import { UserDetails } from './pages/user-details/user-details';

export const routes: Routes = [
    {path:"", component: Home },
    {path:"about/:name/:age", component:About},
    {path:"about/:name", component:About},
    {path:"profile", component:Profile},
    {path:"login", component:Login},
    {path:"users", component:Users},
    {path:"user-details/:id", component:UserDetails},
    {path:"**",component:PageNotFound}
    // {path:"**", redirectTo:""}
];
