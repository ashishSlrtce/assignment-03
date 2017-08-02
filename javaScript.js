$( document ).ready(function() {

$(".loader").hide(); //loader hidden at start

//variable to store the facebook token
    var myFacebookToken = 'EAACEdEose0cBAAU1EaqxZA0WtJGLFi2ZBXOUGeOrwJ8EYPv78qeIVXZA04icTZAwHms1CZCFRPZA5gznOK6EhwfVdVplhs0t4PH2f0h5NTiNdgCfPiroXKYZCABWOlws18wZAGCv7dveZBwiww7Eg2OZBISZAFaw4gSa8EEe9WjVsJ1wmrilHxJyGIqA405oWxsjsIZD';
   
   //function to get the users recent facebook posts
    function getFacebookposts(){
$.ajax('https://graph.facebook.com/me?fields=posts,birthday,email&access_token='+myFacebookToken,{
             success : function(response){
             console.log(response);
              $(response.posts.data).each(function(index) {
             	$("#postsInfo").append("<br><br>"+response.posts.data[index].story + "<br><br>"); 
             })
	             },
            error:function(){
                alert(errormessage);

            },
            timeout:5000,
                 beforeSend:function(){
                   $('.loader').show();  
                 },
                 complete:function(){
                     $('.loader').hide();
                 }
             })
         }
	             
//function to get the users profile information
                 function getFacebookprofile(){
$.ajax('https://graph.facebook.com/me?fields=name,hometown,devices,relationship_status,gender,languages,birthday,email&access_token='+myFacebookToken,{
             success : function(response){
             console.log(response);
             	$("#profileInfo").append("</br></br></br>"+"Name:"+response.name+"</br></br></br>"+"Birthday:"+response.birthday+"</br></br></br>"+"Email:"+response.email+"</br></br></br>"+"Hometown:"+response.hometown.name
               +"</br></br></br>"+"Relationship Status:"+response.relationship_status+"</br></br></br>"+"Gender:"+response.gender+"</br></br></br>"+"Language:"+response.languages[1].name);
                 
	             },
 beforeSend:function(){
                   $('.loader').show();  
                 },
                 complete:function(){
                     $('.loader').hide();
                 }
                 }
             )}

    
//functions defined on clicking of the buttons
	             $("#btn2").on('click',getFacebookposts)
                     
	             $("#btn1").on('click',getFacebookprofile)
})
