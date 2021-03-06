import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditorComponent } from './editor.component';
import { EditableArticleResolverService } from './editable-article-resolver.service';
import { AuthGuard } from '../auth/auth.guard';

const routes: Routes = [
  { path: '', component: EditorComponent, canActivate: [AuthGuard] },
  {
    path: ':slug',
    component: EditorComponent,
    canActivate: [AuthGuard],
    resolve: { article: EditableArticleResolverService }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditorRoutingModule {}
