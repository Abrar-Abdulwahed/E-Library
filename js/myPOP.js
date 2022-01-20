let loginPage = "<div class='login-form'><div class='login-container'><h1>تسجيل الدخول</h1><div class='login-form-container'><form action=''><input type='email' name='email' id='email' class='email' placeholder='البريد الإلكتروني أو رقم الجوال'><input type='password' name='password' id='password' class='password' placeholder='كلمة السر'><span>نسيت؟</span><input type='submit' value='تسجيل الدخول'></form></div></div><div class='have-account'><p>ليس لديك حساب؟</p><button onclick='signup()'>انشاء حساب جديد</button></div></div>";
// let loginPage="<div>h</div>";
let signupPage = '\
<div class="signup-form my-2">\
			<div class="row justify-content-center">\
				<div class="col-sm-12 col-md-5">\
					<h2 class="h3 my-2 text-align-center">إنشاء حساب</h2>\
					<form action="" class="flex-col">\
						<div class="form-control mt-1">\
							<label for="mobileNo"></label>\
							<input id="mobileNo" type="number" name="mobileNo" placeholder="رقم الجوال" class="ml-auto"/>\
							<label for="countryCode"></label>\
							<input id="countryCode" type="text" name="countryCode" placeholder="رمز البلد" class="mr-1"/>\
						</div>\
						<p class="mt-1">\
							سوف نرسل لك\
							<b>رمز التحقق عن طريق رسالة نصية</b>\
						</p>\
						<div class="form-control mt-1">\
							<label for="confirmCode"></label>\
							<input id="confirmCode" type="text" name="confirmCode" placeholder="ادخل رمز التحقق" class="w-100"/>\
						</div>\
						<div class="form-control mt-1">\
							<label for="firstName"></label>\
							<input id="firstName" type="text" name="firstName" placeholder="ادخل الاسم الأول" class="w-100"/>\
						</div>\
						<div class="form-control mt-1">\
                            <label for="lastName"></label>\
                            <input id="lastName" type="text" name="lastName" placeholder="ادخل اللقب" class="w-100" />\
                        </div>\
                        <div class="form-control mt-1">\
                            <label for="email1"></label>\
                            <input id="email1" type="email" name="email1" placeholder="البريد الالكتروني" class="w-100" />\
                        </div>\
                        <div class="form-control mt-1">\
                            <label for="email2"></label>\
                            <input id="email2" type="email" name="email2" placeholder="تأكيد البريد الالكتروني" class="w-100" />\
                        </div>\
                        <div class="form-control mt-1">\
                            <label for="password"></label>\
                            <input id="password" type="password" name="password" placeholder="كلمةالسر" class="w-100" />\
                        </div>\
                        <div class="form-control mt-1">\
                            <input id="cbx-privacy" type="checkbox" checked />\
                            <label class="cbx" for="cbx-privacy">\
                                <div class="flip">\
                                    <div class="front"></div>\
                                    <div class="back">\
                                        <svg width="16" height="14" viewBox="0 0 16 14">\
                                            <path d="M2 8.5L6 12.5L14 1.5"></path>\
                                        </svg>\
                                    </div>\
                                </div>\
                            </label>\
                            <span class="pr-1">\
                                أوافق على\
                                <a href="https://www.jarir.com/terms_and_conditions" target="_blank">\
                                    <b>على الشروط والأحكام</b>\
                                </a>\
                            </span>\
                        </div>\
                        <div class="form-control mt-1">\
                            <input id="cbx-subscribe" type="checkbox" checked />\
                            <label class="cbx" for="cbx-subscribe">\
                                <div class="flip">\
                                    <div class="front"></div>\
                                    <div class="back">\
                                        <svg width="16" height="14" viewBox="0 0 16 14">\
                                            <path d="M2 8.5L6 12.5L14 1.5"></path>\
                                        </svg>\
                                    </div>\
                                </div>\
                            </label>\
                            <span class="pr-1"> أوافق للانضمام للنشرة البريدية</span>\
                        </div>\
                        <div class="form-control mt-1">\
                            <input type="submit" class="w-100 text-align-center" value="إنشاء حساب" />\
                        </div>\
                    </form>\
                    <p class="text-align-center my-2">\
                        لديك حساب؟\
                        <p id="needLogin2" onclick="login()">تسجيل الدخول</p>\
                    </p>\
                </div>\
            </div>\
        </div>\
';
// slideshow Modal
var modal = document.getElementById("modal-dialog");
var loginElem1 = document.getElementById("needLogin");
var signupElem1 = document.getElementById("needSignup");
var loginElem2 = document.getElementById("needLogin2");
var signupElem2 = document.getElementById("needSignup2");

var span = document.getElementsByClassName("close")[0];

loginElem1.addEventListener('click', ()=>{
    document.getElementById('modal-content').innerHTML = loginPage;
    document.getElementById("modal-dialog").style.display = "block";
    // if(signupElem1)
    //     signupElem1.style.display = "none";
});

function login() {
    document.getElementById('modal-content').innerHTML = loginPage;
    document.getElementById('modal-dialog').style.display = "block";
}
function signup() {
    document.getElementById('modal-content').innerHTML = signupPage;
    document.getElementById('modal-dialog').style.display = "block";
}

signupElem1.addEventListener('click', ()=>{
    document.getElementById('modal-content').innerHTML = signupPage;
    document.getElementById("modal-dialog").style.display = "block";
    loginElem1.style.display = "none";
});
// span.onclick = function() {
//   modal.style.display = "none";
// }
"<button onclick='signin()'>انشاء حساب جديد</button>"
"<button onclick='document.getElementById('modal-content').innerHTML = signupPage;document.getElementById('modal-dialog').style.display = 'block';'>انشاء حساب جديد</button>"
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}