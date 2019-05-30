let livros = []
let livroId = 0

class Livro {
    constructor(id, titulo, capa, descriçao, autor, editora, dataLançamento, numeroPaginas, estado, doador, dataDoaçao, categoria, tags, biblioteca, requisitado, somaPontuacoes, numeroPontuacoes, mediaPontuacoes) {
        this.id = id
        this.titulo = titulo
        this.capa = capa
        this.descriçao = descriçao
        this.autor = autor
        this.editora = editora
        this.dataLançamento = dataLançamento
        this.numeroPaginas = numeroPaginas
        this.estado = estado
        this.doador = doador
        this.dataDoaçao = dataDoaçao
        this.categoria = categoria
        this.tags = tags
        this.biblioteca = biblioteca
        this.requisitado = requisitado
        this.somaPontuacoes = somaPontuacoes
        this.numeroPontuacoes = numeroPontuacoes
        this.mediaPontuacoes = mediaPontuacoes 
    }
    
    // Propriedade id
    get id() {
        return this._id
    }

    set id(novoID) {
        this._id = novoID        
    }

    // Propriedade titulo
    get titulo() {
        return this._titulo
    }

    set titulo(novoTitulo) {
        this._titulo = novoTitulo        
    }

    // Propriedade capa
    get capa() {
        return this._capa
    }
    set capa(novaCapa) {
        this._capa = novaCapa
    }

    // Propriedade descriçao
    get descriçao() {
        return this._descriçao
    }
    set descriçao(novaDescriçao) {
        this._descriçao = novaDescriçao
    }

    // Propriedade autor
    get autor() {
        return this._autor
    }
    set autor(novoAutor) {
        this._autor = novoAutor
    }
    
    // Propriedade editora
    get editora() {
        return this._editora
    }
    set editora(novaEditora) {
        this._editora = novaEditora
    }

    // Propriedade data de lançamento
    get dataLançamento() {
        return this._dataLançamento
    }
    set dataLançamento(novaDataLançamento) {
        this._dataLançamento = novaDataLançamento
    }

    // Propriedade numero de paginas
    get numeroPaginas() {
        return this._numeroPaginas
    }
    set numeroPaginas(novoNumeroPaginas) {
        this._numeroPaginas = novoNumeroPaginas
    }

    // Propriedade estado
    get estado() {
        return this._estado
    }
    set estado(novoEstado) {
        this._estado = novoEstado
    }

    // Propriedade nome do doador
    get doador() {
        return this._doador
    }
    set doador(novoDoador) {
        this._doador = novoDoador
    }

    // Propriedade data de doaçao
    get dataDoaçao() {
        return this._dataDoaçao
    }
    set dataDoaçao(novaDataDoaçao) {
        this._dataDoaçao = novaDataDoaçao
    }

    // Propriedade categoria
    get categoria() {
        return this._categoria
    }
    set categoria(novaCategoria) {
        this._categoria = novaCategoria
    }

    // Propriedade tags
    get tags() {
        return this._tags
    }
    set tags(novasTags) {
        this._tags = novasTags
    }

    // Propriedade biblioteca
    get biblioteca() {
        return this._biblioteca
    }
    set biblioteca(novaBiblioteca) {
        this._biblioteca = novaBiblioteca
    }

    // Propriedade requisitado
    get requisitado() {
        return this._requisitado
    }
    set requisitado(novoRequisitado) {
        this._requisitado = novoRequisitado
    }

    // Propriedade somaPontuacoes
    get somaPontuacoes() {
        return this._somaPontuacoes
    }
    set somaPontuacoes(novaSomaPontuacoes) {
        this._somaPontuacoes = novaSomaPontuacoes
    }

    // Propriedade numeroPontuacoes
    get numeroPontuacoes() {
        return this._numeroPontuacoes
    }
    set numeroPontuacoes(novoNumeroPontuacoes) {
        this._numeroPontuacoes = novoNumeroPontuacoes
    }
    
    // Propriedade mediaPontuacoes
    get mediaPontuacoes() {
        return this._mediaPontuacoes
    }
    set mediaPontuacoes(novaMediaPontuacoes) {
        this._mediaPontuacoes = novaMediaPontuacoes
    }
}

