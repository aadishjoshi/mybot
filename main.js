  function nothingmuch(){
    var inquest = document.getElementById("question").value;
          $.ajax({
            type: "GET",
            url: "mybot.xml",
            datatype: "xml",
            success: function(xml){
              $(xml).find('converse').each(function(){
                var quest = $(this).find('quest').text();
                var ans = $(this).find('ans').text();
                if (inquest == quest) {
                  document.getElementById("para").innerHTML =ans;
                  if(inquest == "Give me Google stock update"){
                              $.ajax({
                                  type: 'GET',
                                  url: "https://www.quandl.com/api/v3/datasets/WIKI/GOOG/data.json?api_key=YOUR_API_KEY",
                                  
                                  dataType: "json",

                                  crossDomain: true,
                                  success: function (msg) {
                                    document.getElementById("myCanvas").style.visibility = "visible";
                                    var canvas = document.getElementById("myCanvas");
                                    var ctx = canvas.getContext("2d");
                                    var color_arr = ["#ff6666","#ffc04c","#ffff4c","#4cff4c","cyan","#4c4cff","#ff0080","#ad6aea","#d3d3d3","#e3e3e3"];
                                    var j = -15;
                                    for(var i=0;i<31;i++){
                                      var ptr = Math.floor(Math.random() * 10);
                                      ctx.fillStyle = color_arr[ptr];
                                      ctx.fillRect(j+15,240-(msg.dataset_data.data[i][1])/6,15,(msg.dataset_data.data[i][1])/6);
                                      j += 15;
                                    }
                                  },
                                  error: function (request, status, error) {
                                      alert(error);
                                  }
                                });
                  }else{

                    document.getElementById("chartContainer").innerHTML = "";
                    document.getElementById("chartContainer").style.visibility = "hidden";

                  }
                }
              });
            },
            error: function(){
              alert("Error")
            }
          });
    }