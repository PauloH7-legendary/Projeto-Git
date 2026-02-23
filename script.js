// 1. Selecionamos o botão utilizando sua classe no CSS
const botaoWhatsApp = document.querySelector('.btn-whatsapp');

// 2. Aqui é um "ouvinte" que deteta quando o usuário clica no botão
botaoWhatsApp.addEventListener('click', function() {
    
    // 3. Mostra um alerta simples no navegador
    alert('Olá! Nossa equipe está preparando seus treinos exclusivos. Em breve você será redirecionado para o nosso WhatsApp.');

    // 4. Escrevi aqui uma mensagem no "Console de Depuração"
    console.log('O usuário clicou no botão de início!');
});