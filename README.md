# Interactive Shopping List

## Overview
This project is an interactive shopping list web application built with HTML, CSS, and JavaScript. Users can add items, mark them as purchased, and delete them dynamically.

## Features
- Add items to the shopping list.
- Mark items as purchased using checkboxes.
- Delete items from the list individually or all at once.
- Responsive design for various screen sizes.

## Installation
To run this project locally:
1. Clone the repository:
git clone https://github.com/your-username/interactive-shopping-list.git
2. Navigate into the project directory:
3. Open `index.html` in your web browser.

## Usage
- Enter an item name in the input field and click "Add".
- Mark items as purchased by clicking their checkboxes.
- Delete items individually using the "Delete" button.
- Clear the entire list with the "Clear all" button.

## License
This project is licensed under the MIT License. See the LICENSE file for more details.

## System Requirements
- Web browser with JavaScript enabled
- Internet connection for fonts/icons (if any external resources are used)

## Acknowledgments
- Victor Mwangi - Creator


## Examples

### HTML Example
```html
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Interactive Shopping List</title>
<link rel="stylesheet" href="styles/style.css">
</head>
<body>
<!-- Your HTML content -->
</body>
</html>

### CSS Example

```css
body {
	background-image: url(/images/backgru.jpg);
	background-size: cover;
	background-position: fixed;
}

@keyframes slide {
	from {
		transform: translateX(0);
	}
	to {
		transform: translateX(-100%);
	}
}

.slide {
	display: inline-block;
	white-space: nowrap;
	animation: 30s slide infinite linear;
}

img {
	height: 250px;
	margin: 0 10px;
}

.images {
	display: inline-block;
}

h1 {
	color: aliceblue;
	text-align: center;
	font-size: 50px;
	font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",
		Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
		sans-serif;
}

#label {
	color: black;
	margin-left: 30px;
}

#input {
	margin-left: auto;
	margin-right: auto;
	margin-top: 100px;
	height: auto;
	background-color: aliceblue;
	width: 500px;
	border-radius: 5px;
	text-align: center;
	font-size: 50px;
	font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

#txt {
	font-size: 30px;
	margin-bottom: none;
	width: 250px;
	height: 70px;
	margin-top: 10px;
	margin-left: -20px;
}

#add {
	font-size: 25px;
	height: 30px;
	background-color: rgb(0, 0, 0);
	color: white;
}

#add:hover {
	background-color: gray;
}

p {
	font-size: 20px;
	text-align: start;
	margin-left: -4px;
	margin-right: 10px;
	margin-top: 0;
	line-height: 7px;
	color: rgb(16, 16, 151);
	display: flex;
	flex-direction: row;
	justify-content: space-between;
}

ul {
	margin-left: -25px;
}

#clear {
	height: 30px;
	margin-left: 420px;
	background-color: rgb(39, 209, 221);
	border: none;
}

#clear:hover {
	box-shadow: 3px 2px rgba(0, 0, 0, 1);
}

#clear:active {
	background-color: aliceblue;
}

h4 {
	margin-bottom: 0px;
}

th {
	font-size: 20px;
	padding-inline-start: 125px;
}

.i {
	padding-left: 10px;
}

### JavaScript Example

```javascript
// Your JavaScript code
document.addEventListener('DOMContentLoaded', () => {
  const formBody = document.getElementById('formBody');
  const clearBtn = document.getElementById('clear');
  const shopList = document.getElementById('shopList');

  formBody.addEventListener('submit', (e) => {
    e.preventDefault();
    handleShopping(e.target.txt.value);
    formBody.reset();
  });

  clearBtn.addEventListener('click', (e) => {
    e.preventDefault();
    deleteAll();
  });

  function handleShopping(shop) {
    let p = document.createElement('p');
    p.textContent = `${shop}  `;
    shopList.appendChild(p);
    let btn = document.createElement('button');
    let checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    p.appendChild(checkbox);
    btn.addEventListener('click', deleteOneList);
    btn.textContent = 'Delete';
    p.appendChild(btn);
  }

  function deleteOneList(e) {
    e.target.parentNode.remove();
  }

  function deleteAll() {
    shopList.innerHTML = '';
  }
});

