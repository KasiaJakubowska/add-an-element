const names = [];
const div = document.querySelector('div')

const addName = (e) => {
    e.preventDefault();
    const input = document.querySelector('input');
    const name = input.value;
    if(input.value.length) {
    for( name of names) {
        
    }
    names.push(name);
    div.textContent += name + ", ";
    input.value = "";
    }
}

document.querySelector('button').addEventListener('click', addName)