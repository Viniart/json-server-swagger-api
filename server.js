const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 3200;

const swaggerJsdoc = require("swagger-jsdoc"),
    swaggerUi = require("swagger-ui-express");

const options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "API Carros",
            version: "0.1.0",
            description:
                "API Para o Desafio Final (Documentada Usando Swagger)"
        },
        servers: [
            {
                url: "",
            },
        ],
    },
    apis: ["./routes/carros.js", "./routes/usuarios.js",
    "./routes/locadoras.js", "./routes/tipoCarros.js",
    "./routes/naoEncontrado.js", "./routes/reservas.js",
    "./routes/tipoUsuarios.js"],
};

const specs = swaggerJsdoc(options);
server.use(
    "/api-docs",
    swaggerUi.serve,
    swaggerUi.setup(specs)
);

server.use(middlewares);
server.use(router);

server.listen(port);