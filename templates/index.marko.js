// Compiled using marko@4.23.9 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/templateAllColl-main$1.0.0/templates/index.marko",
    marko_renderer = require("marko/src/runtime/components/renderer"),
    marko_loadTag = require("marko/src/runtime/helpers/load-tag"),
    init_components_tag = marko_loadTag(require("marko/src/core-tags/components/init-components-tag")),
    await_reorderer_tag = marko_loadTag(require("marko/src/core-tags/core/await/reorderer-renderer")),
    _preferred_script_location_tag = marko_loadTag(require("marko/src/core-tags/components/preferred-script-location-tag"));

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<!DOCTYPE html><html lang=pt-br><head><meta charset=utf-8><meta name=viewport content=\"width=device-width, initial-scale=1.0, shrink-to-fit=no\"><title>Home - Catálogo</title><link rel=stylesheet href=/assets/css/style-extra.css><link rel=stylesheet href=/assets/bootstrap/css/bootstrap.min.css?h=a847d1fe541ca62044cce96cfd476e07><link rel=stylesheet href=https://fonts.googleapis.com/css?family=Lato><link rel=stylesheet href=https://fonts.googleapis.com/css?family=Catamaran:100,200,300,400,500,600,700,800,900><link rel=stylesheet href=https://fonts.googleapis.com/css?family=Muli><link rel=stylesheet href=https://fonts.googleapis.com/css?family=Aldrich><link rel=stylesheet href=https://fonts.googleapis.com/css?family=Alfa+Slab+One><link rel=stylesheet href=https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css><link rel=stylesheet href=https://cdnjs.cloudflare.com/ajax/libs/ionicons/2.0.1/css/ionicons.min.css><link rel=stylesheet href=/assets/css/styles.min.css?h=de827f96ca45107a1c2d70d42c066210></head><body id=page-top style=\"height: 645px;\"><nav class=\"navbar navbar-expand-lg navbar-light  fixed-top\" style=\"background-color: #FDC844;\"><a class=navbar-brand href=#><img id=logo src=/img/logo.png alt=logo></a><button class=navbar-toggler type=button data-toggle=collapse data-target=#conteudoNavbarSuportado aria-controls=conteudoNavbarSuportado aria-expanded=false aria-label=\"Alterna navegação\"><span class=navbar-toggler-icon></span></button><div class=\"collapse navbar-collapse\" id=conteudoNavbarSuportado><ul class=\"navbar-nav mr-auto\"><li class=\"nav-item active\"><a class=\"nav-link menu-letter\" href=/ >Catálogo <span class=sr-only>(página atual)</span></a></li><li class=\"nav-item menu-letter\"><a class=nav-link href=/produtos>Produtos</a></li><li class=\"nav-item menu-letter\"><a class=nav-link href=/pagamentos>Carrinho</a></li></ul><form class=\"form-inline my-2 my-lg-0\"><a class=\"btn btn-outline-dark menu-letter\" href=./cadastro role=button id=hover style=\"background-color: #272319; border-radius: 5px; border: none; color: #ffffff; margin-right: 20px;\">CADASTRO</a><a class=\"btn btn-outline-dark menu-letter\" href=# role=button id=hover2 style=\"background-color: #ffffff; border-radius: 5px; border: none; color: #161313;\">LOGIN</a></form></div></nav><section class=bg-white><div class=container><div class=container><div class=row><div class=col-lg-3><h1 class=my-4>All Cool Distribuidora</h1><div class=card style=\"width: 15rem;\"><div class=card-body><p class=card-text><strong>Tome a sua a felicidade!</strong></p><small>Proibida a venda de bebidas alcóolicas para menores de 18 anos.</small><br><small>Beba com moderação.</small></div></div><br></div><div class=col-lg-9><div id=carouselExampleIndicators class=\"carousel slide my-4\" data-ride=carousel><ol class=carousel-indicators><li data-target=#carouselExampleIndicators data-slide-to=0 class=active></li><li data-target=#carouselExampleIndicators data-slide-to=1></li><li data-target=#carouselExampleIndicators data-slide-to=2></li><li data-target=#carouselExampleIndicators data-slide-to=3></li></ol><div class=carousel-inner role=listbox><div class=\"carousel-item active\"><a href=#promoções><img class=\"d-block img-fluid\" src=./img/capa1.png alt=\"conheça nossas promoções\"></a></div><div class=carousel-item><a href=#promo_nossa><img class=\"d-block img-fluid\" src=./img/capa2.png alt=\"promoção cerveja nossa\"></a></div><div class=carousel-item><a href=#promo_refrigerantesaogeraldo><img class=\"d-block img-fluid\" src=./img/capa3.png alt=\"promoção refrigerante são geraldo\"></a></div><div class=carousel-item><a href=#promo_triunfo><img class=\"d-block img-fluid\" src=./img/capa4.png alt=\"promoção cachaça triunfo\"></a></div></div></div><a class=carousel-control-prev href=#carouselExampleIndicators role=button data-slide=prev><span class=carousel-control-prev-icon aria-hidden=true></span><span class=sr-only>Anterior</span></a><a class=carousel-control-next href=#carouselExampleIndicators role=button data-slide=next><span class=carousel-control-next-icon aria-hidden=true></span><span class=sr-only>Próximo</span></a></div><div class=row><div class=\"col-lg-4 col-md-6 mb-4\"><div class=\"card h-100\"><a href=#><img class=card-img-top src=./img/skolcaixaC1.png alt=\"Cerveja skol caixa\"></a><div class=card-body><h4 class=card-title><a href=#>Skol Caixa 269 ml</a></h4><h5>R$24,99</h5><p class=card-text>Cerveja Skol Puro Malte 269ml <br> 15 Unidades (Vol. 4,7%) </p></div><div class=card-footer><small class=text-muted>&#9733; &#9733; &#9733; &#9733; &#9734;</small></div></div></div><div class=\"col-lg-4 col-md-6 mb-4\"><div class=\"card h-100\"><a href=#><img class=card-img-top src=./img/quintadomorgadoC2.jpg alt=\"Vinho quinta do morgado unidade\"></a><div class=card-body><h4 class=card-title><a href=#>Vinho Quinta do Morgado 750ml</a></h4><h5>R$12,99</h5><p class=card-text>Vinho Nacional Tinto Suave Quinta Morgado 750ml unidade (Vol. 10,09%).</p></div><div class=card-footer><small class=text-muted>&#9733; &#9733; &#9733; &#9733; &#9734;</small></div></div></div><div class=\"col-lg-4 col-md-6 mb-4\"><div class=\"card h-100\"><a href=#><img class=card-img-top src=./img/sidracereserC3.jpg alt=\"Sidra cereser maçã unidade\"></a><div class=card-body><h4 class=card-title><a href=#>Sidra Cereser 660ml</a></h4><h5>R$13,99</h5><p class=card-text>Sidra Cereser sabor maçã 660ml unidade (Vol. 5,7%).</p></div><div class=card-footer><small class=text-muted>&#9733; &#9733; &#9733; &#9733; &#9734;</small></div></div></div><div class=\"col-lg-4 col-md-6 mb-4\"><div class=\"card h-100\"><a href=#><img class=card-img-top src=./img/vodkabsolutC4.jpg alt></a><div class=card-body><h4 class=card-title><a href=#>Vodka Absolut 1L</a></h4><h5>R$ 109,99</h5><p class=card-text>Vodka importada Absolut 1L unidade (Vol. 40%) .</p></div><div class=card-footer><small class=text-muted>&#9733; &#9733; &#9733; &#9733; &#9734;</small></div></div></div><div class=\"col-lg-4 col-md-6 mb-4\"><div class=\"card h-100\"><a href=#><img class=card-img-top src=./img/coroteC5.jpg alt></a><div class=card-body><h4 class=card-title><a href=#>Corote sabor Blueberry 500ml</a></h4><h5>R$4,98</h5><p class=card-text>Coquetel Corote Blueberry 500ml unidade (Vol. 13,5%)</p></div><div class=card-footer><small class=text-muted>&#9733; &#9733; &#9733; &#9733; &#9734;</small></div></div></div><div class=\"col-lg-4 col-md-6 mb-4\"><div class=\"card h-100\"><a href=#><img class=card-img-top src=./img/pitukitC6.jpg alt></a><div class=card-body><h4 class=card-title><a href=#>Kit Pitú</a></h4><h5>R$29.99</h5><p class=card-text>Contém: <br> Garrafa de Pitú: 965 ml ­(40% vol) Lata de Pitú: 350 ml (40% vol) Lata de Pitú Limão: 350 ml ­(30% vol) Copo de Caipirinha Pitú Amassador de frutas Pitú</p></div><div class=card-footer><small class=text-muted>&#9733; &#9733; &#9733; &#9733; &#9734;</small></div></div></div><div class=\"col-lg-4 col-md-6 mb-4\"><div class=\"card h-100\"><a href=#><img class=card-img-top src=./img/rochedounidadeC7.png alt></a><div class=card-body><h4 class=card-title><a href=#>Refrigerante Rochedo 2L unidade.</a></h4><h5>R$4,98</h5><p class=card-text>Refrigerante Rochedo sabor tutti-fruti 2L unidade.</p></div><div class=card-footer><small class=text-muted>&#9733; &#9733; &#9733; &#9733; &#9734;</small></div></div></div><div class=\"col-lg-4 col-md-6 mb-4\"><div class=\"card h-100\"><a href=#><img class=card-img-top src=./img/aguatonicaC8.jpg alt></a><div class=card-body><h4 class=card-title><a href=#>Água Tônica Antártica 350ml unidade</a></h4><h5>R$2,97</h5><p class=card-text>Água Tônica Antártica zero açúcar 350ml unidade.</p></div><div class=card-footer><small class=text-muted>&#9733; &#9733; &#9733; &#9733; &#9734;</small></div></div></div><div class=\"col-lg-4 col-md-6 mb-4\"><div class=\"card h-100\"><a href=#><img class=card-img-top src=./img/sucodellvalleC9.jpg alt></a><div class=card-body><h4 class=card-title><a href=#>Suco Del Valle 1,5L unidade.</a></h4><h5>R$6,95</h5><p class=card-text>Suco Del Valle sabor limão refrescante 1,5L unidade.</p></div><div class=card-footer><small class=text-muted>&#9733; &#9733; &#9733; &#9733; &#9734;</small></div></div></div></div></div><div class=\"card text-center\"><div id=promoções><div class=card-header><h2>Promoções</h2></div><div class=card-body><h5 class=card-title>Veja aqui os detalhes de nossas promoções</h5><br><div class=\"card mb-3\"><div id=promo_nossa><img class=card-img-top src=./img/capa2.png alt=\"Promoção Cerveja Nossa\"><div class=card-body><h5 class=card-title>Cerveja Nossa 600ml (Vol. 4,4%) 24 unidades + Kit Churrasco</h5><h5>R$120,00</h5><p class=card-text> Na compra de uma grade de cerveja Nossa 600 ml 24 unidades ganhe um kit de churrasco com carnes de churrasco e carvão! </p></div></div></div><br><div class=\"card mb-3\"><div id=promo_refrigerantesaogeraldo><img class=card-img-top src=./img/capa3.png alt=\"Promoção Refrigerantes São Geraldo\"><div class=card-body><h5 class=card-title>Refrigerantes de Cajú São Geraldo com 50% de desconto!</h5><h5>R$ 4,50 (unidade 2L)</h5><p class=card-text>Compre qualquer refrigerante de cajú da marca São Geraldo 2L, 1.5L, 500ml, 250ml ou garrafa de vidro 350ml/450ml e ganhe 50% de desconto! </p></div></div></div><br><div class=\"card mb-3\"><div id=promo_triunfo><img class=card-img-top src=./img/capa4.png alt=\"Promoção Cachaça Triunfo\"><div class=card-body><h5 class=card-title>Cachaça Triunfo 275ml (Vol.40%) compre 1 e leve 2 </h5><h5>R$8,00</h5><p class=card-text> Na compra uma cachaça Triunfo ganhe outra totalmente de graça! </p></div></div></div></div></div></div></div></div></section><div class=footer-clean style=\"width: 100%;height: 146px;padding: 0;\"><footer style=\"background: rgb(253, 200, 68);color: rgb(0,0,0);\"><div class=container><div class=\"row justify-content-center\"><div class=\"col-sm-4 col-md-3 item\"><h3>Serviços</h3><ul><li><a href=#>Web design</a></li><li><a href=#>Desenvolvimento</a></li></ul></div><div class=\"col-sm-4 col-md-3 item\"><h3>Sobre</h3><ul><li><a href=#>Compania</a></li><li><a href=#>Time</a></li></ul></div><div class=\"col-lg-3 item social\"><a href=# class=socialm><i class=\"icon ion-email\"></i></a><a href=# class=socialm><i class=\"icon ion-social-facebook\"></i></a><a href=# class=socialm><i class=\"icon ion-social-whatsapp\"></i></a><a href=# class=socialm><i class=\"icon ion-social-instagram\"></i></a><p class=copyright>All Cool Distribuidora © 2020</p></div></div></div></footer></div><script src=https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js></script><script src=https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.2/js/bootstrap.bundle.min.js></script><script src=https://cdnjs.cloudflare.com/ajax/libs/jquery-easing/1.4.1/jquery.easing.min.js></script><script src=/assets/js/script.min.js?h=7a4e021987da3d38b958d06f38b30142></script>");

  init_components_tag({}, out);

  await_reorderer_tag({}, out, __component, "233");

  _preferred_script_location_tag({}, out);

  out.w("</body></html>");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.meta = {
    id: "/templateAllColl-main$1.0.0/templates/index.marko",
    tags: [
      "marko/src/core-tags/components/init-components-tag",
      "marko/src/core-tags/core/await/reorderer-renderer",
      "marko/src/core-tags/components/preferred-script-location-tag"
    ]
  };
