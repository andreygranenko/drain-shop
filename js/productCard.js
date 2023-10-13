'use strict';

class ProductCard {
    constructor(src, alt, parentSelector) {
        this.src = src;
        this.alt = alt;
        this.parent = document.querySelector(parentSelector);
    }

    render() {
        const element = document.createElement('div');
        element.classList.add('productPar');
        // img.setAttribute('src', this.src);
        // img.setAttribute('alt', this.alt);
        element.innerHTML = `
            <img src=${this.src} alt=${this.alt}>
        `;
        this.parent.append(element);
    }
}

axios.get('http://localhost:3000/menu')
  .then(response => {
    response.data.forEach(({img, altimg}) => {
        console.log(img, altimg);
        new ProductCard(img, altimg, '.productListParent').render();
    });
  });