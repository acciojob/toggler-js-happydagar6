const good = document.getElementById("good");
const cheap = document.getElementById("cheap");
const fast = document.getElementById("fast");

const toggles = document.querySelectorAll(".toggle");

toggles.forEach(toggle => {
    toggle.addEventListener("change", (e) => {
        // Only run the unchecking logic if the current action is turning a toggle ON
        // and if ALL THREE are currently checked
        if (good.checked && cheap.checked && fast.checked) {
            
            // If the user just turned ON 'good', we force 'fast' to turn OFF
            if (e.target === good) {
                fast.checked = false;
            }
            
            // If the user just turned ON 'cheap', we force 'good' to turn OFF
            if (e.target === cheap) {
                good.checked = false;
            }

            // If the user just turned ON 'fast', we force 'cheap' to turn OFF
            if (e.target === fast) {
                cheap.checked = false;
            }
        }
    });
});