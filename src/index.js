import _ from 'lodash';
import './style.css';

import footer from './components/footer-component/footer.component';

// import header from './header.html';
// import footer from './footer.html';

// function htmlToElement(html) {
//     let template = document.createElement('template');
//     html = html.trim(); 
//     template.innerHTML = html;
//     return template.content.firstChild;
// }


function component() {
    const element = document.createElement('div');
    const btn = document.createElement('button');

    element.innerHTML = _.join(['Hello', 'webpack'], ' ');

    btn.innerHTML = 'Click me and check the console!';

    element.appendChild(btn);

    return element;
}

// document.body.appendChild(htmlToElement(header));
document.body.appendChild(component());
console.log(footer);
document.body.appendChild(footer);

// if (module.hot) {
//     module.hot.accept('./print.js', function () {
//         console.log('Accepting the updated printMe module!');
//         printMe();
//     })
// }