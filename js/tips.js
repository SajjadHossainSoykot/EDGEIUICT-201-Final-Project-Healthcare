// Array of health tips objects
const healthTips = [
    {
        image: "images/tips/hydrate.jpg",
        title: "Stay Hydrated",
        description: "Drink plenty of water to keep your body hydrated. Aim for at least 8 glasses/day."
    },
    {
        image: "images/tips/diet.jpg",
        title: "Balanced Diet",
        description: "Include fruits, veggies, and lean proteins. Limit processed foods, sugar, and fats."
    },
    {
        image: "images/tips/exercise.jpg",
        title: "Regular Exercise",
        description: "Aim for 30 mins of moderate activity most days, like walking, cycling, etc."
    },
    {
        image: "images/tips/sleep.jpg",
        title: "Get Enough Sleep",
        description: "Aim for 7-9 hours per night for proper recovery and function."
    }
    // Add more tips objects here if needed
];

// Function to generate HTML for each tip
function generateTipHTML(tip) {
    return `
    <div class="col-md-3">
        <div class="card card-tips">
            <img src="${tip.image}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${tip.title}</h5>
                <p class="card-text">${tip.description}</p>
            </div>
        </div>
    </div>`;
}

// Function to display tips on the page
function displayTips() {
    const tipsContainer = document.getElementById('tipsContainer');
    let tipsHTML = '';
    healthTips.forEach(tip => {
        tipsHTML += generateTipHTML(tip);
    });
    tipsContainer.innerHTML = tipsHTML;
}

// Call the function to display tips when the page loads
window.onload = displayTips;
