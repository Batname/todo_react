"use strict";

import koa from 'koa';
import co from 'co';
import views from 'co-views';
import cors from "koa-cors";
import serve from 'koa-static';
import route from 'koa-route';


let app = koa();

let render = views(__dirname + "/assets", { map: { html: 'jade' }});

app.use(cors({
  maxAge: 1000,
  credentials: true,
  methods: 'GET, HEAD, OPTIONS, PUT, POST, DELETE',
  headers: 'Origin, X-Requested-With, Content-Type, Accept, Authorization, Access-Control-Allow-Origin'
}));

app.init = co.wrap(function index() {
  app.listen(process.env.PORT);
  console.log("listening on port " + process.env.PORT);
});

app.use(serve('public'));

app.use(route.get("/", function *() {
  let body, data;
  body = yield render('index.jade', { locale: process.env.LOCALE , title: "Flux • TodoMVC"});
  this.status = 201;
  this.body = body;
}));

app.use(function *(next) {
  if (this.path.substr(0, 5).toLowerCase() === '/api/') {
    yield next;
    return;
  } else if (this.path.indexOf('.') !== -1) {
    return;
  } else {
    this.status = 201;
    this.body = yield render('index.jade', { locale: process.env.LOCALE });
  }
});

export default app;
