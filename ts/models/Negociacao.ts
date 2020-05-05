class Negociacao {


    constructor(private _data: Date, private _quantidade: number, private _valor: number) {}

    public get data() {
        return this._data;
    }
    public set data(value) {
        this._data = value;
    }

    public get quantidade() {
        return this._quantidade;
    }
    public set quantidade(value) {
        this._quantidade = value;
    }
    public get valor() {
        return this._valor;
    }
    public set valor(value) {
        this._valor = value;
    }

    public get volume(){
        return this.quantidade * this.valor;
    }
}