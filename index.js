var mealData = [];

function searchMeal() {
 
var search = document.getElementById('search').value
var api = `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`

fetch (api)
.then (res => res.json())
.then (data => {
    var recipies = data.meals
    console.log(recipies)
    
    var div1 = document.getElementById('recepiesR');
    var main_div = document.getElementById('recepies');
    main_div.innerHTML = '';
    div1.innerHTML = '';

    for (var i=0; i<recipies.length; i++){
        var mealTitle = recipies[i].strMeal
        var mealImage = recipies[i].strMealThumb
        var mealDescrip = recipies[i].strInstructions

        mealData[i] = {
            mealTitle : mealTitle,
            mealImage : mealImage,
            mealDescrip : mealDescrip
        }
    

    var col = document.createElement('div')
    var card = document.createElement('div')
    var cardBody = document.createElement('div')
    var h5 = document.createElement('h5')
    var img = document.createElement('img')
    var cardTitle = document.createTextNode(mealTitle)



    col.className = 'col-3 my-3 mx-0'
    card.className = 'card '
    cardBody.className = 'card-body px-1 py-0'
    h5.className = 'card-title p-1 m-0 small-font text-center'
    img.setAttribute('src' , mealImage)
    img.className = 'card-img-top'
    h5.appendChild(cardTitle)
    cardBody.appendChild(h5)
    cardBody.appendChild(img)
    card.appendChild(cardBody)
    col.appendChild(card)
    main_div.appendChild(col)
    
}

})
.catch(err => console.log(err));
}
//============================================================================
 function randomMeal() {

    // var search = document.getElementById('search')
    var api2 = `https://www.themealdb.com/api/json/v1/1/random.php`

    fetch (api2)
    .then (res => res.json() )
    .then (data =>{
const recipeArray = data.meals;
var div1 = document.getElementById('recepies')
var main_div = document.getElementById('recepiesR')
main_div.innerHTML = '';
div1.innerHTML = '';
        for (let i = 0; i < recipeArray.length; i++) {
           var mealTitle =  recipeArray[i].strMeal
           var mealImg = recipeArray[i].strMealThumb
           var mealDescrip = recipeArray[i].strInstructions

           mealData[i] ={
               mealTitle: mealTitle,
               mealImg: mealImg,
               mealDescrip: mealDescrip
           }

           //console.log(mealData[i])

           var pera = document.createElement('p')
           var recipeDes = document.createTextNode(mealDescrip)
           var img = document.createElement('img')

           var h5 = document.createElement('h5')
           var title = document.createTextNode(mealTitle)
           var cardBody = document.createElement('div')
           var card = document.createElement('div')

           pera.className = "card-text card_n"
           img.setAttribute ('src' , mealImg)
           img.className = "card-img-top img-n"
           h5.className = "card-title"
           cardBody.className = "card-body"
           card.className = "card mb-3 text-center backColor display-block"

           h5.appendChild(title)
           pera.appendChild(recipeDes)
           cardBody.appendChild(h5)
           cardBody.appendChild(img)
           cardBody.appendChild(pera)
           card.appendChild(cardBody)
           main_div.appendChild(card)
        }

    })
   .catch(err => console.log(err)); 
 }