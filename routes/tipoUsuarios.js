/**
 * @swagger
 * components:
 *  schemas:
 *    tipoUsuario:
 *      type: object
 *      properties:
 *        id:
 *          type: string
 *          description: Id do tipo de usuário (automaticamente gerado)
 *        tipo:
 *          type: string
 *          description: Nome do Tipo de Usuário
 *      required:
 *        - tipo
 *      example:
 *        tipo: Comum
 */

/**
 * @swagger
 * tags:
 *  name: tipoUsuarios
 *  description: Endpoint de Tipos de Usuários
 */

/**
 * @swagger
 * /tipoUsuarios:
 *  get:
 *    summary: Retorna uma lista de Tipos de Usuários
 *    tags: [tipoUsuarios]
 *    responses:
 *      200:
 *        description: Lista de Tipos de Usuários
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#/components/schemas/Carro'
 */


/**
 * @swagger
 * /tipoUsuarios/{id}:
 *  get:
  *    summary: Seleciona um Tipo de Usuário por Id
  *    tags: [tipoUsuarios]
  *    parameters:
  *      - name: id
  *        in: path
  *        description: ID do tipo de usuário a ser retornado
  *        required: true
  *        type: integer
  *        format: int64
  *    responses:
  *      200:
  *        description: O tipo selecionado
  *        content:
  *          application/json:
  *            schema:
  *            $ref: '#/components/schemas/tipoUsuarios'
  *      404:
  *        description: O tipo de usuário não foi encontrado
  *        content:
  *          application/json:
  *            schema:
  *              $ref: '#/components/schemas/NaoEncontrado'
 */
