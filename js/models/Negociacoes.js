class Negociacoes {
    constructor() {
        this._negociacoes = [];
    }
    adiciona(negocicao) {
        this._negociacoes.push(negocicao);
    }
    getNegociacoes() {
        return [].concat(this._negociacoes);
    }
}
