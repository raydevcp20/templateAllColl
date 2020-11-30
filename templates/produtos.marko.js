// Compiled using marko@4.23.9 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/templateAllColl-main$1.0.0/templates/produtos.marko",
    marko_renderer = require("marko/src/runtime/components/renderer"),
    marko_loadTag = require("marko/src/runtime/helpers/load-tag"),
    init_components_tag = marko_loadTag(require("marko/src/core-tags/components/init-components-tag")),
    await_reorderer_tag = marko_loadTag(require("marko/src/core-tags/core/await/reorderer-renderer")),
    _preferred_script_location_tag = marko_loadTag(require("marko/src/core-tags/components/preferred-script-location-tag"));

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<!DOCTYPE html><html><head><meta charset=utf-8><meta name=viewport content=\"width=device-width, initial-scale=1.0, shrink-to-fit=no\"><title>Produtos</title><link rel=stylesheet href=/assets/css/style-extra.css><link rel=stylesheet href=/assets/bootstrap/css/bootstrap.min.css?h=a847d1fe541ca62044cce96cfd476e07><link rel=stylesheet href=https://fonts.googleapis.com/css?family=Lato><link rel=stylesheet href=https://fonts.googleapis.com/css?family=Catamaran:100,200,300,400,500,600,700,800,900><link rel=stylesheet href=https://fonts.googleapis.com/css?family=Muli><link rel=stylesheet href=https://fonts.googleapis.com/css?family=Aldrich><link rel=stylesheet href=https://fonts.googleapis.com/css?family=Alfa+Slab+One><link rel=stylesheet href=https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css><link rel=stylesheet href=https://cdnjs.cloudflare.com/ajax/libs/ionicons/2.0.1/css/ionicons.min.css><link rel=stylesheet href=/assets/css/styles.min.css?h=de827f96ca45107a1c2d70d42c066210></head><body id=page-top style=\"height: 645px;\"><nav class=\"navbar navbar-expand-lg navbar-light  fixed-top\" style=\"background-color: #FDC844;\"><a class=navbar-brand href=/ ><img id=logo src=/assets/img/logo.png alt=logo></a><button class=navbar-toggler type=button data-toggle=collapse data-target=#conteudoNavbarSuportado aria-controls=conteudoNavbarSuportado aria-expanded=false aria-label=\"Alterna navegação\"><span class=navbar-toggler-icon></span></button><div class=\"collapse navbar-collapse\" id=conteudoNavbarSuportado><ul class=\"navbar-nav mr-auto\"><li class=nav-item><a class=\"nav-link menu-letter\" href=/ >Catálogo</a></li><li class=\"nav-item menu-letter active\"><a class=nav-link href=/produtos>Produtos <span class=sr-only>(página atual)</span></a></li><li class=\"nav-item menu-letter\"><a class=nav-link href=/pagamentos>Carrinho</a></li></ul><form class=\"form-inline my-2 my-lg-0\"><a class=\"btn btn-outline-dark menu-letter\" href=/cadastro role=button id=hover style=\"background-color: #272319; border-radius: 5px; border: none; color: #ffffff; margin-right: 20px;\">CADASTRO</a><a class=\"btn btn-outline-dark menu-letter\" href=# role=button id=hover2 style=\"background-color: #ffffff; border-radius: 5px; border: none; color: #161313;\">LOGIN</a></form></div></nav><section class=bg-primary><div class=container><div style=\"margin-top: 50px;margin-bottom: 50px;\"><div class=container-fluid><div class=\"row d-flex d-sm-flex justify-content-center justify-content-sm-center\" style=\"width: 100%;\"><div class=col-md-3 style=\"max-width: 75%;min-width: 25%;\"><div class=\"card border rounded shadow\"><div class=\"border rounded shadow\" style=\"background-color: #f97242;\"><img class=img-fluid src=./assets/img/coca.jpeg?h=46c3cecf1e96b109ed11888937a27e0d></div><div class=\"card-body text-center\"><h4 class=card-title style=\"font-weight: bold;\">Coca-cola lata</h4><h6 class=\"text-muted card-subtitle mb-2\" style=\"color: rgb(6,6,6);\">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</h6><div><h4 style=\"font-weight: bold;\">R$ <span>3.00</span></h4><a href class=\"btn btn-light active btn-block addCarrinho\" style=\"font-size: 11px;font-weight: bold;color: rgb(3,3,3);background: #fdc844;\">Adicionar ao carrinho</a></div></div></div></div><div class=col-md-3 style=\"max-width: 75%;min-width: 25%;\"><div class=\"card border rounded shadow\"><div class=\"border rounded shadow\" style=\"background-color: #f97242;\"><img class=img-fluid src=./assets/img/9319610744862.jpg?h=47e9bf8416e0072c2d403ea63fc80413></div><div class=\"card-body text-center\"><h4 class=card-title style=\"font-weight: bold;\">Skol Beats -azul</h4><h6 class=\"text-muted card-subtitle mb-2\" style=\"color: rgb(6,6,6);\">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</h6><div><h4 style=\"font-weight: bold;\">R$ <span>5.00</span></h4><a href=# class=\"btn btn-light active btn-block addCarrinho\" style=\"font-size: 11px;font-weight: bold;color: rgb(3,3,3);background: #fdc844;\">Adicionar ao carrinho</a></div></div></div></div><div class=col-md-3 style=\"max-width: 75%;min-width: 25%;\"><div class=\"card border rounded shadow\"><div class=\"border rounded shadow\" style=\"background-color: #f97242;\"><img class=img-fluid src=./assets/img/skol.jpg?h=c009ad8ee883ec1491bacfc5f21c37b4></div><div class=\"card-body text-center\"><h4 class=card-title style=\"font-weight: bold;\">Skol lata</h4><h6 class=\"text-muted card-subtitle mb-2\" style=\"color: rgb(6,6,6);\">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</h6><div><h4 style=\"font-weight: bold;\">R$ <span>2.50</span></h4><a href=# class=\"btn btn-light active btn-block addCarrinho\" style=\"font-size: 11px;font-weight: bold;color: rgb(3,3,3);background: #fdc844;\">Adicionar ao carrinho</a></div></div></div></div><div class=col-md-3 style=\"max-width: 75%;min-width: 25%;\"><div class=\"card border rounded shadow\"><div class=\"border rounded shadow\" style=\"background-color: #f97242;\"><img class=img-fluid src=./assets/img/suco.jpg?h=8252cfa66bc783e911680b8176807403></div><div class=\"card-body text-center\"><h4 class=card-title style=\"font-weight: bold;\">Suco garrafa do bem</h4><h6 class=\"text-muted card-subtitle mb-2\" style=\"color: rgb(6,6,6);\">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</h6><div><h4 style=\"font-weight: bold;\">R$ <span>7.00</span></h4><a href=# class=\"btn btn-light active btn-block addCarrinho\" style=\"font-size: 11px;font-weight: bold;color: rgb(3,3,3);background: #fdc844;\">Adicionar ao carrinho</a></div></div></div></div></div></div></div></div></section><div class=footer-clean style=\"width: 100%;height: 146px;padding: 0;\"><footer style=\"background: rgb(250, 250, 250);color: rgb(0,0,0);\"><div class=container><div class=\"row justify-content-center\"><div class=\"col-sm-4 col-md-3 item\"><h3>Serviços</h3><ul><li><a href=#>Web design</a></li><li><a href=#>Desenvolvimento</a></li></ul></div><div class=\"col-sm-4 col-md-3 item\"><h3>Sobre</h3><ul><li><a href=#>Compania</a></li><li><a href=#>Time</a></li></ul></div><div class=\"col-lg-3 item social\"><a href=# class=socialm><i class=\"icon ion-email\"></i></a><a href=# class=socialm><i class=\"icon ion-social-facebook\"></i></a><a href=# class=socialm><i class=\"icon ion-social-whatsapp\"></i></a><a href=# class=socialm><i class=\"icon ion-social-instagram\"></i></a><p class=copyright>All Cool Distribuidora © 2020</p></div></div></div></footer></div><script src=/scripts/index2.js></script><script src=https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js></script><script src=https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.2/js/bootstrap.bundle.min.js></script><script src=https://cdnjs.cloudflare.com/ajax/libs/jquery-easing/1.4.1/jquery.easing.min.js></script><script src=/assets/js/script.min.js?h=7a4e021987da3d38b958d06f38b30142></script>");

  init_components_tag({}, out);

  await_reorderer_tag({}, out, __component, "110");

  _preferred_script_location_tag({}, out);

  out.w("</body></html>");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.meta = {
    id: "/templateAllColl-main$1.0.0/templates/produtos.marko",
    tags: [
      "marko/src/core-tags/components/init-components-tag",
      "marko/src/core-tags/core/await/reorderer-renderer",
      "marko/src/core-tags/components/preferred-script-location-tag"
    ]
  };