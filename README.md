# Exemplo simples de API com GraphQL
> Exemplo simples apresentando GraphQL com Node.js + Express (biblioteca `express-graphql`), para demonstração na disciplina de APIs & Web Services do curso de pós graduação em engenharia de software da PUC Minas

> Este exemplo foi baseado no artigo de Ravi Patel: [_A Beginner’s Guide to GraphQL: Understanding the Basics with an Example_](https://medium.com/@ravipatel.it/a-beginners-guide-to-graphql-understanding-the-basics-with-an-example-4c40d84c320a)

## Configuraçãoes básicas

### 1. Configurando o projeto

- Garanta que você tenha o Node.js instalado em sua máquina. Caso não tenha, você pode obter a última versão atráves da página oficial do [Node.js](https://nodejs.org/en/download)

- Crie um novo projeto Node.js:
```
mkdir graphql-api-example
cd graphql-api-example
npm init -y
```

### 2. Instale as dependências
`npm install express graphql express-graphql`

### 3. Criando e executando a API GraphQL
- Utilize o arquivo disponível neste repositório e cole-o dentro da pasta `graphql-api-example` criada
- Execute o servidor com o seguinte comando: `node server.js` e veja o mesmo rodando em `http://localhost:4000/graphql` através da interface GraphiQL
