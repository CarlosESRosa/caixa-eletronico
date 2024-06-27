
# Caixa eletrônico

Este projeto foi desenvolvido para simular um caixa eletrônico simples. A lógica foi otimizada para garantir a menor quantidade de cédulas possíveis para qualquer valor de saque permitido.

## Ferramentas utilizadas

- Typescript
- Node
- Express
- Jest

## Formato do Endpoint

- **URL**: `/api/saque`
- **Método**: POST
- **Entrada** (JSON):
  ```json
  {
    "valor": 380
  }
  ```
- **Saída** (JSON):
  ```json
  {
    "100": 3,
    "50": 1,
    "20": 1,
    "10": 1,
    "5": 0,
    "2": 0
  }
  ```



## Principais desafios

O projeto foi bem simples, um dos desafios foi elaborar a lógica para calcular a quantidade de cédulas do valor mencionado.

## Como rodar o projeto

- Clonar o projeto: `git clone git@github.com:CarlosESRosa/caixa-eletronico.git`.
- Acessar o repositório: `cd caixa-eletronico`.
- Instalar dependências: `npm install` ou `yarn install`.
- Rodar a API: `npm start` ou `yarn start`.

## Testes
- Para rodar os testes, rode o comando `npm test` na raiz do projeto.
