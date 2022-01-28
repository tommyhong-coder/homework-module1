                  //photos
                  var photos = []; //Declare an empty array to store image element
                  var fileNames = []; //Declare an empty element to store image file names
                  var imageList = []; //Declare an empty array to store html list that contain an image
                  var image; //Declare an empty variable to store the assemnbled image list codes
                  var openList = "<li id='partner'>"; //Delare a variable to contain open list tag
                  var closeList = "</li>";  //Delacre a variable to contain close list tag
                  //create a loop to create 6 images starting with index of 0
                  for (var i=0; i<6; i++) {
                      fileNames.push("partner"+(i+1));  //Create image file name and store in array
                      photos.push("<img src='images/"+fileNames[i]+".png' alt='Partner adventures "+(i+1)+"' width='100'>"); //Assemble file name into image element and store in an array
                      image = openList + photos[i] + closeList;  //Assemble image element from array with list elements and store in a variable
                      imageList.push(image);  //Store(push) the assembled list codes into array
                  }
                      //display all six images from array
                      document.getElementById('partners').innerHTML = imageList.join(""); 
