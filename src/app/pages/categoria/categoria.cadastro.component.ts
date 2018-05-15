import {Component} from '@angular/core';
import {Http, Headers} from '@angular/http';

@Component({
    selector: 'categoriaCadastro',
    templateUrl: './categoria.form.component.html'
})
export class CategoriaCadastroComponent{
    categoria :Object = this.criarCategoria();
    titulo :string = "Cadastro de Categorias";
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

    salvar(event){
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