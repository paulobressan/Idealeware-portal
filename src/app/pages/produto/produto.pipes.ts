import {Pipe, PipeTransform} from '@angular/core';
import {ProdutoComponent} from './produto.component';
@Pipe({
    name: "filtroPorNomeProduto"
})
export class FiltroPorNomeProduto implements PipeTransform {
    transform(produtos ,digitado: string) {
        digitado = digitado.toLocaleLowerCase();
        return produtos.filter(produto => produto.nome.toLocaleLowerCase().includes(digitado));
    }
}