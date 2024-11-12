var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Pagamento = /** @class */ (function () {
    function Pagamento() {
    }
    Pagamento.prototype.processar = function () {
        throw new Error("Método 'processar' não implementado.");
    };
    return Pagamento;
}());
var PagamentoCartao = /** @class */ (function (_super) {
    __extends(PagamentoCartao, _super);
    function PagamentoCartao(numeroCartao) {
        var _this = _super.call(this) || this;
        _this.numeroCartao = numeroCartao;
        return _this;
    }
    PagamentoCartao.prototype.ValidarCartao = function () {
        return this.numeroCartao.length === 16;
    };
    PagamentoCartao.prototype.processar = function () {
        if (this.ValidarCartao()) {
            console.log("Pagamento com cartão processado com sucesso.");
        }
        else {
            console.log("Número do cartão inválido.");
        }
    };
    return PagamentoCartao;
}(Pagamento));
var PagamentoBoleto = /** @class */ (function (_super) {
    __extends(PagamentoBoleto, _super);
    function PagamentoBoleto() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PagamentoBoleto.prototype.processar = function () {
        var codigoBoleto = this.gerarCodigoBoleto();
        console.log("Pagamento com boleto gerado. C\u00F3digo do boleto: ".concat(codigoBoleto));
    };
    PagamentoBoleto.prototype.gerarCodigoBoleto = function () {
        var gerarGrupo = function () { return Math.floor(1000 + Math.random() * 9000).toString(); };
        return "".concat(gerarGrupo(), ".").concat(gerarGrupo(), ".").concat(gerarGrupo(), ".").concat(gerarGrupo());
    };
    return PagamentoBoleto;
}(Pagamento));
function processarPagamento(pagamento) {
    pagamento.processar();
}
var pagamentoCartao = new PagamentoCartao("1234567812345678");
processarPagamento(pagamentoCartao);
var pagamentoBoleto = new PagamentoBoleto();
processarPagamento(pagamentoBoleto);
