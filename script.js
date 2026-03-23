const good = document.getElementById("good");
const cheap = document.getElementById("cheap");
const fast = document.getElementById("fast");

const toggles = document.querySelectorAll(".toggle");

toggles.forEach(toggle => {
    toggle.addEventListener("change", (e) => {
        
        if (good.checked && cheap.checked && fast.checked) {
            
            if (e.target === good) {
                fast.checked = false;
            }
            if (e.target === cheap) {
                good.checked = false;
            }
            if (e.target === fast) {
                cheap.checked = false;
            }
        }
    });
});