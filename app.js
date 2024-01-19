const TMDB_ENDPOINT_BASE = 'https://api.themoviedb.org/3';

//cria cartões dos filmes em cartaz
function MostrarFilmesEmCartaz( ){
    //executa o ajax
    $.ajax({
        // Envia informações de filmes em cartaz com informações em português
        url: TMDB_ENDPOINT_BASE + '/movie/now_playing?language=pt-BR',
        data: {
            api_key: '3aaff30185bb94da3c50bffe04e96c80' //chave api do the movie db
        }
    })
        
    // Recebe o JSON
    .done(function (data) {
    
        let codigo_html = '';
        
        // Monta os cartões
        for (i=5; i< 10; i++) {
            // Concatena o código do cartão com os dados do JSON
            titulo = data.results[i].title;
            imagem = 'https://image.tmdb.org/t/p/w500' + data.results[i].poster_path;
            descricao = data.results[i].overview;
            id = data.results[i].id;

            codigo_html += `<div class="card" id="card1" >
                    <img src="${imagem}" class="card-img-top" alt="${titulo}">
                    <div class="card-body">
                      <h5 class="card-title">${titulo}</h5>
                      <p class="card-text">${descricao}</p>
                      <a href="full.html"  id="buttonc1" class="btn btn-primary" onclick="sessionStorage.setItem('id', ${i}); sessionStorage.setItem('endp', 'now_playing')">Saiba Mais</a>
                    </div>
                    </div>`;
        }


        // Repassa os cartões de filmes para a página
        $('#lista_filmes').html(codigo_html)
    });
}//Fim da função que mostra os fimes em cartaz

//cria cartões dos filmes em cartaz
function MostrarFilmesNovidade( ){
    //executar ajax
    $.ajax({
        //Envia informações de filmes em cartaz com informações em português
        url: TMDB_ENDPOINT_BASE + '/movie/latest?language=pt-BR',
        data: {
            api_key: '3aaff30185bb94da3c50bffe04e96c80' //chave api do the movie db
        }
    })
        
    // Recebe o JSON
    .done(function (data) {
    
        let codigo_html = '';
        
        // Montar os cartões
            // Concatena o código do cartão com os dados do JSON
            titulo = data.title;
            imagem = 'https://image.tmdb.org/t/p/w200' + data.backdrop_path;
            descricao = data.overview;
            id = data.id;

            codigo_html += `<div id="CardN" class="card mb-3" style="max-width: 500px;">
            <div class="row no-gutters">
                <img src="${imagem}" class="card-img" alt="${titulo}">
                <div class="card-body">
                    <h5 class="card-title">${titulo}</h5>
                    <p class="card-text">${descricao}</p>
                    <a href="https://www.themoviedb.org/movie/${id}-${titulo}" target="_blank" id="buttonc1" class="btn btn-primary">Saiba Mais</a>
                </div>
            </div>
        </div>`;
        
        // Repassa os cartões para a página
        $('#novi').html(codigo_html)
    });
}//Fim da função que mostra os novos filmes

//cria cartões dos filmes pupulares
function MostrarFilmesPopulares( ){
    //executar ajax
    $.ajax({
        //Envia informações dos filmes populares em português
        url: TMDB_ENDPOINT_BASE + '/movie/popular?language=pt-BR',
        data: {
            api_key: '3aaff30185bb94da3c50bffe04e96c80'// chave api do the movie db
        }
    })
        
    // Recebe o JSON
    .done(function (data) {
    
        let codigo_html = '';
        
        // Monta os cartões
            // Concatena o código do cartão com os dados do JSON
                codigo_html += `<div id="carouselExampleCaptions" class="carousel slide" data-ride="carousel">
                <ol class="carousel-indicators">
                  <li data-target="#carouselExampleCaptions" data-slide-to="${0}" class="active"></li>
                  <li data-target="#carouselExampleCaptions" data-slide-to="${1}"></li>
                  <li data-target="#carouselExampleCaptions" data-slide-to="${2}"></li>
                </ol>
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                          <img src="${'https://image.tmdb.org/t/p/w400' + data.results[0].poster_path}" class="d-block w-10" alt="${data.results[0].title}">
                          <div class="carousel-caption d-none d-md-block" id="descricaopop">
                            <h2>${data.results[0].title}</h2>
                            <p id="descricaopoptxt">${data.results[0].overview}</p>
                            <a href="full.html"  id="buttonc1" class="btn btn-primary" onclick="sessionStorage.setItem('id', ${0}); sessionStorage.setItem('endp', 'popular')">Saiba Mais</a>
                          </div>
                        </div>
                        <div class="carousel-item">
                          <img src="${'https://image.tmdb.org/t/p/w400' + data.results[1].poster_path}" class="d-block w-10" alt="${data.results[1].title}">
                          <div class="carousel-caption d-none d-md-block" id="descricaopop"> 
                            <h2>${data.results[1].title}</h2>
                            <p id="descricaopoptxt">${data.results[1].overview}</p>
                            <a href="full.html"  id="buttonc1" class="btn btn-primary" onclick="sessionStorage.setItem('id', ${1}); sessionStorage.setItem('endp', 'popular')">Saiba Mais</a>
                          </div>
                        </div>
                        <div class="carousel-item">
                          <img src="${'https://image.tmdb.org/t/p/w400' + data.results[2].poster_path}" class="d-block w-10" alt="${data.results[2].title}">
                          <div class="carousel-caption d-none d-md-block" id="descricaopop">
                            <h2>${data.results[2].title}</h2>
                            <p id="descricaopoptxt">${data.results[2].overview}</p>
                            <a href="full.html"  id="buttonc1" class="btn btn-primary" onclick="sessionStorage.setItem('id', ${2}); sessionStorage.setItem('endp', 'popular')">Saiba Mais</a>
                          </div>
                        </div>
                      <a class="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="sr-only">Previous</span>
                      </a>
                      <a class="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="sr-only">Next</span>
                      </a>
                    </div>
                </div>`;
        // Repassa os cartões para a página
        $('#populares').html(codigo_html);

    });


}//Fim da função que mostra os filmes populares



$(document).ready(function(){
    
    MostrarFilmesEmCartaz();
    MostrarFilmesPopulares();
    MostrarFilmesNovidade();
    $("#btn_pesquisa").click(function () {
      if (sessionStorage.getItem("isPesquisa")) {
        sessionStorage.setItem("item", $("#search").val());
      }
    });
    $("#onpopulares").click(function () {sessionStorage.setItem("pop", true);});
    $("#oncinema").click(function () {sessionStorage.setItem("cin", true);});
    $("#onnovi").click(function () {sessionStorage.setItem("novi", true);});
    sessionStorage.setItem("cin", false);
    sessionStorage.setItem("pop", false);
    sessionStorage.setItem("novi", false);
});