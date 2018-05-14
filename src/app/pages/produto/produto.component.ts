import { Component, Input } from "@angular/core";
import {HttpClient} from '@angular/common/http';

@Component({
    selector: 'produtos',
    templateUrl: './produto.component.html'
})
export class ProdutoComponent{
    @Input() produtos: Object[] = [];
    constructor(http :HttpClient){    
        http
            .get('http://localhost:5000/api/produto/')       
            .subscribe((res :Object[]) => {
                this.produtos = res;
            }, erro=> console.log(erro));
    }
}