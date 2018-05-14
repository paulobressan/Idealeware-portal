import { Component, Input } from "@angular/core";
import {HttpClient} from '@angular/common/http'
import { Http } from "@angular/http";

@Component({
    selector: 'categorias',
    templateUrl: './categoria.component.html'
})
export class CategoriaComponent{
    @Input() categorias :Object[] = [];
    http :Http;
    constructor(httpClient :HttpClient, http: Http){
        this.http = http;
        httpClient
            .get('http://localhost:5000/api/categoria/')       
            .subscribe((res :Object[]) =>{           
                 this.categorias = res;
            }, erro=>console.log(erro));
    }

    remover(categoria){
        this.http
            .delete(`http://localhost:5000/api/categoria/${categoria.idCategoria}`)
            .subscribe(()=>{
                console.log("Sucesso");
            }, erro=>console.log(erro));
              
    }
}