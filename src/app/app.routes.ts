import { RouterModule, Routes } from '@angular/router';
import { ProdutoComponent } from './pages/produto/produto.component';
import { ProdutoCadastroComponent } from './pages/produto/produto.cadastro.component';
import { ProdutoAlterarComponent } from './pages/produto/produto.alterar.component';
import { CategoriaComponent } from './pages/categoria/categoria.component';
import { CategoriaCadastroComponent } from './pages/categoria/categoria.cadastro.component';
import { CategoriaAlterarComponent } from './pages/categoria/categoria.alterar.component';
const appRoutes: Routes = [
    { path: 'produtos', component: ProdutoComponent },
    { path: 'categorias', component: CategoriaComponent },
    { path: 'cadastrar-categorias', component: CategoriaCadastroComponent },
    { path: 'cadastrar-produtos', component: ProdutoCadastroComponent },
    { path: 'alterar-categorias', component: CategoriaAlterarComponent },
    { path: 'alterar-produtos', component: ProdutoAlterarComponent }
];

export const routing = RouterModule.forRoot(appRoutes);