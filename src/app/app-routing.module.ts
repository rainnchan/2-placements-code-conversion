import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LetterConversionComponent } from './letter-conversion/letter-conversion.component';

const routes: Routes = [
  {path: '',redirectTo:'conver',pathMatch:'full'},
  {path: 'conver',component:LetterConversionComponent},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
