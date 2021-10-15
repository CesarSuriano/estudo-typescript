import { IImprimivel, IIgualavel } from "../models/index"

export class Negociacao implements IImprimivel, IIgualavel<Negociacao> {
    ehIgual(objeto: Negociacao): boolean {
        return this.data.getDate() == objeto.data.getDate() &&
            this.data.getMonth() == objeto.data.getMonth() &&
            this.data.getDay() == objeto.data.getDay()
    }


    constructor(readonly data: Date, readonly quantidade: number, readonly valor: number) { }

    public get volume() {
        return this.quantidade * this.valor;
    }

    paraTexto(): void {
        console.log(
            `
                Data: ${this.data},
                Quantidade: ${this.quantidade},
                Valor: ${this.valor},
                Volume: ${this.volume},
            `
        );
    }
}