/**
 * @swagger
 * components:
 *  schemas:
 *    Locadora:
 *      type: object
 *      properties:
 *        id:
 *          type: string
 *          description: Id da locadora (automaticamente gerado)
 *        nome:
 *          type: string
 *          description: Nome da Locadora
 *        endereco:
 *          type: string
 *          description: Endereço da Locadora
 *        telefone:
 *          type: string
 *          description: Telefone da Locadora
 *      required:
 *        - nome
 *        - endereco
 *        - telefone
 *      example:
 *        nome: Dois Irmãos
 *        endereco: Avenida da Glória, 254
 *        telefone: "1188888888"
 */

/**
 * @swagger
 * tags:
 *  name: Locadoras
 *  description: Endpoint de Locadora
 */

/**
 * @swagger
 * /locadoras:
 *  get:
 *    summary: Retorna uma lista de Locadoras
 *    tags: [Locadoras]
 *    responses:
 *      200:
 *        description: Lista de Locadoras
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#/components/schemas/Locadora'
 */

/**
 * @swagger
 * /locadoras:
 *  post:
 *    summary: Cadastra uma nova locadora
 *    tags: [Locadoras]
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Locadora'
 *    responses:
 *      200:
 *        description: locadora cadastrada com sucesso
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Locadora'
 *      500:
 *        description: Erro de servidor
 *
 */

/**
 * @swagger
 * /locadoras/{id}:
 *  get:
  *    summary: Seleciona uma locadora por Id
  *    tags: [Locadoras]
  *    parameters:
  *      - name: id
  *        in: path
  *        description: ID da locadora a ser encontrada
  *        required: true
  *        type: integer
  *        format: int64
  *    responses:
  *      200:
  *        description: A locadora selecionada
  *        content:
  *          application/json:
  *            schema:
  *            $ref: '#/components/schemas/Locadora'
  *      404:
  *        description: A locadora não foi encontrada
  *        content:
  *          application/json:
  *            schema:
  *              $ref: '#/components/schemas/NaoEncontrado'
 */

 /**
  * @swagger
  * /Locadoras/{id}:
  *  delete:
  *    summary: Deleta uma locadora pelo Id
  *    tags: [Locadoras]
  *    parameters:
  *      - name: id
  *        in: path
  *        description: ID da locadora a ser deletada
  *        required: true
  *        type: integer
  *        format: int64
  *    responses:
  *      200:
  *        description: A locadora foi deletado
  *        content:
  *          application/json:
  *            schema:
  *            $ref: '#/components/schemas/Locadora'
  *      404:
  *        description: A locadora não foi encontrada
  *        content:
  *          application/json:
  *            schema:
  *              $ref: '#/components/schemas/NaoEncontrado'
  *
  */
 
 /**
  * @swagger
  * /Locadoras/{id}:
  *  put:
  *    summary: Atualiza uma Locadora por Id
  *    tags: [Locadoras]
  *    parameters:
  *      - name: id
  *        in: path
  *        description: ID da locadora a ser editada
  *        required: true
  *        type: integer
  *        format: int64
  *    requestBody:
  *      required: true
  *      content:
  *        application/json:
  *          schema:
  *            $ref: '#/components/schemas/Locadora'
  *    responses:
  *      200:
  *        description: A locadora atualizado
  *        content:
  *          application/json:
  *            schema:
  *            $ref: '#/components/schemas/Locadora'
  *      404:
  *        description: locadora não encontrada
  *        content:
  *          application/json:
  *            schema:
  *              $ref: '#/components/schemas/NaoEncontrado'
  *
  */