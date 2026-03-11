document.getElementById('go').addEventListener('click', () => {
    let url = document.getElementById('url-input').value;
    
    if (!url.startsWith('http')) {
        url = 'https://www.google.com/search?q=' + url;
    }
    
    // Para um navegador real dentro do app, redirecionamos a página atual
    window.location.href = url;
});

document.getElementById('back').addEventListener('click', () => {
    window.history.back();
});
