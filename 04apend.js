let value = document.createElement('h1')
value.textContent = 'adding content by appending child'
document.body.appendChild(value)

let img = document.createElement('img')
img.src = 'https://media.istockphoto.com/photos/colored-powder-explosion-on-black-background-picture-id1057506940?k=20&m=1057506940&s=612x612&w=0&h=3j5EA6YFVg3q-laNqTGtLxfCKVR3_o6gcVZZseNaWGk='
document.body.appendChild(img)

let img2 = new Image()
img2.src = 'https://www.bhaktiphotos.com/wp-content/uploads/2018/04/Mahadev-Bhagwan-Photo-for-Devotee.jpg'
document.body.appendChild(img2)

let text = document.createElement('input')
text.type='password'
text.placeholder='enter your name'

document.body.appendChild(text)