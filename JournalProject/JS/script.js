let Student = ["ggreger", "rkhwhkr", "h;length;lhl", 'helloworld'];
gradebook = document.querySelector(".gradebook");
students = document.querySelector(".students");
aver = document.querySelector(".aver");
marks = document.querySelector(".marks");
result = document.querySelector(".result");
let counterMarksBlocks = 100;
Student.forEach((st) => {
	let line = document.createElement("div");
	line.classList.add("line");
	let STname = document.createElement("div");
	//	STname.classList.add("name");
	STname.textContent = st;
	//line.appendChild(STname);
	STname.classList.add("line");
	students.appendChild(STname);

	let linemark = document.createElement("div");
	linemark.classList.add("linemark");
	for (let i = 0; i < counterMarksBlocks; i++) {
		let mark = document.createElement("input");
		mark.setAttribute("type", "number");
		linemark.appendChild(mark);
	}
	marks.appendChild(linemark);
	let sr = document.createElement('div');
	sr.classList.add("sr");
	aver.appendChild(sr);

	let res = document.createElement('input');
	res.setAttribute("type", "number");
	res.classList.add("res");
	result.appendChild(res);
});


const timeForm = document.querySelector(".marks");
const inputs = [...timeForm.querySelectorAll("input")];

let currentActiveIndex = 0;
inputs[currentActiveIndex].focus();
inputs.forEach((input, index) =>
	input.addEventListener("click", () => (currentActiveIndex = index))
);

timeForm.addEventListener("keydown", (e) => {
	let direction = 0;
	switch (e.code) {
		case "ArrowRight":
			direction = 1;
			break;
		case "ArrowLeft":
			direction = -1;
			break;
		case "ArrowUp":
			direction = -100;
			break;
		case "ArrowDown":
			direction = 100;
			break;
		default:
			return;
	}
	currentActiveIndex =
		(inputs.length + currentActiveIndex + direction) % inputs.length;
	inputs[currentActiveIndex].focus();
});


let blocks = document.querySelectorAll("input");
blocks.forEach((block) => {
	block.addEventListener("keydown", (e) => {
		if (e.code.includes("Arrow")) {
			e.preventDefault();
			if (block.value > 5 || block.value < 2 || isNaN(block.value)) {
				block.value = "";
			}
		}
	});
});
