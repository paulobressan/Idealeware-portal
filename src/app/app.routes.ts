import {RouterModule, Routes} from '@angular/router';
import {ProdutoComponent} from './pages/produto/produto.component';
import {CategoriaComponent} from './pages/categoria/categoria.component';
import {CategotiaCadastroComponent} from './pages/categoria/categoriaCadastro.component';
const appRoutes: Routes = [
    {path: 'produtos', component: ProdutoComponent},
    {path: 'categorias', component: CategoriaComponent},
    {path: 'cadastrar-categorias', component: CategotiaCadastroComponent}
];

export const routing = RouterModule.forRoot(appRoutes);