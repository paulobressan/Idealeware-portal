import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {Http, Headers} from '@angular/http';

@Component({
    selector: 'categoriaAlterar',
    templateUrl: './categoria.form.component.html'
})
export class CategoriaAlterarComponent implements OnInit{
    idCategoria;
    titulo :string = "Alterar Categorias";
    categoria :Object = this.criarCategoria();
    criarCategoria(){
        return {
            nome: '',
            descricao: '',       
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
    }

    ngOnInit(): void {
        this.route.queryParams.subscribe((query :any)=>{
            this.idCategoria = query['id'];
        });
        this.recuperarCategoria();
    }

    recuperarCategoria(){
        this.httpClient
        .get(`http://localhost:5000/api/categoria/${this.idCategoria}`)       
        .subscribe((res :Object[]) =>{           
             this.categoria = res;
        }, erro=>console.log(erro));
    }

    salvar(event){
        event.preventDefault();
        let header = new Headers();
        header.append('Content-type', 'application/json');      
        this.http
            .put('http://localhost:5000/api/categoria/', JSON.stringify(this.categoria),{headers: header})
            .subscribe(()=>{
                this.mensagem = 'Categoria alterada com sucesso!';
                this.categoria = this.criarCategoria();
            }, erro => console.log(erro))
    }
}