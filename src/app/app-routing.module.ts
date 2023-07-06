import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LetterConversionComponent } from './letter-conversion/letter-conversion.component';
import { TranslationComponent } from './translation/translation.component';

const routes: Routes = [
  {path: '',redirectTo:'conver',pathMatch:'full'},
  {path: 'conver',component:LetterConversionComponent},
  {path: 'translation',component:TranslationComponent}, 
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
