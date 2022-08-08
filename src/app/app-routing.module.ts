import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CloudPageComponent } from './components/cloud-page/cloud-page.component';
import { NicknamePageComponent } from './components/nickname-page/nickname-page.component';
import { ResultPageComponent } from './components/result-page/result-page.component';


const routes: Routes = [
  { path: '', redirectTo: '/nickname', pathMatch: 'full' },
  { path: 'nickname', component: NicknamePageComponent },
  { path: 'game', component: CloudPageComponent },
  { path: 'result', component: ResultPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
