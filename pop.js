const TMDB_ENDPOINT_BASE = 'https://api.themoviedb.org/3';

//cria cards dos filmes pupulares
function MostrarFilmesPop( ){
  //executar AJAX
  
  $.ajax({
      // Passar a URL ENDPOINT BASE + /movie/popular
      url: TMDB_ENDPOINT_BASE + '/movie/popular?language=pt-BR',
      data: {
          api_key: '3aaff30185bb94da3c50bffe04e96c80'
      }
  })
      
  // Receber o JSON
  .done(function (data) {
  
      let codigo_html = '';
      let titulo_html = "";
        titulo_html += `<h1 class="lançamento" >FILMES POPULARES</h1>`;
      // Montar os cards
      for (i=0; i< 10; i++) {
          // Concatenar o código do Card com os dados do JSON
          titulo = data.results[i].title;
          imagem = 'https://image.tmdb.org/t/p/w500' + data.results[i].poster_path;
          descricao = data.results[i].overview;
          id = data.results[i].id;

          codigo_html += `<div class="card mb-3" style="max-width: 700px;">
          <div class="row no-gutters">
            <div class="col-md-4">
              <img src="${imagem}" class="card-img" alt="${titulo}">
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h2 class="card-title">${titulo}</h2>
                <p class="card-text">${descricao}</p>
                <a href="full.html"  id="buttonc1" class="btn btn-primary" onclick="sessionStorage.setItem('id', ${i}); sessionStorage.setItem('endp', 'popular')">Saiba Mais</a>
              </div>
            </div>
          </div>
        </div>`;
      }
          
      // Repassar os cards para a página
      $('#pop').html(codigo_html);
      $("#titulo_session").html(titulo_html);
      
  });
}//end funcao MostrarFilmesPop

//cria cards dos filmes pupulares
function MostrarFilmesCin( ){
  //executar AJAX
  
  $.ajax({
      // Passar a URL ENDPOINT BASE + /movie/now_playing
      url: TMDB_ENDPOINT_BASE + '/movie/now_playing?language=pt-BR',
      data: {
          api_key: '3aaff30185bb94da3c50bffe04e96c80'
      }
  })
      
  // Receber o JSON
  .done(function (data) {
  
      let codigo_html = '';
      let titulo_html = "";
        titulo_html += `<h1 class="lançamento" >FILMES NO CINEMA</h1>`;
      // Montar os cards
      for (i=0; i< 10; i++) {
          // Concatenar o código do Card com os dados do JSON
          titulo = data.results[i].title;
          imagem = 'https://image.tmdb.org/t/p/w500' + data.results[i].poster_path;
          descricao = data.results[i].overview;
          id = data.results[i].id;

          codigo_html += `<div class="card mb-3" style="max-width: 700px;">
          <div class="row no-gutters">
            <div class="col-md-4">
              <img src="${imagem}" class="card-img" alt="${titulo}">
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h2 class="card-title">${titulo}</h2>
                <p class="card-text">${descricao}</p>
                <a href="full.html"  id="buttonc1" class="btn btn-primary" onclick="sessionStorage.setItem('id', ${i}); sessionStorage.setItem('endp', 'now_playing')">Saiba Mais</a>
              </div>
            </div>
          </div>
        </div>`;
      }
         
      // Repassar os cards para a página
      $('#pop').html(codigo_html);
      $("#titulo_session").html(titulo_html);
  });
}//end funcao MostrarFilmesCin

//cria cartões dos filmes pupulares
function MostrarFilmesNovi( ){
  //executar ajax
  
  $.ajax({
      // Envia informações dos filmes populares 
      url: TMDB_ENDPOINT_BASE + '/movie/latest?language=pt-BR',
      data: {
          api_key: '3aaff30185bb94da3c50bffe04e96c80'// chave de api
      }
  })
      
  // Recebe o JSON
  .done(function (data) {
  
      let codigo_html = '';
      let titulo_html = "";
        titulo_html += `<h1 class="lançamento" >NOVIDADES</h1>`;
      // Monta os cartões
      for (i=0; i< 1; i++) {
          // Concatena o código do cartões com os dados recebidos do JSON
          titulo = data.title;
          imagem = 'https://image.tmdb.org/t/p/w500' + data.poster_path;
          descricao = data.overview;
          id = data.id;
          // Mostra as informações recebidas 
          codigo_html += `<div class="card mb-3" style="max-width: 700px;">
          <div class="row no-gutters">
            <div class="col-md-4">
              <img src="${imagem}" class="card-img" alt="${titulo}">
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h2 class="card-title">${titulo}</h2>
                <p class="card-text">${descricao}</p>
                <a href="https://www.themoviedb.org/movie/${id}-${titulo}" target="_blank" id="buttonc1" class="btn btn-primary">Saiba Mais</a>
              </div>
            </div>
          </div>
        </div>`;
      }
          
      // Repassar os cartões para a página
      $('#pop').html(codigo_html);
      $("#titulo_session").html(titulo_html);
  });
}//Fim da função que mostra os filmes populares

$(document).ready(function () {
  $("#btn_pesquisa").click(function () {
    //sessionStorage.setItem("isPesquisa", true);
    if (sessionStorage.getItem("isPesquisa")) {
      sessionStorage.setItem("item", $("#search").val());
    }
  });
  $("#onpopulares").click(function () {sessionStorage.setItem("pop", true); sessionStorage.setItem("cin", false); sessionStorage.setItem("novi", false);});
  if(sessionStorage.getItem("pop") == "true") {MostrarFilmesPop();};
  $("#oncinema").click(function () {sessionStorage.setItem("cin", true); sessionStorage.setItem("pop", false); sessionStorage.setItem("novi", false);});
  if(sessionStorage.getItem("cin") == "true") {MostrarFilmesCin();};
  $("#onnovi").click(function () {sessionStorage.setItem("novi", true); sessionStorage.setItem("pop", false); sessionStorage.setItem("cin", false);});
  if(sessionStorage.getItem("novi") == "true") {MostrarFilmesNovi();};

});
