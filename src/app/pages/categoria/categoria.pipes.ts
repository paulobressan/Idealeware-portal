import {Pipe, PipeTransform} from'@angular/core';

@Pipe({
    name: 'filtroPorNomeCategoria'
})
export class FiltroPorNomeCategoria implements PipeTransform {
    transform(produtos, digitado: string) {
        digitado = digitado.toLocaleLowerCase();
        return produtos.filter(produto=> produto.nome.toLocaleLowerCase().includes(digitado));
    }
}