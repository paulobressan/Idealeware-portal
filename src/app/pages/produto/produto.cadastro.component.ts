import {Component} from '@angular/core';
import {Http, Headers} from '@angular/http';
import {HttpClient} from '@angular/common/http'

@Component({
    selector: 'produtoCadastro',
    templateUrl: './produto.form.component.html'
})
export class ProdutoCadastroComponent{
    titulo :string = "Cadastro de Produtos";
    mensagem: string;
    produto :Object = this.criarProduto();
    http :Http;
    categorias :Object[] = [];
    constructor(http :Http, httpClient: HttpClient){
        this.http = http;
        httpClient
            .get('http://localhost:5000/api/categoria/')       
            .subscribe((res :Object[]) =>{           
                 this.categorias = res;
            }, erro=>console.log(erro));
    }

    criarProduto(){
        return  {
            nome:'',
            descricao:'',
            valorCompra:'',
            valorVenda:'',
            IdCategoria:''
        }
    }

    salvar(event){
        event.preventDefault();
        let header = new Headers();
        header.append('Content-type', 'application/json');      
        this.http
            .post('http://localhost:5000/api/produto/', JSON.stringify(this.produto),{headers: header})
            .subscribe(()=>{
                this.mensagem = 'Produto cadastrado com sucesso!';
                this.produto = this.criarProduto();
            }, erro => console.log(erro))
    }
}