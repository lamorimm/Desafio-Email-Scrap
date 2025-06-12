require('dotenv').config();
const fetch = require('node-fetch'); 
const cheerio = require('cheerio');
const nodemailer = require('nodemailer');

const url = 'https://linhabrunatavaress.onl/';

async function fetchProdutos() {
  try {
    const response = await fetch(url);
    const html = await response.text();
    const $ = cheerio.load(html);

    const produtos = [];

    $('a.product-item-meta__title').each((i, el) => {
      const titulo = $(el).text().trim();
      if (titulo) {
        produtos.push(titulo);
      }
    });

    return produtos;
  } catch (error) {
    console.error('Erro ao buscar produtos:', error);
    return [];
  }
}

const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: Number(process.env.EMAIL_PORT),
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

async function sendEmail(produtos) {
  try {
    let htmlContent = '<h2>Produtos encontrados na Linha Bruna Tavares</h2><ul>';

    produtos.forEach((titulo, i) => {
      htmlContent += `<li>${titulo}</li>`;
    });

    htmlContent += '</ul>';

    const info = await transporter.sendMail({
      from: `"Notícias" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_TO,
      subject: 'Produtos linha bruna tavares',
      html: htmlContent,
    });

    console.log('E-mail enviado: %s', info.messageId);
  } catch (error) {
    console.error('Erro ao enviar o e-mail:', error);
  }
}

async function main() {
  const produtos = await fetchProdutos();
  if (produtos.length > 0) {
    console.log('Produtos encontrados:');
    produtos.forEach((titulo, i) => {
      console.log(`${i + 1}. ${titulo}`);
    });
    await sendEmail(produtos);
  } else {
    console.log('Nenhum produto encontrado.');
  }
}

main();