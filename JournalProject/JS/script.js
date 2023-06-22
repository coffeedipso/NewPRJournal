let Student = ["ggreger", "rkhwhkr", "h;length;lhl"];
gradebook = document.querySelector(".gradebook");
students = document.querySelector(".students");
marks = document.querySelector(".marks");
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
		linemark.appendChild(mark);
	}
	marks.appendChild(linemark);
});
