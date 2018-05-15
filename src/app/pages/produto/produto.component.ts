import { Component } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Http } from "@angular/http";

@Component({
    selector: 'produtos',
    templateUrl: './produto.component.html'
})
export class ProdutoComponent {
    produtos: Object[] = [];
    http: HttpClient;
    constructor(http: HttpClient) {
        this.http = http;
        this.carregarProdutos();
    }

    carregarProdutos() {
        this.http
            .get('http://localhost:5000/api/produto/')
            .subscribe((res: Object[]) => {
                this.produtos = res;
            }, erro => console.log(erro));
    }

    remover(produto) {
        this.http
            .delete(`http://localhost:5000/api/produto/${produto.idProduto}`)
            .subscribe(() => {
                console.log("Sucesso");
                this.carregarProdutos();
            }, erro => console.log(erro));

    }
}