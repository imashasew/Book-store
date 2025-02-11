document.addEventListener("DOMContentLoaded", function () {
    fetch('data.json')
    .then(response => response.json())
    .then(data => {
        const booklist = document.getElementById('book-list');
        data.forEach(book => {
            const bookItem = document.createElement('div');
            bookItem.classList.add('book-item');

            const title = document.createElement('h2');
            title.textContent = book.title;

            const author = document.createElement('p');
            author.textContent = `Author: ${book.author}`;

            
            const price = document.createElement('p');
            price.textContent = `Price: Rs.${book.price}`;

            const image = document.createElement('img');
            image.src = book.image;
            image.alt = `Cover of ${book.title}`;  // Corrected alt text

            // Append the image to the book item
            bookItem.appendChild(image);
            bookItem.appendChild(title);
            bookItem.appendChild(author);
         
            bookItem.appendChild(price);
            booklist.appendChild(bookItem);
        });
    })
    .catch(error => console.error('Error fetching JSON:', error));
});
