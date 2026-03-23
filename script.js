const good = document.getElementById("good");
const cheap = document.getElementById("cheap");
const fast = document.getElementById("fast");

const toggles = document.querySelectorAll(".toggle");

toggles.forEach(toggle => {
    toggle.addEventListener("change", (e) => {
        
        // Check if all three checkboxes are currently active
        if (good.checked && cheap.checked && fast.checked) {
            
            // If the user just clicked 'good', uncheck 'fast'
            if (e.target === good) {
                fast.checked = false;
            }
            
            // If the user just clicked 'cheap', uncheck 'good'
            if (e.target === cheap) {
                good.checked = false;
            }

            // If the user just clicked 'fast', uncheck 'cheap'
            if (e.target === fast) {
                cheap.checked = false;
            }
        }
    });
});