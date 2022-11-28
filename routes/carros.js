/**
 * @swagger
 * components:
 *  schemas:
 *    Carro:
 *      type: object
 *      properties:
 *        id:
 *          type: string
 *          description: Id do carro (automaticamente gerado)
 *        nome:
 *          type: string
 *          description: Nome do Carro
 *        portas:
 *          type: string
 *          description: Número de portas do carro
 *        npessoas:
 *          type: string
 *          description: Número de pessoas que o carro suporta
 *        locadoraId:
 *          type: string
 *          description: Id da locadora a qual o carro é atrelado
 *        tipoCarroId:
 *          type: string
 *          description: Id do tipo de carro
 *      required:
 *        - nome
 *        - portas
 *        - npessoas
 *        - locadoraId
 *        - tipoCarroId
 *      example:
 *        nome: Ford Focus
 *        portas: 4
 *        npessoas: 5
 *        locadoraId: 1
 *        tipoCarroId : 2
 */

/**
 * @swagger
 * tags:
 *  name: Carros
 *  description: Endpoint de Carros
 */

/**
 * @swagger
 * /carros:
 *  get:
 *    summary: Retorna uma lista de carros
 *    tags: [Carros]
 *    responses:
 *      200:
 *        description: Lista de carros
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#/components/schemas/Carro'
 */

/**
 * @swagger
 * /carros?_expand=locadora:
 *  get:
 *    summary: Retorna uma lista de carros com suas locadoras
 *    tags: [Carros]
 *    responses:
 *      200:
 *        description: Lista de carros
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#/components/schemas/Carro'
 */

/**
 * @swagger
 * /carros?_expand=tipoCarro:
 *  get:
 *    summary: Retorna uma lista de carros com os seus tipos
 *    tags: [Carros]
 *    responses:
 *      200:
 *        description: Lista de carros
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#/components/schemas/Carro'
 */

/**
 * @swagger
 * /carros/{id}:
 *  get:
  *    summary: Seleciona um carro por Id
  *    tags: [Carros]
  *    parameters:
  *      - name: id
  *        in: path
  *        description: ID do carro a ser retornado
  *        required: true
  *        type: integer
  *        format: int64
  *    responses:
  *      200:
  *        description: O carro selecionado
  *        content:
  *          application/json:
  *            schema:
  *            $ref: '#/components/schemas/Carro'
  *      404:
  *        description: O carro não foi encontrado
  *        content:
  *          application/json:
  *            schema:
  *              $ref: '#/components/schemas/NaoEncontrado'
 */

/**
 * @swagger
 * /carros:
 *  post:
 *    summary: Cadastra um novo carro
 *    tags: [Carros]
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Carro'
 *    responses:
 *      200:
 *        description: Carro cadastrado com sucesso
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Carro'
 *      500:
 *        description: Erro de servidor
 *
 */

 /**
  * @swagger
  * /carros/{id}:
  *  delete:
  *    summary: Deleta um carro pelo Id
  *    tags: [Carros]
  *    parameters:
  *      - name: id
  *        in: path
  *        description: ID do carro a ser deletado
  *        required: true
  *        type: integer
  *        format: int64
  *    responses:
  *      200:
  *        description: O carro foi deletado
  *        content:
  *          application/json:
  *            schema:
  *            $ref: '#/components/schemas/Carro'
  *      404:
  *        description: O carro não foi encontrado
  *        content:
  *          application/json:
  *            schema:
  *              $ref: '#/components/schemas/NaoEncontrado'
  *
  */
 
 /**
  * @swagger
  * /carros/{id}:
  *  put:
  *    summary: Atualiza um carro por Id
  *    tags: [Carros]
  *    parameters:
  *      - name: id
  *        in: path
  *        description: ID do carro a ser editado
  *        required: true
  *        type: integer
  *        format: int64
  *    requestBody:
  *      required: true
  *      content:
  *        application/json:
  *          schema:
  *            $ref: '#/components/schemas/Carro'
  *    responses:
  *      200:
  *        description: O carro atualizado
  *        content:
  *          application/json:
  *            schema:
  *            $ref: '#/components/schemas/Carro'
  *      404:
  *        description: Carro não encontrado
  *        content:
  *          application/json:
  *            schema:
  *              $ref: '#/components/schemas/NaoEncontrado'
  *
  */