const cat = {
    name : 'Bertie',
    breed : 'Cymric',
    color : 'white',
    greeting: function() {
        console.log('Meow!');
    }
}

const cat2 ={
    name : 'Esti',
    breed : 'Cym',
    color : 'blue',
    greeting: function() {
        console.log('Meow2!');
    }


}

function greeting() {
    return( "Hello, said Bertie the Cymric.");
}

cat.greeting();
cat2.greeting();

