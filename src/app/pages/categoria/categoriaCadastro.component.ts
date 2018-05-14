import {Component} from '@angular/core';
import {Http, Headers} from '@angular/http';

@Component({
    selector: 'categoriaCadastro',
    templateUrl: './categoriaCadastro.component.html'
})
export class CategotiaCadastroComponent{
    categoria :Object = this.criarCategoria();

    criarCategoria(){
        return {
            nome: '',
            descricao: '',       
        }
    }

    mensagem: string;
    http:Http;
    constructor(http: Http){
        this.http = http;
    }

    cadastrar(event){
        event.preventDefault();
        let header = new Headers();
        header.append('Content-type', 'application/json');      
        this.http
            .post('http://localhost:5000/api/categoria/', JSON.stringify(this.categoria),{headers: header})
            .subscribe(()=>{
                this.mensagem = 'Categoria cadastrada com sucesso!';
                this.categoria = this.criarCategoria();
            }, erro => console.log(erro))
    }
}