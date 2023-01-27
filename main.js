function getCharacters(done) {

    const results = fetch("https://inshorts.deta.dev/news?category=all");

    results
        .then(response => response.json())
        .then(data => {
            done(data)
        });
    }

getCharacters (data => {

    data.data.forEach(autores => {
        const article = document.createRange().createContextualFragment(/*html*/`
        
        <article>
    
            <div class="api-container">
                <img src="${autores.imageUrl}" alt="Autor">
            </div>
    
            <span>${autores.content}</span>
    
        </article>

        `);

        const main = document.querySelector("main");

        main.append(article);
        
    });
});
