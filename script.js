languageEnlish();

function languageEnlish(){
     $.ajax({
         	url: " https://techkaro-test.herokuapp.com/api/v1/getdata?lang=en",
             success: function(data){
                 let link1= data.menuOptions[0];
                 let link2= data.menuOptions[1];
                 let link3= data.menuOptions[2];
                 let link4= data.menuOptions[3];
                 let currentDate = new Date();
                 let flowerName = data.info.heading;
                 let flowerDiscription = data.info.description;
                 let biggestSale = data.sale.heading;
                 let saleDescription = data.sale.description;
               
               //navbar links
                 document.querySelector(".menu-options1").innerHTML= link1;
                 document.querySelector(".menu-options2").innerHTML= link2;
                 document.querySelector(".menu-options3").innerHTML= link3;
                 document.querySelector(".menu-options4").innerHTML= link4;

                 //currentdate
                 document.querySelector(".date-current").innerHTML= currentDate;

                 //flower's heading
                 document.querySelector(".info").innerHTML= flowerName;

                 //flower's description
                 document.querySelector(".description-flower").innerHTML= flowerDiscription;

                 // biggestSale
                 document.querySelector(".sale-heading").innerHTML= biggestSale;

                 //saleDescription
                 document.querySelector(".sale-description").innerHTML= saleDescription;
              
             }
     })

}


function languageurdu(){
     $.ajax({
         	url: " https://techkaro-test.herokuapp.com/api/v1/getdata?lang=ur",
             success: function(data){
                 let link1= data.menuOptions[0];
                 let link2= data.menuOptions[1];
                 let link3= data.menuOptions[2];
                 let link4= data.menuOptions[3];
                 let currentDate = new Date();
                 let flowerName = data.info.heading;
                 let flowerDiscription = data.info.description;
                 let biggestSale = data.sale.heading;
                 let saleDescription = data.sale.description;
               
               //navbar links
                 document.querySelector(".menu-options1").innerHTML= link1;
                 document.querySelector(".menu-options2").innerHTML= link2;
                 document.querySelector(".menu-options3").innerHTML= link3;
                 document.querySelector(".menu-options4").innerHTML= link4;

                 //currentdate
                 document.querySelector(".date-current").innerHTML= currentDate;

                 //flower's heading
                 document.querySelector(".info").innerHTML= flowerName;

                 //flower's description
                 document.querySelector(".description-flower").innerHTML= flowerDiscription;

                 // biggestSale
                 document.querySelector(".sale-heading").innerHTML= biggestSale;

                 //saleDescription
                 document.querySelector(".sale-description").innerHTML= saleDescription;
              
             }
     })

}




function languagechinees(){
     $.ajax({
         	url: " https://techkaro-test.herokuapp.com/api/v1/getdata?lang=zh",
             success: function(data){
                   let link1= data.menuOptions[0];
                 let link2= data.menuOptions[1];
                 let link3= data.menuOptions[2];
                 let link4= data.menuOptions[3];
                 let currentDate = new Date();
                 let flowerName = data.info.heading;
                 let flowerDiscription = data.info.description;
                 let biggestSale = data.sale.heading;
                 let saleDescription = data.sale.description;
               
               //navbar links
                 document.querySelector(".menu-options1").innerHTML= link1;
                 document.querySelector(".menu-options2").innerHTML= link2;
                 document.querySelector(".menu-options3").innerHTML= link3;
                 document.querySelector(".menu-options4").innerHTML= link4;

                 //currentdate
                 document.querySelector(".date-current").innerHTML= currentDate;

                 //flower's heading
                 document.querySelector(".info").innerHTML= flowerName;

                 //flower's description
                 document.querySelector(".description-flower").innerHTML= flowerDiscription;

                 // biggestSale
                 document.querySelector(".sale-heading").innerHTML= biggestSale;

                 //saleDescription
                 document.querySelector(".sale-description").innerHTML= saleDescription;
                 
              
             
             }
     })

}
