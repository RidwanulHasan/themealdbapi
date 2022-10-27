

const loadMealdata = async (searchFieldValue) => {

    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchFieldValue}`;

    const res = await fetch(url);
    const data = await res.json();
    displayLoadMealData(data.meals);
}

const displayLoadMealData = meals =>{
   // console.log(meals);

    const cardContainer = document.getElementById('card-container');
    cardContainer.textContent = "";

   

    
    
    meals.forEach(meal => {
        //console.log(meal);

        
       

        const mealDiv = document.createElement('div');
        mealDiv.classList.add('col');
        mealDiv.innerHTML =`
        <div onclick = "cardClick('${meal.idMeal}')" class="card">
                    <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
                    <div class="card-body">
                      <h5 class="card-title">${meal.strMeal}</h5>
                      <p class="card-text">${meal.strInstructions.slice(0,100)}</p>
                    </div>
                    <button onclick="modalRelated('${meal.idMeal}')" type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">Show Details</button>
                  </div>
        `;

        cardContainer.appendChild(mealDiv);


        
    });

    toggleSpinner(false);

}

 const searchProcess = () =>{

    toggleSpinner(true);

    const searchField = document.getElementById('search-field');
    const searchFieldValue = searchField.value ;
    loadMealdata(searchFieldValue);
    searchField.value ="";
 }

document.getElementById('btn-search').addEventListener('click', function(){
searchProcess();
    
})

// click enter btn and automatic search 

document.getElementById('search-field').addEventListener('keypress',function(event){
    console.log(event.key);

    if(event.key === 'Enter'){
        searchProcess()
    }
    
})


const toggleSpinner = isLoading =>{
   
    const loaderSection = document.getElementById('loader');

    if(isLoading){
        loaderSection.classList.remove('d-none');
    }

    else{
        loaderSection.classList.add('d-none');
    }
}


const modalRelated = async (id) =>{

    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`;

    const res = await fetch(url);
    const data = await res.json();
    displayModalRelated(data.meals);


}

const displayModalRelated = meals => {
    
    meals.forEach(meal =>{
        console.log(meal);

        const modaltitle = document.getElementById('exampleModalLabel');
        modaltitle.innerText = meal.strMeal;

        const modalBody = document.getElementById('modal-body-write');
        modalBody.innerHTML = `

        <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
                    <div class="card-body">
                      <h5 class="card-title">${meal.strMeal}</h5>
                      <p class="card-text">${meal.strInstructions.slice(0,100)}</p>
                    </div>
        
        `
    })
}


const  cardClick = async(idMeal) => {

    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`;

    const res = await fetch(url);
    const data = await res.json();
    displayCardClick(data.meals);
}

const displayCardClick = meals=> {
   // console.log(meals);
    const viewCardContainer = document.getElementById('view-card-details');
    viewCardContainer.textContent="";

    meals.forEach(meal => {
        console.log(meal);

        const mealDiv = document.createElement('div');
        mealDiv.classList.add('col');
        mealDiv.innerHTML = `
        <div class="card">
                    <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
                    <div class="card-body">
                      <h5 class="card-title">${meal.strMeal}</h5>
                      <p class="card-text">${meal.strInstructions.slice(0,100)}</p>
                    </div>
                  </div>
        `;

        viewCardContainer.appendChild(mealDiv);


    })

    
}

//loadMealdata('a');