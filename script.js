//your JS code here. If required.
let checkOrder = [];

const toggles = document.querySelectorAll(".toggle");

toggles.forEach((toggle) => {
	toggle.addEventListener("change", () => {
		if(toggle.checked) {
			if(checkOrder.length < 2) {
				checkOrder.push(toggle.id);
			} else {
				const firstChecked = checkOrder[0];
				const firstCheckBox = document.getElementById(firstChecked);

				firstCheckBox.checked = false;
				checkOrder.shift();

				checkOrder.push(toggle.id);
			}
		} else {
			checkOrder = checkOrder.filter(id => id !== toggle.id);
		}
	})
})