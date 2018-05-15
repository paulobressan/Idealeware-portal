import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {Http, Headers} from '@angular/http';

@Component({
    selector: 'produtoAlterar',
    templateUrl: './produto.form.component.html'
})
export class ProdutoAlterarComponent implements OnInit{
    idProduto;
    titulo :string = "Alterar Produtos";
    produto :Object = this.criarProduto();
    categorias :Object[] = [];
    criarProduto(){
        return  {
            nome:'',
            descricao:'',
            valorCompra:'',
            valorVenda:'',
            IdCategoria:''
        }
    }

    mensagem: string;
    http:Http;
    route :ActivatedRoute;
    httpClient: HttpClient;
    constructor(http: Http, route :ActivatedRoute, httpClient: HttpClient){
        this.http = http;
        this.route = route;
        this.httpClient = httpClient;
        this.http = http;
        httpClient
            .get('http://localhost:5000/api/categoria/')       
            .subscribe((res :Object[]) =>{           
                 this.categorias = res;
            }, erro=>console.log(erro));
    }

    ngOnInit(): void {
        this.route.queryParams.subscribe((query :any)=>{
            this.idProduto = query['id'];
        });
        this.recuperarProduto();
    }

    recuperarProduto(){
        this.httpClient
        .get(`http://localhost:5000/api/produto/${this.idProduto}`)       
        .subscribe((res :Object[]) =>{           
             this.produto = res;
        }, erro=>console.log(erro));
    }

    salvar(event){
        event.preventDefault();
        let header = new Headers();
        header.append('Content-type', 'application/json');      
        this.http
            .put('http://localhost:5000/api/produto/', JSON.stringify(this.produto),{headers: header})
            .subscribe(()=>{
                this.mensagem = 'Produto alterado com sucesso!';
                this.produto = this.criarProduto();
            }, erro => console.log(erro))
    }
}