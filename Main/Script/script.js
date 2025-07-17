document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contactForm');
    const outputContent = document.getElementById('outputContent');
    const formOutput = document.getElementById('formOutput');

    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Impede o envio padrão do formulário

            const nome = document.getElementById('nome').value;
            const email = document.getElementById('email').value;
            const assunto = document.getElementById('assunto').value;
            const fasElement = document.querySelector('input[name="fas"]:checked');
            const fas = fasElement ? fasElement.value : 'Não informado';
            const mensagem = document.getElementById('mensagem').value;

            // Coleta os dados e os formata
            const formData = {
                "Nome Completo": nome,
                "E-mail": email,
                "Assunto": assunto,
                "É fã de Marceline?": fas,
                "Mensagem": mensagem
            };

            // Exibe os dados no elemento <pre>
            outputContent.textContent = JSON.stringify(formData, null, 2);
            formOutput.style.display = 'block'; // Mostra a área de saída
        });

        // O botão de limpar (type="reset") já tem sua funcionalidade padrão
        // Se precisar de algo customizado para o limpar:
        contactForm.addEventListener('reset', function() {
            outputContent.textContent = ''; // Limpa a saída
            formOutput.style.display = 'none'; // Esconde a área de saída
        });
    }
});