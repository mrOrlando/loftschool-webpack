import './index.scss';
import 'normalize.css/normalize.css';

import createMenu from '../../components/menu/menu';

var menu = createMenu([{
    name: 'Главная',
    link: '/'
  }, {
    name: 'Блог',
    link: 'blog.html'
  }
], 'menu');

document.body.appendChild(menu);

console.log('in index.js');
console.log($);
console.log(jQuery);
