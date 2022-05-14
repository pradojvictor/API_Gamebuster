const express = require("express");  // importa o express usando a funão require do node
const routes = require("./routes");   //  importa as rotas

const app = express();   //inicializar o servido que esta contido em um objeto, usando o app para fazer alterções
const port = 3000;

app.use(express.json()); //para usar e converte json, // como estamos enviando json, precisamos ler em json,
app.use(express.urlencoded({extended : true}));
app.use(routes);         // fala pro servido, use essas rotas aqui.

app.listen(port, () => {
  console.log(`Servidor executando na porta: ${port}`);  //porta do servido, usando uma callback para ter uma respota visual 
});

 


//comando:
// npm init -y          => usado para criar um package.json nessesario para baixar/instalar o Express
// npm install express  => usado para baixar o pacote Express
// node app.js          => iniciar o servidor

//inicar servido com nodemon => npm run agoravai 
