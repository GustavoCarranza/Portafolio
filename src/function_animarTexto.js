const animacionTexto = (texto) => {
    const numeroLetras = texto.dataset.texto.length;
    const cursor = texto.querySelector('.cursor');
    cursor.classList.add('cursor--visible');
    
    for(let i = 0; i < numeroLetras; i++)
    {
        setTimeout(() => {
            const letra = document.createElement('span');
            letra.append(texto.dataset.texto[i]);
            texto.append(letra);
        }, 150 * i); 
    }
    setTimeout(() => {
        const cursorAnimado = [...texto.closest('.content-texto-escrito').querySelectorAll('.cursor')];
        const indexCursorActual = cursorAnimado.indexOf(cursor);
        if(indexCursorActual === 0){
            cursor.classList.add('cursor--active');
        }
    }, numeroLetras * 150);
    return new Promise((resolve) => setTimeout(resolve, numeroLetras * 30));
}

export default animacionTexto;