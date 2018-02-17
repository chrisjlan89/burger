
 $("#submit").on("click", function(event) {
    event.preventDefault();
    
    var newBurger = {
        burger_name : $("#burg").val().trim()
       
    }

    $.ajax({
     method : "POST",
      url : "/api/burgers",
      data : newBurger
     }).then(
         function() {
        location.reload();
              
         }
     )

    });    


    $(".devour").on("click" , function(event){
    event.preventDefault();
     
       var id  = this.id;
       console.log("id" , id)
       $.ajax({
           method : "PUT",
           url : "api/eaten/" + id 
           
       }).then(
           function() {
           location.reload();
           }
       )


    });





    // $.ajax({
    //      method : "POST",
    //       url : "/api/burgers",
    //       data : newBurger
    //      }).then(
    //         function() {
    //           $.ajax({
    //            method : "GET",
    //            url : "/",
               
    //             }).then(
    //                   function(){
                
    //         }
    //      )
   
    //    });    