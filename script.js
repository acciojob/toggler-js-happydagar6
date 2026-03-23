const good = document.getElementById("good");
const cheap = document.getElementById("cheap");
const fast = document.getElementById("fast");

const toggles = document.querySelectorAll(".toggle");

toggles.forEach(toggle => {
	toggle.addEventListener("change", (event) => {

		if(good.checked && cheap.checked && fast.checked) {

			if(event.target === good) {
				fast.checked = false;
			}
			if(event.target === cheap) {
				good.checked = false;
			}

			if(event.target === fast) {
				cheap.checked = false;
			}
		}
	});
});