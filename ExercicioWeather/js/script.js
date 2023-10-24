const search = document.querySelector('.search-box button')
const container  = document.querySelector('.container')
const weatherBox= document.querySelector('.weather-box')
const weatherDetail  = document.querySelector('.weather-details')
const error404  = document.querySelector('.not-found')

search.addEventListener('click', ()=>{
    console.log('carregar dados');

    const APIkey = 'c8d934c70e16520a6e2edbcf69fa4e2c'
    const city = document.querySelector(".search-box input").value

    if(city === '') return;


    fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIkey}`
         )

         .then((Response) => Response.json())
         .then((json) => {
            // console.log(json) 

            if(json.cod === '404'){
                container.style.height = '400px'
                weatherBox.style.display = 'none'
                weatherDetail.style.display = 'none'
                error404.style.display = 'block'
                error404.classList.add("fadeIn")
                return
             }

            if(json.cod === 'preview'){
                container.style.height = '400px'
                weatherBox.style.display = 'block'
                weatherDetail.style.display = 'none'
                error404.style.display = 'none'
                weatherBox.classList.add("fadeIn")
                return
            }

         })
});
