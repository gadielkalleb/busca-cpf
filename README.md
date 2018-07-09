**Teste maxmilhas**

## Uso
* Basta rodar os comandos:
* `npm install` ou `yarn`
* para desenvolvimento `npm run devstart` ou `yarn run devstart`
* para produção rode `npm run start` ou `yarn run start`

## Projeto
* Desenvolvi o projeto de forma simples, usando poucos modulos. Criei uma estrutura padrão do express que foi a minha base.
* Usei um modulo para criar as mascaras do cpf, e usei sequelize com sqlite3 como banco de dados, assim o banco esta embutido com o projeto.
* no Front usei um template do bootstrap, só criei uma uma função do lado front que impede de salvar os dados que não correspondem ao esperado, dessa forma eu dou um `disabled` no botão salvar e pesquisar.
* O Contator de pesquisas é muito simples, somente um contador que conta toda vez que o usuario faz uma pesquisa, assim toda vez que a aplicação é resetada ele reinicia.
* O projeto em si tem um o sistema de crud completo.
* Usei `ejs` como template engine.
* criei uma imagem desse ambiente node que esta no Dockerfile.

## Rotas 
* rota padrão com status de pesquisas e quantidades de cpf na blacklist `http://localhost:3000`.
* rota dos cpf free `http://localhost:3000/consultas/whitelist`.
* rota dos cpf block `http://localhost:3000/consultas/blacklist`.
* rota de create `http://localhost:3000/consultas/create`.
* rota de update  `http://localhost:3000/consultas/update/:id`.
* rota de delete `http://localhost:3000/consultas/delete/:id`.
* rota de pesquisa `http://localhost:3000/search?cpf=`.
* rota de pesquisa voltando json `http://localhost:3000/search/v1?cpf=`.