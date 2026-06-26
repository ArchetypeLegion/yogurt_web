// ===== БУРГЕР-МЕНЮ =====

const burgerMenu = document.querySelector('.burgerMenu');
const headMenu = document.querySelector('.head_menu');

if (burgerMenu && headMenu) {
    burgerMenu.addEventListener('click', function () {
        this.classList.toggle('active');
        headMenu.classList.toggle('open');
    });
}


// ===== СЛАЙДЕР НА ГЛАВНОЙ СТРАНИЦЕ =====

let currentSlide = 1;
const totalSlides = 4;

function getCurrentSlide() {
    const checkedRadio = document.querySelector('input[name="r"]:checked');

    if (!checkedRadio) {
        return 1;
    }

    return Number(checkedRadio.id.replace("r", ""));
}

function nextSlide() {
    const firstRadio = document.getElementById("r1");

    if (!firstRadio) {
        return;
    }

    currentSlide = getCurrentSlide();
    currentSlide++;

    if (currentSlide > totalSlides) {
        currentSlide = 1;
    }

    const nextRadio = document.getElementById("r" + currentSlide);

    if (nextRadio) {
        nextRadio.checked = true;
    }
}

setInterval(nextSlide, 5000);


// ===== СВОЯ СУММА НА СТРАНИЦЕ ПОДДЕРЖКИ =====

const amountSelect = document.getElementById("supportAmount");
const customAmount = document.getElementById("customAmount");

if (amountSelect && customAmount) {
    amountSelect.addEventListener("change", function () {
        if (this.value === "custom") {
            customAmount.style.display = "block";
            customAmount.required = true;
        } else {
            customAmount.style.display = "none";
            customAmount.required = false;
            customAmount.value = "";
        }
    });
}


// ===== СТРАНИЦА СРАВНЕНИЯ ЙОГУРТОВ =====

const bestButton = document.getElementById("bestYogurtButton");
const yogurtRows = document.querySelectorAll(".compare_table tbody tr");
const compareResult = document.getElementById("compareResult");

if (bestButton && yogurtRows.length > 0 && compareResult) {
    bestButton.addEventListener("click", function () {
        yogurtRows.forEach(function (row) {
            row.classList.remove("best_yogurt");
        });

        const bestRow = document.querySelector('[data-best="true"]');

        if (bestRow) {
            bestRow.classList.add("best_yogurt");
            compareResult.textContent = "Самый полезный вариант — греческий йогурт: в нём больше белка и меньше сахара.";
        }
    });
}
