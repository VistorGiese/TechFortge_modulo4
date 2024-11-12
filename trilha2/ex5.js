var agenda = /** @class */ (function () {
    function agenda(compromisos) {
        this.compromissos = compromisos;
    }
    agenda.prototype.adicionar = function (compromisso) {
        this.compromissos.push(compromisso);
    };
    return agenda;
}());
var minhaagenda = new agenda(['lal']);
minhaagenda.adicionar('lel');
minhaagenda.adicionar('jooj');
console.log(minhaagenda.compromissos);
