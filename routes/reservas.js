/**
 * @swagger
 * components:
 *  schemas:
 *    Reserva:
 *      type: object
 *      properties:
 *        id:
 *          type: string
 *          description: Id da reserva (automaticamente gerado)
 *        data:
 *          type: string
 *          description: Data da reserva
 *        horario:
 *          type: string
 *          description: Horário da reserva
 *        dataentrega:
 *          type: string
 *          description: Data de retorno do veículo
 *        usuarioId:
 *          type: string
 *          description: Id da usuário a qual a reserva é atrelada
 *        carroId:
 *          type: string
 *          description: Id do carro alugado
 *      required:
 *        - data
 *        - horario
 *        - dataentrega
 *        - usuarioId
 *        - carroId
 *      example:
 *        data: 2022-05-20
 *        horario: 15:00
 *        dataentrega: 2022-05-25
 *        usuarioId: 1
 *        carroId: 1
 */

/**
 * @swagger
 * tags:
 *  name: Reservas
 *  description: Endpoint de Reservas
 */

/**
 * @swagger
 * /reservas:
 *  get:
 *    summary: Retorna uma lista de reservas
 *    tags: [Reservas]
 *    responses:
 *      200:
 *        description: Lista de reservas
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#/components/schemas/Reserva'
 */

/**
 * @swagger
 * /reservas?_expand=usuario:
 *  get:
 *    summary: Retorna uma lista de reservas com seus usuários
 *    tags: [Reservas]
 *    responses:
 *      200:
 *        description: Lista de reservas
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#/components/schemas/Reserva'
 */

/**
 * @swagger
 * /reservas?_expand=carro:
 *  get:
 *    summary: Retorna uma lista de reservas com o carro atrelado
 *    tags: [Reservas]
 *    responses:
 *      200:
 *        description: Lista de reservas
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#/components/schemas/Reserva'
 */

/**
 * @swagger
 * /reservas/{id}:
 *  get:
  *    summary: Seleciona uma reserva por Id
  *    tags: [Reservas]
  *    parameters:
  *      - name: id
  *        in: path
  *        description: ID da reserva a ser encontrada
  *        required: true
  *        type: integer
  *        format: int64
  *    responses:
  *      200:
  *        description: A reserva selecionada
  *        content:
  *          application/json:
  *            schema:
  *            $ref: '#/components/schemas/Reserva'
  *      404:
  *        description: A reserva não foi encontrada
  *        content:
  *          application/json:
  *            schema:
  *              $ref: '#/components/schemas/NaoEncontrado'
 */

/**
 * @swagger
 * /reservas:
 *  post:
 *    summary: Cadastra uma nova reserva
 *    tags: [Reservas]
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Reserva'
 *    responses:
 *      200:
 *        description: Reserva cadastrada com sucesso
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Reserva'
 *      500:
 *        description: Erro de servidor
 *
 */

 /**
  * @swagger
  * /reservas/{id}:
  *  delete:
  *    summary: Deleta uma reserva pelo Id
  *    tags: [Reservas]
  *    parameters:
  *      - name: id
  *        in: path
  *        description: ID da reserva a ser deletada
  *        required: true
  *        type: integer
  *        format: int64
  *    responses:
  *      200:
  *        description: A reserva foi deletada
  *        content:
  *          application/json:
  *            schema:
  *            $ref: '#/components/schemas/Reserva'
  *      404:
  *        description: A reserva não foi encontrada
  *        content:
  *          application/json:
  *            schema:
  *              $ref: '#/components/schemas/NaoEncontrado'
  *
  */
 
 /**
  * @swagger
  * /reservas/{id}:
  *  put:
  *    summary: Atualiza uma reserva por Id
  *    tags: [Reservas]
  *    parameters:
  *      - name: id
  *        in: path
  *        description: ID doa reserva a ser atualizada
  *        required: true
  *        type: integer
  *        format: int64
  *    requestBody:
  *      required: true
  *      content:
  *        application/json:
  *          schema:
  *            $ref: '#/components/schemas/Reserva'
  *    responses:
  *      200:
  *        description: A reserva atualizada
  *        content:
  *          application/json:
  *            schema:
  *            $ref: '#/components/schemas/Reserva'
  *      404:
  *        description: Reserva não encontrada
  *        content:
  *          application/json:
  *            schema:
  *              $ref: '#/components/schemas/NaoEncontrado'
  *
  */