'use strict';

class ProductCard {
    constructor(src, alt, parentSelector) {
        this.src = src;
        this.alt = alt;
        this.parent = document.querySelector(parentSelector);
    }

    render() {
        const element = document.createElement('div');
        img.setAttribute('src', this.src);
        img.setAttribute('alt', this.alt);
        img.innerHTML = `
            <img src=${this.src} alt=${this.alt}>
        `;
        this.parent.append(img);
    }
}

axios.get('http://localhost:3000/menu')
  .then(response => {
    response.data.forEach(({img, altimg}) => {
        console.log(img, altimg);
        new ProductCard(img, altimg, '.productPar').render();
    });
  });