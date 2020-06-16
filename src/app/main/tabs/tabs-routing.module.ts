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
        path: 'appointments-tab',
        loadChildren: () => import('../appointments-tab/appointments.module').then(m => m.AppointmentsPageModule)
      },
      {
        path: 'profile-tab',
        loadChildren: () => import('../profile-tab/profile.module').then(m => m.ProfilePageModule)
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
