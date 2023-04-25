(function() {
    function getRandomInt( min, max ) {
           return Math.floor( Math.random() * ( max - min + 1 ) ) + min;
      }
      
    function generateProductKey() {
      var tokens = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
        chars = 5,
        segments = 4,
        keyString = "";
        
      for( var i = 0; i < segments; i++ ) {
        var segment = "";
        
        for( var j = 0; j < chars; j++ ) {
            var k = getRandomInt( 0, 35 );
          segment += tokens[ k ];
        }

        keyString += segment;
        
        if( i < ( segments - 1 ) ) {
          keyString += "-";
        }
      }
      
      return keyString;
  
    }
    
    document.addEventListener("DOMContentLoaded", function() {
      var generate = document.querySelector( "#generate_key" ),
        output = document.querySelector( "#output" );
    
      generate.addEventListener( "click", function() {
        var productKey = generateProductKey();
        output.value = productKey;
        document.getElementById("generate_key").style.pointerEvents="none";
    
        
      }, false);
    });
    
  })();


function copyKey(){
 var copyKey = document.getElementById("output");
 copyKey.select();
 copyKey.setSelectionRange(0,99999);

 navigator.clipboard.writeText(copyKey.value);
 document.getElementById('copy_key').innerHTML="Copied !";
 alert("copied the product key:"+ copyKey.value);

  }




  function getRandomInt( min, max ) {
    return Math.floor( Math.random() * ( max - min + 1 ) ) + min;
}

  function generateProductKey() {
    var tokens = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
      chars = 5,
      segments = 4,
      keyString = "";
      
    for( var i = 0; i < segments; i++ ) {
      var segment = "";
      
      for( var j = 0; j < chars; j++ ) {
          var k = getRandomInt( 0, 35 );
        segment += tokens[ k ];
      }

      keyString += segment;
      
      if( i < ( segments - 1 ) ) {
        keyString += "-";
      }
    }
    
    return keyString;

  }

  function changeKey(){
    output = document.querySelector( "#output" );
    var productKey = generateProductKey();
    output.value = productKey;
    document.getElementById('copy_key').innerHTML="Copy key";
  }


  


  document.addEventListener("DOMContentLoaded", function() {
  var buttons = document.querySelectorAll(".random-box button");
  for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function(event) {
        saveKey(event.target);
    },false);
  }
  
  function saveKey(btn) {
    var key = document.getElementById("output").value;
    let user_records = new Array();
    user_records=JSON.parse(localStorage.getItem("users"))?JSON.parse(localStorage.getItem("users")):[];
    if (btn.getAttribute("id")=="generate_key" || btn.getAttribute("id")=="change_key" ) {
      var length = user_records.length;
      var current_user = user_records[length - 1];
      current_user.productKey=key;
      user_records[length-1]=current_user;
      localStorage.setItem("users",JSON.stringify(user_records));
    }
  }
  })





 
  




   
   