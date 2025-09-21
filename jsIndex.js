const linkSobre = document.getElementById('link-sobre');
const linkProjetos = document.getElementById('link-projetos');
const linkContato = document.getElementById('link-contato');
const linkInicio = document.getElementById('link-inicio');

const sectionSobre = document.getElementById('sobre');
const sectionProjetos = document.getElementById('projetos');
const sectionContato = document.getElementById('contato');
const sectionInicio = document.getElementById('inicio');

linkSobre.addEventListener('click', function(event) {
    event.preventDefault();
    
    sectionSobre.classList.add('active');
    sectionProjetos.classList.remove('active');
    sectionContato.classList.remove('active');
    sectionInicio.classList.remove('active');
});
linkProjetos.addEventListener('click', function(event) {
    event.preventDefault();
    sectionSobre.classList.remove('active');
    sectionProjetos.classList.add('active');
    sectionContato.classList.remove('active');
    sectionInicio.classList.remove('active');
});
linkContato.addEventListener('click', function(event) {
    event.preventDefault();
    sectionSobre.classList.remove('active');
    sectionProjetos.classList.remove('active');
    sectionContato.classList.add('active');
    sectionInicio.classList.remove('active');
});
linkInicio.addEventListener('click', function(event) {
    event.preventDefault();
    sectionSobre.classList.remove('active');
    sectionProjetos.classList.remove('active');
    sectionContato.classList.remove('active');
    sectionInicio.classList.add('active');
});