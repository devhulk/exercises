var content = document.getElementById('content')

var paragraph = document.createElement('p')

paragraph.innerHTML = 'This is javascript DOM manipulation'
paragraph.style.color = 'blue'

content.appendChild(paragraph)