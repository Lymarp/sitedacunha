// Funcionalidade para carregar o mapa
document.getElementById('loadMapBtn').onclick = function() {
    var mapContainer = document.getElementById('mapContainer');
    if (mapContainer.style.display === 'none') {
        mapContainer.style.display = 'block';
        this.innerText = 'Esconder Mapa';
    } else {
        mapContainer.style.display = 'none';
        this.innerText = 'Carregar Mapa';
    }
};

// Funcionalidade do modal da lista de presentes
document.getElementById('openPresentListBtn').onclick = function() {
    document.getElementById('presentListModal').style.display = 'block';
    document.body.style.overflow = 'hidden'; // Impede rolagem da página
};

// Fechar modal da lista de presentes
document.getElementById('closePresentList').onclick = function() {
    document.getElementById('presentListModal').style.display = 'none';
    document.body.style.overflow = 'auto'; // Permite rolagem da página novamente
};

// Fechar modal ao clicar fora dele
window.onclick = function(event) {
    if (event.target === document.getElementById('presentListModal')) {
        document.getElementById('presentListModal').style.display = 'none';
        document.body.style.overflow = 'auto';
    }
};

// Função para lidar com a confirmação de presença
document.getElementById('rsvpForm').onsubmit = function(event) {
    event.preventDefault(); // Impede o envio do formulário

    // Obter o nome e a opção selecionada
    var nome = document.getElementById('nome').value;
    var acomp = document.getElementById('acompanha').value;

    // Mostrar a mensagem de confirmação
    document.getElementById('confirmationMessage').innerText = nome + ", seu convite foi confirmado com sucesso!";
    document.getElementById('confirmationMessage').style.display = 'block';

    // Exibir o botão para carregar o mapa
    document.getElementById('loadMapBtn').style.display = 'inline-block';

    // Limpar o formulário
    this.reset();
};

// Funcionalidade do modal da seção Sobre
document.getElementById('openSobreBtn').onclick = function() {
    document.getElementById('sobreModal').style.display = 'block';
    document.body.style.overflow = 'hidden';
};

// Fechar modal da seção Sobre
document.getElementById('closeSobre').onclick = function() {
    document.getElementById('sobreModal').style.display = 'none';
    document.body.style.overflow = 'auto';
};

// Funcionalidade do modal da seção Galeria
document.getElementById('openGaleriaBtn').onclick = function() {
    document.getElementById('galeriaModal').style.display = 'block';
    document.body.style.overflow = 'hidden';
};

// Fechar modal da seção Galeria
document.getElementById('closeGaleria').onclick = function() {
    document.getElementById('galeriaModal').style.display = 'none';
    document.body.style.overflow = 'auto';
};

// Funcionalidade do modal da seção Contato
document.getElementById('openContatoBtn').onclick = function() {
    document.getElementById('contatoModal').style.display = 'block';
    document.body.style.overflow = 'hidden';
};

// Fechar modal da seção Contato
document.getElementById('closeContato').onclick = function() {
    document.getElementById('contatoModal').style.display = 'none';
    document.body.style.overflow = 'auto';
};

// Fechar modal ao clicar fora dele
window.onclick = function(event) {
    if (event.target === document.getElementById('galeriaModal')) {
        document.getElementById('galeriaModal').style.display = 'none';
        document.body.style.overflow = 'auto';
    }
    if (event.target === document.getElementById('contatoModal')) {
        document.getElementById('contatoModal').style.display = 'none';
        document.body.style.overflow = 'auto';
    }
};

document.getElementById("rsvpForm").addEventListener("submit", function (event) {
    event.preventDefault();
    const nome = document.getElementById("nome").value;
    const acompanha = document.getElementById("acompanha").value;

    // Monta a mensagem de confirmação
    const mensagem = `Oi! ${nome} confirmou presença no evento e vem ${acompanha}.`;

    // Link para o WhatsApp
    const whatsappLink = `https://wa.me/5575992026081?text=${encodeURIComponent(mensagem)}`;

    // Redireciona para o WhatsApp
    window.open(whatsappLink, "_blank");
});
