<h1 align="center">Cypress-automation-store com Cucumber</h1>
<p align="center">
     <img src="http://img.shields.io/static/v1?label=STATUS&message=EM%20DESENVOLVIMENTO&color=RED&style=for-the-badge"/>
<p/>

### Tópicos

:small_blue_diamond:[Descrição do projeto](#descrição-do-projeto)

:small_blue_diamond:[Acesso ao projeto](#acesso-ao-projeto)

:small_blue_diamond:[Abrir e rodar o projeto](#abrir-e-rodar-o-projeto)

:small_blue_diamond:[Como rodar os testes](#como-rodar-os-testes)


## Descrição do projeto


Projeto para treinamento de automação utilizando Cypress e Cucumber para automação da pagina web http://automationpractice.com/index.php

## Acesso ao projeto

Rodando o comando a baixo você pode clona o projeto para o seu ambiente local
```
git clone https://github.com/luislipinski/Cypress-automation-store.git
```

## Abrir e rodar o projeto
Após clonar o projeto para a pasta de sua escolha, você abre a pasta Cypress-automation-store no terminal e instala o node

<strong>Linux:</strong>

No terminal primeiro faça a instalação do curl:

```
sudo apt-get install curl
```

Em seguida, execute o script abaixo para adicionar o repositório do Node:

```
curl -fsSL https://deb.nodesource.com/setup_lts.x | sudo -E bash -
```
E por fim, para instalar o Node execute:

```
sudo apt-get install -y nodejs
```
<strong>Windows e MAC </strong>

fazer o dowload através desse link
https://nodejs.org/en/.

Após a intalação do node dentro da pasta do arquivo do projeto você precisa rodar o seguinte comando

```
npm install
```

## Como Rodar os testes

Primeiro antes de rodar os testes você precisa trocar o email para o teste de cadastro pois se for um email ja existente ele vai falhar o teste para isso você precisa 

1)Abrir a pasta cypress

![image](https://user-images.githubusercontent.com/98597288/185705297-ca8a62fd-85c4-45db-b24d-cadb697f0bc6.png)


2)Dentro da pasta cypress você abre a pasta fixture e a data

![image](https://user-images.githubusercontent.com/98597288/185705380-9b14213d-f171-4dd1-8bc2-8408cbbf680e.png)


3) Vocẽ vai acessar o arquivo RegisterAccountData.json

![image](https://user-images.githubusercontent.com/98597288/185705442-7ebfd1bb-e6df-444a-bc50-96969648da63.png)


4)Dentro dessse arquivo você altera o arquivo email para outro email qualquer valido que nunca foi usado nessa pagina

![image](https://user-images.githubusercontent.com/98597288/185705675-6d2be63c-7942-4ef0-8768-f26cb04b54dc.png)


Existe duas maneiras de rodar os testes:
A primeira você pode rodar apenas pelo terminal onde não sera possivel verificar a parte grafica durante a execução e rodara todos os testes de uma unica vez produzindo evidencia em video
esse teste você pode rodar com o seguinte comando

```
npx cypress run
```
e o teste quando finalizar vai aparecer da seguinte forma:
![image](https://user-images.githubusercontent.com/98597288/185704885-11cb5c5e-dcd0-42c8-95d2-547fa6e632e7.png)

Caso você queira rodar o teste vendo ele acontecer pode rodar o seguinte comando

```
npx cypress open
```
Quando executar esse comando vai abrir o cypress

![image](https://user-images.githubusercontent.com/98597288/185706136-715ae3c6-2d1f-45ff-81df-05776f562337.png)

Após abertura desse arquivo você pode clicar em um dos testes disponiveis ali para executar

Qualquer dúvida estou a disposição.


