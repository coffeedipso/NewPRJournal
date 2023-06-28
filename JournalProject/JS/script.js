let Student = ["ggreger", "rkhwhkr", "h;length;lhl", 'helloworld'];
let gradebook = document.querySelector(".gradebook");
let students = document.querySelector(".students");
let aver = document.querySelector(".aver");
let marks = document.querySelector(".marks");
let result = document.querySelector(".result");
let date = document.querySelector(".date");
let counterMarksBlocks = 40;
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

for (let i = 0; i < counterMarksBlocks + 2; i++) {
	let dateBlocks = document.createElement("div");
	dateBlocks.classList.add("dateBlocks");
	date.appendChild(dateBlocks);
}

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
			direction = -counterMarksBlocks;
			break;
		case "ArrowDown":
			direction = counterMarksBlocks;
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

const nextButton = document.getElementById("next-btn");
const backButton = document.getElementById("back-btn");

let currentBlockIndex = 0;

nextButton.addEventListener("click", () => {
	currentBlockIndex += counterMarksBlocks;
	addNewCellsToRows();
	updateBlocksVisibility();
});

backButton.addEventListener("click", () => {
	currentBlockIndex -= counterMarksBlocks;
	if (currentBlockIndex < 0) {
		currentBlockIndex = 0;
	}
	updateBlocksVisibility();
});

function addNewCellsToRows() {
	const markLines = document.querySelectorAll(".marks .linemark");

	markLines.forEach((line) => {
		for (let i = 0; i < counterMarksBlocks; i++) {
			let mark = document.createElement("input");
			mark.setAttribute("type", "number");
			line.appendChild(mark);
		}
	});
}

function updateBlocksVisibility() {
	const markLines = document.querySelectorAll(".marks .linemark");

	markLines.forEach((line) => {
		const marks = line.querySelectorAll("input");
		marks.forEach((mark, markIndex) => {
			if (
				markIndex >= currentBlockIndex &&
				markIndex < currentBlockIndex + counterMarksBlocks
			) {
				mark.style.display = "block";
			} else {
				mark.style.display = "none";
			}
		});
	});
}

updateBlocksVisibility();

