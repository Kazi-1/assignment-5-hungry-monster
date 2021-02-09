const searchMeals = () => {
    document.getElementById('search').addEventListener('click', function () {
        const search = document.getElementById('search-field').value;
        const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`;
        // load meal data
        fetch(url)
            .then(res => res.json())
            .then(dataJason => displayMeals(dataJason.meals))

    })
}

const displayMeals = meals => {
    const mealContainer = document.getElementById('meal-container');
    meals.forEach(meal => {
        const mealDiv = document.createElement('div');
        mealDiv.className = 'meal-style'
        const mealInfo = `
        <h3 class="meal-name">${meal.strMeal}</h3>
        <button onclick="displayMealInfo('${meal.strMeal}')">Show Ingredients</button>
        `;

        mealDiv.innerHTML = mealInfo;
        mealContainer.appendChild(mealDiv)
    })
}


const displayMealInfo = ingredients => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${ingredients}`
    console.log(url);
    fetch(url)
    .then(res => res.json())
    .then(data => console.log(data))
}