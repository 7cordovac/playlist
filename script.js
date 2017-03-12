
/* Module 1: STRUCTURE AND CSS
* As a user, when I visit the splash page, I should see a page whose general layout matches the design mockup [excluding dynamic content]
* As a user, when I visit the splash page, I should see a railroad track with 19% opacity on the right hand side.
* As a user, when I visit the playlist page, I should see a page whose general layout matches the design mockup [excluding dynamic content]
* As a user, when I click "choose tracks" on the splash page, it takes me to the playlist page. */

/*## APIs:
A user will hit this api to get all of the albums:
https://lit-fortress-6467.herokuapp.com/object

A user will send a POST request to this api to send the playlist when completed. https://lit-fortress-6467.herokuapp.com/post*/


$( document ).ready(function() {
   var albCovers = [];
   $.getJSON('https://lit-fortress-6467.herokuapp.com/object/',function(data){
      while(albCovers.length < 3){
        var rand = Math.floor(Math.random() * data['results'].length);
        var covers = albCovers.indexOf(data['results'][rand]['cover_art']);
        if(albCovers.indexOf(data['results'][rand]['cover_art']) === -1){
           albCovers.push(data['results'][rand]['cover_art']);
        }
      }
      for (var i=0; i< albCovers.length; i++){
         $("#albumPhoto").append(`
            <div class="row">
               <div class="col-md-4"></div>
               <div id="image2" class="col-md-4">
                  <img src="images/${albCovers[i]}" class="img-responsive">
               </div>
               <div class="col-md-4">6</div>
            </div>
            `)
      }
      for (var i=0; i< data.results.length; i++) {
         $("#albumlist").append('<img src="images/' + data.results[i].cover_art +'" class="img-responsive">')

      }
         //$("#details")=(data.results.name)

         
   })
});
