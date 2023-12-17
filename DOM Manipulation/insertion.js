let h = document.getElementsByTagName('div')[0]
h.innerHTML = h.innerHTML + '<h3>This Heading is insert using Javascript</h3>';

let div = document.createElement('div')
div.innerHTML = '<h4>This is h4</h4>';

// h.appendChild(div)         This will create a div after the h as a child,

// h.after(div)               This will create a div after h.

// h.before(div)              This will create a div before h.

// h.replaceWith(div)         This will replace the h with div.


// =================Insert Adjacent===================

first.insertAdjacentHTML('beforebegin', '<div>This div is inserted beforebegin </div>')


first.insertAdjacentHTML('beforeend', '<div>This div is beforeend. </div>')


first.insertAdjacentHTML('afterbegin', '<div>This div is inserted afterbegin </div>')



first.insertAdjacentHTML('afterend', '<div>This div is inserted afterend </div>')
