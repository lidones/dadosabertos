var app = new Vue({
  el: '#app',
  data: {
    descricao: '',
    unidade: '',
    valores: []
  },
  created () {
    fetch('https://cors-anywhere.herokuapp.com/' + 'http://api.pgi.gov.br/api/1/serie/551.json')
      .then(response => response.json())
      .then(json => {
        this.descricao = json.descricao;
        this.unidade = json.unidade_medida.unidade_medida;
        for (var i = 0; i < json.valores.length; i++) {
          array = [];
          array.push(json.valores[i].ano);
          array.push(json.valores[i].valor);
          this.valores.push(array);
        }
      })
      .catch(error => console.log(error));
  }
})