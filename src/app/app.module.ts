import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ProdutoComponent } from './pages/produto/produto.component';
import { ProdutoCadastroComponent } from './pages/produto/produto.cadastro.component';
import { ProdutoAlterarComponent } from './pages/produto/produto.alterar.component';
import { CategoriaComponent } from './pages/categoria/categoria.component';
import { CategoriaCadastroComponent } from './pages/categoria/categoria.cadastro.component';
import { CategoriaAlterarComponent } from './pages/categoria/categoria.alterar.component';
import { FiltroPorNomeProduto } from './pages/produto/produto.pipes';
import { FiltroPorNomeCategoria } from './pages/categoria/categoria.pipes';
import { routing } from './app.routes';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProdutoComponent,
    CategoriaComponent,
    FiltroPorNomeProduto,
    FiltroPorNomeCategoria,
    CategoriaCadastroComponent,
    ProdutoCadastroComponent,
    CategoriaAlterarComponent,
    ProdutoAlterarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    routing,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
