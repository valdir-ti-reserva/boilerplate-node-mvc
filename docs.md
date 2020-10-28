# Requisitos

# login

- Rota "/login"
- Recebe o seguinte objeto:
  {
  email,
  password
  }
- Senha deverá ser criptografada com a biblioteca bcryptjs
- Validar se email e senha conferem
- Sempre retornar caso ocorra algum erro de autenticação
- Caso tenha sucesso, devolver um status 204 para o usuário

# Pensar no reset de senha

- Qual é o melhor método para restaurar a senha???
