/**
 * NOTAS
 *
 * METODOS HTTP:
 * *GET: Buscar/listar uma informacao do back-end
 * *POST: Criar uma informacao no back-end
 * *PUT: Alterar uma informacao no back-end
 * *DELETE: Deletar uma informacao no back-end
 *
 * Tipos de parametros:
 *
 * Query params: Parametros nomeados enviados na rodta apos "?" (ex. Filtros, paginacao)
 * Route Params: Parametros utilzados para identificar recursos
 * Request Body: Corpo da requisicao, utilizado para criar ou alterar recursos
 *
 * Bancos de dados:
 * SQL: MySQL, SQLite, PostreSQL, Oracle, MS SQL Server
 * NoSQL: MongoDB, CouchDB
 *
 * Driver: Select * from users
 * Query Builder: table('users').select('*').where()
 */

const express = require("express");
const cors = require("cors");
const routes = require("./routes");

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);
