import { Routes, RouterModule } from "@angular/router";
import { HomePage } from './home.page';
import { NgModule } from '@angular/core';

const routes: Routes = [
    {
        path: 'tabs',
        component: HomePage,
        children: [
            {
                path: 'discover',
                children: [
                    {
                        path: '',
                        loadChildren: './discover/discover.module#DiscoverPageModule'
                    },
                    {
                        path: ':discoverId',
                        loadChildren: './discover/home-detail/home-detail.module#HomeDetailPageModule'
                    },
                    {
                        path: 'review',
                        children:[
                            {
                                path: '',
                                loadChildren: './discover/discover.module#DiscoverPageModule'
                            },
                            {
                                path: ':reviewId',
                                loadChildren: './discover/review-detail/review-detail.module#ReviewDetailPageModule'
                            }
                        ]
                    }
                ]
            },
            {
                path: 'favourites',
                children: [
                    {
                        path: '',
                        loadChildren: './favourites/favourites.module#FavouritesPageModule'
                    }
                ]
            },
            {
                path: 'account',
                children: [
                    {
                        path: '',
                        loadChildren: './account/account.module#AccountPageModule'
                    }
                ]
            },
            {
                path: '',
                redirectTo: '/home/tabs/discover',
                pathMatch: 'full'
            }
        ]
    },
    {
        path: '',
        redirectTo: '/home/tabs/discover',
        pathMatch: 'full'
    },
  { path: 'review-detail', loadChildren: './discover/review-detail/review-detail.module#ReviewDetailPageModule' }

];



@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class HomeRoutingModule {}