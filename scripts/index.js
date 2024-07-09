/** @format */
let clearBtn = document.getElementById("clear");

let form = document.addEventListener("DOMContentLoaded", () => {
	document.getElementById("formBody");
	clearBtn.addEventListener("click", deleteAll);

	formBody.addEventListener("submit", (e) => {
		e.preventDefault();
		console.log(e.target.txt.value);
		handleShopping(e.target.txt.value);
		formBody.reset();
	});
);

clearBtn.addEventListener("click", (e) => {
	e.preventDefault();
	deleteAll();
});

function handleShopping(shop) {
	let p = document.createElement("p");
	p.textContent = `${shop}  `;
	shopList.appendChild(p);
	let btn = document.createElement("button");
	let checkbox = document.createElement("input");
	checkbox.type = "checkbox";

	p.appendChild(checkbox);
	btn.addEventListener("click", deleteOneList);
	btn.textContent = "Delete";
	p.appendChild(btn);
}
function deleteOneList(e) {
	e.target.parentNode.remove();
}

function deleteAll() {
	let shopList = document.getElementById("shopList");
	shopList.innerHTML = "";
}
