<script>
            var imgIndex = 1;
            showImgs(imgIndex);
    
            function moveleft(n){
                showImgs(imgIndex += n);
            }
            function showImgs(n)
            {
                var i;
                var x = document.getElementsByClassName("banner_img");
                
                if(n>x.length){
                    imgIndex = 1;
                }
                if(n < 1)
                {
                    imgIndex = x.length;
                }
                for(i=0;i<x.length;i++)
                {
                    x[i].style.display = "none";
                }
                x[imgIndex - 1].style.display = "block";
            }
            </script>
        <script>
           
           function pageRedirect() {
                 window.location.href = "https://help.imdb.com/article/imdbpro/your-account/special-offers/GUCJ9BBXKDQPWAZV?ref_=helpart_nav_41#";
               }
            
            </script>
        
       
        <script>
            
            
            
            
            //initial values
            const API_KEY = "c1b90b4e03db7f0fa3c01d9b85f080ce";
            
            const url = "https://api.themoviedb.org/3/search/movie?api_key=c1b90b4e03db7f0fa3c01d9b85f080ce";
            
            
            
            
            const MOVIE_DB_IMAGE_ENDPOINT = 'https://image.tmdb.org/t/p/w500';
            
            
            const buttonElement = document.querySelector("#inputMov");
            const inputElement = document.querySelector("#Search_IMDb");
            const showData = document.querySelector("#showData");
            
            
            
            
            buttonElement.onclick = function(event)
            {
                event.preventDefault();
                const value = inputElement.value;
                
                const newUrl = url + "&query=" + value;
                
                fetch(newUrl)
                      .then((res) => res.json())
                      .then((data) => {
                         
                          console.log("Data: ", data);
                          displayData(data);
                      })
                      .catch((error) => {
                          console.log("Erro: ", error);
                      });
                
                
                
                
                console.log("value: ", value);
            }
            function displayData(data){
                const title = data.results[0];
                const movdiv = document.getElementById("title");
            
            const movname = title.title;
            const header = document.createElement("h2");
            header.innerHTML = movname;
            movdiv.appendChild(header);
            
            const movover = title.overview;
            const heading = document.createElement("h3");
            heading.innerHTML = movover;
            movdiv.appendChild(heading);
            
            const movrat = title.vote_average;
            const ratingss = document.createElement("h3");
            ratingss.innerHTML = movrat;
            movdiv.appendChild(ratingss);
            
            const dater = title.release_date;
            const datee = document.createElement("h3");
            datee.innerHTML = dater;
            movdiv.appendChild(datee);
            
            
            
            }
           
        </script>
