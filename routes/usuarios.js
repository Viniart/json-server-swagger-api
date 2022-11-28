/**
 * @swagger
 * components:
 *  schemas:
 *    Usuario:
 *      type: object
 *      properties:
 *        id:
 *          type: string
 *          description: Id do usuario (automaticamente gerado)
 *        nome:
 *          type: string
 *          description: Nome do Usuário
 *        senha:
 *          type: string
 *          description: Senha do Usuário
 *        email:
 *          type: string
 *          description: Email do Usuário
 *        telefone:
 *          type: string
 *          description: Telefone do Usuário
 *        foto:
 *          type: string
 *          description: Foto de Perfil do Usuário
 *      required:
 *        - nome
 *        - email
 *        - telefone
 *        - senha
 *      example:
 *        nome: Priscila
 *        email: priscila@email.com
 *        senha: pri123
 *        telefone: "44449999"
 *        foto: avatar.png
 */

/**
 * @swagger
 * tags:
 *  name: Usuarios
 *  description: Endpoint de Usuário
 */

/**
 * @swagger
 * /usuarios:
 *  get:
 *    summary: Retorna uma lista de Usuários
 *    tags: [Usuarios]
 *    responses:
 *      200:
 *        description: Lista de Usuários
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#/components/schemas/Usuario'
 */

/**
 * @swagger
 * /usuarios/{id}:
 *  get:
  *    summary: Seleciona um usuário por Id
  *    tags: [Usuarios]
  *    parameters:
  *      - name: id
  *        in: path
  *        description: ID do usuário a ser encontrado
  *        required: true
  *        type: integer
  *        format: int64
  *    responses:
  *      200:
  *        description: O Usuário selecionado
  *        content:
  *          application/json:
  *            schema:
  *            $ref: '#/components/schemas/Usuario'
  *      404:
  *        description: O Usuário não foi encontrado
  *        content:
  *          application/json:
  *            schema:
  *              $ref: '#/components/schemas/NaoEncontrado'
 */

/**
 * @swagger
 * /usuarios:
 *  post:
 *    summary: Cadastra um novo Usuário
 *    tags: [Usuarios]
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Usuario'
 *    responses:
 *      200:
 *        description: Usuário cadastrado com sucesso
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Usuario'
 *      500:
 *        description: Erro de servidor
 *
 */

 /**
  * @swagger
  * /usuarios/{id}:
  *  delete:
  *    summary: Deleta um Usuário pelo Id
  *    tags: [Usuarios]
  *    parameters:
  *      - name: id
  *        in: path
  *        description: ID do usuário a ser deletado
  *        required: true
  *        type: integer
  *        format: int64
  *    responses:
  *      200:
  *        description: O Usuário foi deletado
  *        content:
  *          application/json:
  *            schema:
  *            $ref: '#/components/schemas/Usuario'
  *      404:
  *        description: O Usuário não foi encontrado
  *        content:
  *          application/json:
  *            schema:
  *              $ref: '#/components/schemas/NaoEncontrado'
  *
  */
 
 /**
  * @swagger
  * /usuarios/{id}:
  *  put:
  *    summary: Atualiza um Usuario por Id
  *    tags: [Usuarios]
  *    parameters:
  *      - name: id
  *        in: path
  *        description: ID do usuário a ser editado
  *        required: true
  *        type: integer
  *        format: int64
  *    requestBody:
  *      required: true
  *      content:
  *        application/json:
  *          schema:
  *            $ref: '#/components/schemas/Usuario'
  *    responses:
  *      200:
  *        description: O Usuário atualizado
  *        content:
  *          application/json:
  *            schema:
  *            $ref: '#/components/schemas/Usuario'
  *      404:
  *        description: Usuário não encontrado
  *        content:
  *          application/json:
  *            schema:
  *              $ref: '#/components/schemas/NaoEncontrado'
  *
  */