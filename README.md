# README - Monitor de Produtos Linha Bruna Tavares

## 📌 Descrição do Projeto
Este projeto monitora os produtos disponíveis no site da Linha Bruna Tavares e envia um e-mail com a lista atualizada dos itens encontrados.

## ✨ Funcionalidades
- Web scraping do site [Linha Bruna Tavares](https://linhabrunatavaress.onl/)
- Extração dos títulos dos produtos
- Envio automático por e-mail da lista de produtos
- Formatação HTML do e-mail enviado

## ⚙️ Pré-requisitos
- Node.js instalado (versão 14 ou superior)
- Conta de e-mail SMTP para envio
- Acesso à internet para scraping

## 🛠️ Configuração
1. Clone o repositório:
```bash
git clone [URL_DO_REPOSITORIO]
cd [NOME_DO_DIRETORIO]
```

2. Instale as dependências:
```bash
npm install
```

3. Crie um arquivo `.env` na raiz do projeto com as seguintes variáveis:
```env
EMAIL_HOST=smtp.seuprovedor.com
EMAIL_PORT=587
EMAIL_USER=seuemail@provedor.com
EMAIL_PASS=suasenha
EMAIL_TO=destinatario@provedor.com
```

## 🚀 Como Usar
Execute o script com o comando:
```bash
node index.js
```

O script irá:
1. Acessar o site da Linha Bruna Tavares
2. Extrair os produtos disponíveis
3. Exibir no console os produtos encontrados
4. Enviar um e-mail com a lista completa

## 📦 Dependências
- `dotenv` - Para gerenciar variáveis de ambiente
- `node-fetch` - Para fazer requisições HTTP
- `cheerio` - Para análise e web scraping de HTML
- `nodemailer` - Para envio de e-mails

