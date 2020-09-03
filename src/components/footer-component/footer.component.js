import footer from './footer.component.html';
import './footer.component.css';

let html = footer;
let getElement = () => {
    let template = document.createElement('template');
    console.log(html);
    
    html = html.trim();
    template.innerHTML = html;
    return template.content.firstChild;
};

let element;
export default element = getElement(html);
