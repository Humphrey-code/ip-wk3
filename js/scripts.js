$(document).ready(function(){
  $("#design_img").click(function(){
    $("#design_img").toggle();
    $("#design_par").toggle();
  });
});

$(document).ready(function(){
  $("#design_par").click(function(){
    $("#design_img").toggle();
    $("#design_par").toggle();
  });
});

$(document).ready(function(){
  $("#dev_img").click(function(){
    $("#dev_img").toggle();
    $("#dev_par").toggle();
  });
});

$(document).ready(function(){
  $("#dev_par").click(function(){
    $("#dev_img").toggle();
    $("#dev_par").toggle();
  });
});

$(document).ready(function(){
  $("#prod_img").click(function(){
    $("#prod_img").toggle();
    $("#prod_par").toggle();
  });
});

$(document).ready(function(){
  $("#prod_par").click(function(){
    $("#prod_img").toggle();
    $("#prod_par").toggle();
  });
});


$(document).ready(function(){
  $("#work1").mouseleave(function(){
    $("#p1").hide();
  });
});

$(document).ready(function(){
  $("#work1").mouseover(function(){
    $("#p1").show();
  });
});

$(document).ready(function(){
  $("#work2").mouseleave(function(){
    $("#p2").hide();
  });
});

$(document).ready(function(){
  $("#work2").mouseover(function(){
    $("#p2").show();
  });
});

$(document).ready(function(){
  $("#work3").mouseleave(function(){
    $("#p3").hide();
  });
});

$(document).ready(function(){
  $("#work3").mouseover(function(){
    $("#p3").show();
  });
});

$(document).ready(function(){
  $("#work4").mouseleave(function(){
    $("#p4").hide();
  });
});

$(document).ready(function(){
  $("#work4").mouseover(function(){
    $("#p4").show();
  });
});

$(document).ready(function(){
  $("#work5").mouseleave(function(){
    $("#p5").hide();
  });
});

$(document).ready(function(){
  $("#work5").mouseover(function(){
    $("#p5").show();
  });
});

$(document).ready(function(){
  $("#work6").mouseover(function(){
    $("#p6").show();
  });
});

$(document).ready(function(){
  $("#work6").mouseleave(function(){
    $("#p6").hide();
  });
});

$(document).ready(function(){
  $("#work7").mouseover(function(){
    $("#p7").show();
  });
});

$(document).ready(function(){
  $("#work7").mouseleave(function(){
    $("#p7").hide();
  });
});

$(document).ready(function(){
  $("#work8").mouseover(function(){
    $("#p8").show();
  });
});

$(document).ready(function(){
  $("#work8").mouseleave(function(){
    $("#p8").hide();
  });
});

// funtion response(){
// var name = toString.document.getElementByClass("Name");
// alert("Hi" + " " + name + "Your response is well received. We will definitely get back to you as soon! Thank you");
// };

$(document).ready(function(){
  $("#button").click(function(event){
    var name =$("#Name").val();
    var mail =$("email_Address").val();
    var mess =$("message").val();

    if (name === "" || mail === "" || mess === ""){
      alert("Please fill up all fields as required!")
    } else {
      alert ("Hi" + " " + name + "," + "Your response is well received. We will definitely get back to you as soon! Thank you!")
    }

    event.preventDefault();

  });
});
