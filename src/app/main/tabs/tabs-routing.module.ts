import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'home-tab',
        loadChildren: () => import('../home-tab/home.module').then(m => m.HomePageModule)
      },
      {
        path: 'calendar-tab',
        loadChildren: () => import('../calendar-tab/tab2.module').then(m => m.Tab2PageModule)
      },
      {
        path: 'profile-tab',
        loadChildren: () => import('../profile-tab/tab3.module').then(m => m.Tab3PageModule)
      },
      {
        path: 'more',
        loadChildren: () => import('../more-tab/more-tab.module').then(m => m.MoreTabPageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/home-tab',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
