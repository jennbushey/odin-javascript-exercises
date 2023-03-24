// your JavaScript file
const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

container.appendChild(content);

const red = document.createElement('p');
red.classList.add('red');
red.style.color = 'red';
red.textContent = "Hey I'm red!"
container.appendChild(red);

const head3 = document.createElement('h3');
head3.classList.add('blue');
head3.style.color = 'blue';
head3.textContent = "I'm a blue h3!"
container.appendChild(head3);

const div = document.createElement('div');
div.classList.add('div');
const head1 = document.createElement('h1');
const p2 = document.createElement('p');
head1.textContent = "I'm in a div"
p2.textContent = "ME TOO!"
div.appendChild(head1);
div.appendChild(p2);
container.appendChild(div);

// buttons is a node list. It looks and acts much like an array.
const buttons = document.querySelectorAll('button');

// we use the .forEach method to iterate through each button
buttons.forEach((button) => {

    // and for each one we add a 'click' listener
    button.addEventListener('click', () => {
        alert(button.id);
    });
});
