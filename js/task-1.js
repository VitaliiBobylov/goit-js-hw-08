const listEl = document.querySelector('#categories');


const itemsEl = listEl.querySelectorAll('.item');
console.log(`number of categories ${itemsEl.length}`);

itemsEl.forEach(
    item =>{
        const title = item.querySelector('h2').textContent;
        const elementsCount = item.querySelectorAll('li').length;

    console.log(`Category: ${title}`);
  console.log(`Elements: ${elementsCount}`)
    }
);

  