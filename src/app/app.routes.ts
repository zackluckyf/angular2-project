import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home';
import { AboutComponent } from './about';
import { NoContentComponent } from './no-content';
import { TabsComponent } from './tabs/tabs.component';
import { Tab1Component } from './tabs/tab1/tab1.component';
import { Tab2Component } from './tabs/tab2/tab2.component';
import { DataResolver } from './app.resolver';


export const ROUTES: Routes = [
  { path: '',      component: HomeComponent },
  { path: 'home',  component: HomeComponent,
    children: [
      { path: '', redirectTo: 'tabs', pathMatch: 'full'},
      { path: 'tabs', component: TabsComponent,
         children: [
           { path: '', component: Tab1Component},
           { path: 'tab1', component: Tab1Component},
           { path: 'tab2', component: Tab2Component}
         ]
      }
    ]
  },
  { path: 'about', component: AboutComponent },
  {
    path: 'detail', loadChildren: () => System.import('./+detail')
      .then((comp: any) => comp.default),
  },
  { path: '**',    component: NoContentComponent },
];
