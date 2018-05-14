import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import {HttpModule} from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ProdutoComponent } from './pages/produto/produto.component';
import { CategoriaComponent } from './pages/categoria/categoria.component';
import { FiltroPorNomeProduto } from './pages/produto/produto.pipes';
import { FiltroPorNomeCategoria } from './pages/categoria/categoria.pipes';
import {CategotiaCadastroComponent} from './pages/categoria/categoriaCadastro.component';
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
    CategotiaCadastroComponent
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
