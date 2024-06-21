
const checkbox1 = document.getElementById('toggleList1');
const list1 = document.getElementById('myList1');
const checkbox2 = document.getElementById('toggleList2');
const list2 = document.getElementById('myList2');
const checkbox3= document.getElementById('toggleList3');
const list3 = document.getElementById('myList3');
const checkbox4 = document.getElementById('toggleList4');
const list4 = document.getElementById('myList4');
const checkbox5= document.getElementById('toggleList5');
const list5 = document.getElementById('myList5');
const checkbox6= document.getElementById('toggleList6');
const list6 = document.getElementById('myList6');
const checkbox7= document.getElementById('toggleList7');
const list7 = document.getElementById('myList7');
const checkbox8= document.getElementById('toggleList8');
const list8 = document.getElementById('myList8');


checkbox1.addEventListener('change', function() {
  list1.classList.toggle('hidden');
});
checkbox2.addEventListener('change', function() {
  list2.classList.toggle('hidden');
});
checkbox3.addEventListener('change', function() {
  list3.classList.toggle('hidden');
});
checkbox4.addEventListener('change', function() {
  list4.classList.toggle('hidden');
});
checkbox5.addEventListener('change', function() {
  list5.classList.toggle('hidden');
});
checkbox6.addEventListener('change', function() {
  list6.classList.toggle('hidden');
});
checkbox7.addEventListener('change', function() {
  list7.classList.toggle('hidden');
});
checkbox8.addEventListener('change', function() {
  list8.classList.toggle('hidden');
});

function goBack() {
  window.history.back();
}

function toggleForm() {
  var form = document.getElementById("myForm");
  var checkbox = document.getElementById("showForm");
  if (checkbox.checked) {
    form.style.display = "block";
  } else {
    form.style.display = "none";
  }
}
 
          function Captcha() {  
          // Define the characters that can be used in the captcha code
  const chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  
  // Generate a random string of 6 characters
  let captchaCode = "";
  for (let i = 0; i < 6; i++) {
    captchaCode += chars[Math.floor(Math.random() * chars.length)];
  }
  
  // Set the value of the txtCaptcha element to the captcha code
  document.getElementById("txtCaptcha").value = captchaCode;  
        } 

    function validateForm() {
  
  var email = document.getElementById("email").value;
  var number_s = document.getElementById("number_s").value;
  var date1 = document.getElementById("date1").value;

  var phone = document.getElementById("phonenumber").value;
  var txtCompare = document.getElementById("txtCompare").value;
    var username = document.getElementById("myUsername").value;


  if (  number_s == "" ){
    alert(" يرجى ملء  الحقل الإلزامية");
    return false;
  }
  var numberPattern = /^(0[1-9]|1[0-5])[0-9]{9}$/;
  if (!numberPattern.test(number_s)) {
    alert("يرجى إدخال رقم وطني صالح بين 01 و 15");
    return false;
  }
 var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    alert("يرجى إدخال عنوان بريد إلكتروني صالح");
    return false;
  }
  

  if (spaner < 1) {
    alert("يرجى إدخال عدد أيام صالح (لا يمكن أن يكون أقل من يومايوصل إلى النهاية اليوم)");
    return false;
  }

var phonePattern = /((0)(93|94|95|96|98|99)([0-9]{7}))|((0)(92|95|96|97)([0-9]{7}))/;
  if (!phonePattern.test(phone)) {
    alert("يرجى إدخال رقم هاتف صالح مع رمز الشبكة(syriatel:093 or 099 mtn:094 or 096 )");
    return false;
  }

  var captcha = document.getElementById("txtCaptcha").value;
  if (captcha == "") {
    alert("يرجى إدخال رمز التحقق من الكابتشا");
    return false;
  }

  if (captcha != txtCompare) {
    alert("رمز التحقق من الكابتشا غير صحيح");
    return false;
  }
    
  // All validation rules have passed
  alert("تم تقديم الطلب بنجاح  \n  الحساب الكامل    " +price*spaner+" ل.س  \n "+ spaner+document.getElementById('typerant').textContent);
  return true;}