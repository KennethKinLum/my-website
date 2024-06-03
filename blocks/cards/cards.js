import { createOptimizedPicture } from '../../scripts/aem.js';

export default function decorate(block) {

  console.log("CARD BLOCK 01", JSON.stringify(block, null, 4))
  console.log("CARD BLOCK IS", block );

  console.log("CARD BLOCK CHILDREN IS", block.children );
  // return;

  /* change to ul, li */
  const ul = document.createElement('ul');
  [...block.children].forEach((row) => {
    console.log("ROW IS", row);
    const li = document.createElement('li');
    while (row.firstElementChild) li.append(row.firstElementChild);
    [...li.children].forEach((div) => {
      if (div.children.length === 1 && div.querySelector('picture')) div.className = 'cards-card-image';
      else div.className = 'cards-card-body';
    });
    ul.append(li);
  });
  ul.querySelectorAll('img').forEach((img) => img.closest('picture').replaceWith(createOptimizedPicture(img.src, img.alt, false, [{ width: '750' }])));
  block.textContent = '';
  block.append(ul);

  console.log("CARD BLOCK 02", JSON.stringify(block, null, 4))
}
