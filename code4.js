const cat = {
    catName : 'Bertie',
    breed : 'Cymric',
    color : 'black',
    greeting: function() {
        console.log('Meow!');
    }
}





let para1 = document.createElement('p');
let para2 = document.createElement('p');

para1.textContent = `The cat's name is ${ cat.catName }.`;
para2.textContent = `The cat's color is ${ cat.color }.`;

section.appendChild(para1);
section.appendChild(para2);