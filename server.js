const express = require('express');
const {graphqlHTTP} = require('express-graphql');
const {buildSchema} = require('graphql');

// Definicao do schema GraphQL
const schema = buildSchema(`
  type Query {
    saudacao: String
    usuario(id: ID!): Usuario
  }

  type Usuario {
    id: ID!
    nome: String!
    email: String!
    idade: Int
    profissao: String!
  }

  type Mutation {
    criarUsuario(nome: String!, email: String!, idade: Int, profissao: String!): Usuario
  }
`);

//Definicao dos resolvers

const root = {
    saudacao: () => 'Opa, baum demais? Curtindo o curso de APIs e WebServices do Claudio?!',
    usuario: ({id}) => usuarios.find(usuario => usuario.id === id),
    criarUsuario: ({nome, email, idade, profissao}) => {
        const novoUsuario = {
            id: String(usuarios.length + 1),
            nome,
            email,
            idade,
            profissao
        };
        usuarios.push(novoUsuario);
        return novoUsuario;
    }
};

//Exemplo de banco de dados em memoria

let usuarios = [
    {id: '1', nome: 'Jose Nonato da Cruz', email: 'raimundo.nonato@teste.br', idade: 58, profissao: 'Mestre de Obras'},
    {id: '2', nome: 'Carl Sagan', email: 'carl.sagan@teste.com.br', idade: 62, profissao: 'Astronomo/Astrofisico'},
    {id: '3', nome: 'Dave Mustaine', email: 'dave.mustaine@teste.com.br', idade: 64, profissao: 'Musico fundador da melhor banda de metal de todos os tempos'},
    {id: '4', nome: 'Clara Nunes', email: 'clara.nunes@teste.com.br', idade: 41, profissao: 'Cantora/Lenda do samba brasileiro'},
]

// Configuracao do servidor Express

const app = express();
app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true
}));

//Inicializacao do server
app.listen(4000, () => console.log('Servidor GraphQL rodando em http://localhost:4000/graphql'));