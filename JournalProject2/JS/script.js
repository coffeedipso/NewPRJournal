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

let timeForm = document.querySelector(".marks");
let inputs = [...timeForm.querySelectorAll("input")];
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
	block.addEventListener("input", () => {
		let value = parseInt(block.value);
		if (value > 5 || value < 2 || isNaN(value)) {
			block.value = "";
		}
	});
});

// let blocks = document.querySelectorAll("input");
// blocks.forEach((block) => {
// 	block.addEventListener("keydown", (e) => {
// 		if (e.code.includes("Arrow")) {
// 			e.preventDefault();
// 			if (block.value > 5 || block.value < 2 || isNaN(block.value)) {
// 				block.value = "";
// 			}
// 		}
// 	});
// });

let nextButton = document.getElementById("next-btn");
let backButton = document.getElementById("back-btn");

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
	let markLines = document.querySelectorAll(".marks .linemark");

	markLines.forEach((line) => {
		for (let i = 0; i < counterMarksBlocks; i++) {
			let mark = document.createElement("input");
			mark.setAttribute("type", "number");
			line.appendChild(mark);
		}
	});
}

function updateBlocksVisibility() {
	let markLines = document.querySelectorAll(".marks .linemark");

	markLines.forEach((line) => {
		let marks = line.querySelectorAll("input");
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

// let linemark2 = document.querySelectorAll(".linemark");
// let linemarkArray = Array.from(linemark2);

// linemarkArray.forEach((linemark, i) => {
// 	let marks = linemark.querySelectorAll("input");

// 	marks.forEach((mark) => {
// 		mark.addEventListener("input", () => {
// 			let sum = 0;
// 			let count = 0;

// 			marks.forEach((m) => {
// 				if (m.value !== "") {
// 					sum += parseFloat(m.value);
// 					count++;
// 				}
// 			});

// 			let average = count > 0 ? sum / count : 0;
// 			let roundedNum = Number(average.toFixed(1));

// 			// Создать новый элемент span для отображения среднего значения
// 			let averageElement = document.createElement("span");
// 			linemark.appendChild(averageElement);
// 			averageElement.textContent = `${i + 1}: ${roundedNum}`;

// 			// Найти или создать контейнер, в который будет помещен средний элемент
// 			// let container = linemark.querySelector(".average-container") || document.createElement("div");
// 			// container.classList.add("average-container");
// 			container.innerHTML = ""; // Очистить содержимое контейнера
// 			container.appendChild(averageElement);

// 			// Вставить контейнер после блока "linemark"
// 			linemark.parentNode.insertBefore(container, linemark.nextSibling);
// 		});
// 	});
// });

let linemark2 = document.querySelectorAll(".linemark");
let linemarkArray = Array.from(linemark2);

linemarkArray.forEach((linemark, i) => {
	let marks = linemark.querySelectorAll("input");

	// Создать новый элемент span для отображения среднего значения
	let averageElement = document.createElement("span");
	linemark.appendChild(averageElement);

	marks.forEach((mark) => {
		mark.addEventListener("input", () => {
			let sum = 0;
			let count = 0;

			marks.forEach((m) => {
				if (m.value !== "") {
					sum += parseFloat(m.value);
					count++;
				}
			});

			let average = count > 0 ? sum / count : 0;
			let roundedNum = Number(average.toFixed(1));

			// Обновить текстовое содержимое элемента averageElement
			averageElement.textContent = `${roundedNum}`;
		});
	});
});