/**
 * @swagger
 * components:
 *  schemas:
 *    tipoCarro:
 *      type: object
 *      properties:
 *        id:
 *          type: string
 *          description: Id do tipoCarro (automaticamente gerado)
 *        nome:
 *          type: string
 *          description: Nome do tipo do carro
 *      required:
 *        - nome
 *      example:
 *        nome: popular
 */

/**
 * @swagger
 * tags:
 *  name: tipoCarros
 *  description: Endpoint de tipo de carro
 */

/**
 * @swagger
 * /tipoCarros:
 *  get:
 *    summary: Retorna uma lista de tipos de carros
 *    tags: [tipoCarros]
 *    responses:
 *      200:
 *        description: Lista de tipos de carros
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#/components/schemas/tipoCarro'
 */

/**
 * @swagger
 * /tipoCarros/{id}:
 *  get:
  *    summary: Seleciona um tipo de carro por Id
  *    tags: [tipoCarros]
  *    parameters:
  *      - name: id
  *        in: path
  *        description: ID do tipo de carro a ser encontrado
  *        required: true
  *        type: integer
  *        format: int64
  *    responses:
  *      200:
  *        description: O tipo de carro selecionado
  *        content:
  *          application/json:
  *            schema:
  *            $ref: '#/components/schemas/tipoCarro'
  *      404:
  *        description: O tipo de carro não foi encontrado
  *        content:
  *          application/json:
  *            schema:
  *              $ref: '#/components/schemas/NaoEncontrado'
 */

/**
 * @swagger
 * /tipoCarros:
 *  post:
 *    summary: Cadastra um novo tipo de carro
 *    tags: [tipoCarros]
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/tipoCarro'
 *    responses:
 *      200:
 *        description: Tipo de carro cadastrado com sucesso
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/tipoCarro'
 *      500:
 *        description: Erro de servidor
 *
 */

 /**
  * @swagger
  * /tipoCarros/{id}:
  *  delete:
  *    summary: Deleta um tipo de carro pelo Id
  *    tags: [tipoCarros]
  *    parameters:
  *      - name: id
  *        in: path
  *        description: ID do tipo de carro a ser deletado
  *        required: true
  *        type: integer
  *        format: int64
  *    responses:
  *      200:
  *        description: O tipo de carro foi deletado
  *        content:
  *          application/json:
  *            schema:
  *            $ref: '#/components/schemas/tipoCarro'
  *      404:
  *        description: O tipo de carro não foi encontrado
  *        content:
  *          application/json:
  *            schema:
  *              $ref: '#/components/schemas/NaoEncontrado'
  *
  */
 
 /**
  * @swagger
  * /tipoCarros/{id}:
  *  put:
  *    summary: Atualiza um tipo de carro por Id
  *    tags: [tipoCarros]
  *    parameters:
  *      - name: id
  *        in: path
  *        description: ID do tipo de carro a ser atualizado
  *        required: true
  *        type: integer
  *        format: int64
  *    requestBody:
  *      required: true
  *      content:
  *        application/json:
  *          schema:
  *            $ref: '#/components/schemas/tipoCarro'
  *    responses:
  *      200:
  *        description: O tipo de carro atualizado
  *        content:
  *          application/json:
  *            schema:
  *            $ref: '#/components/schemas/tipoCarro'
  *      404:
  *        description: Tipo de carro não encontrado
  *        content:
  *          application/json:
  *            schema:
  *              $ref: '#/components/schemas/NaoEncontrado'
  *
  */