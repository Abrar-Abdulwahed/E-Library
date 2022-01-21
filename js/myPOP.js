let loginPage = `
                <div class="login-form py-1">
                    <div class="row justify-content-center">
                        <div class="col-xs-10 col-sm-10 col-md-10 col-lg-9">
                            <h2 class="h3 my-2 text-align-center">تسجيل الدخول</h2>
                            <form action="" class="flex-col">
                                <div class="form-control mt-1">
                                    <label for="emailOrMobile"></label>
                                    <input id="emailOrMobile" type="text" name="emailOrMobile" placeholder="رقم الجوال" />
                                </div>
                                <div class="form-control mt-1">
                                    <label for="password"></label>
                                    <input id="password" type="password" name="password" placeholder="كلمة السر" />
                                </div>
                                <div class="form-control mt-1">
                                    <input type="submit" class="text-align-center w-100" value="تسجيل الدخول" />
                                </div>
                            </form>
                            <div class="have-account text-align-center pb-2">
                                <p>ليس لديك حساب؟</p>
                                <button class="btn" onclick="signup()">إنشاء حساب جديد</button>
                            </div>
                        </div>
                    </div>
                </div>
               `;
// let loginPage="<div>h</div>";
let signupPage = `
                <div class="signup-form my-2">
                    <div class="row justify-content-center">
                        <div class="col-xs-10 col-sm-10 col-md-10 col-lg-9">
                            <h2 class="h3 my-2 text-align-center">إنشاء حساب</h2>
                            <form action="" class="flex-col">
                                <div class="form-control mt-1">
                                    <label for="mobileNo"></label>
                                    <input id="mobileNo" type="number" name="mobileNo" placeholder="رقم الجوال"
                                        class="ml-auto" />
                                    <label for="countryCode"></label>
                                    <input id="countryCode" type="text" name="countryCode" placeholder="رمز البلد"
                                        class="mr-1" />
                                </div>
                                <p class="mt-1">
                                    سوف نرسل لك
                                    <b>رمز التحقق عن طريق رسالة نصية</b>
                                </p>
                                <div class="form-control mt-1">
                                    <label for="confirmCode"></label>
                                    <input id="confirmCode" type="text" name="confirmCode" placeholder="ادخل رمز التحقق" />
                                </div>
                                <div class="form-control mt-1">
                                    <label for="firstName"></label>
                                    <input id="firstName" type="text" name="firstName" placeholder="ادخل الاسم الأول" />
                                </div>
                                <div class="form-control mt-1">
                                    <label for="lastName"></label>
                                    <input id="lastName" type="text" name="lastName" placeholder="ادخل اللقب" />
                                </div>
                                <div class="form-control mt-1">
                                    <label for="email1"></label>
                                    <input id="email1" type="email" name="email1" placeholder="البريد الالكتروني" />
                                </div>
                                <div class="form-control mt-1">
                                    <label for="email2"></label>
                                    <input id="email2" type="email" name="email2" placeholder="تأكيد البريد الالكتروني" />
                                </div>
                                <div class="form-control mt-1">
                                    <label for="password"></label>
                                    <input id="password" type="password" name="password" placeholder="كلمة السر" />
                                </div>
                                <div class="form-control mt-1">
                                    <input id="cbx-privacy" type="checkbox" checked />
                                    <label class="cbx" for="cbx-privacy">
                                        <div class="flip">
                                            <div class="front"></div>
                                            <div class="back">
                                                <svg width="16" height="14" viewBox="0 0 16 14">
                                                    <path d="M2 8.5L6 12.5L14 1.5"></path>
                                                </svg>
                                            </div>
                                        </div>
                                    </label>
                                    <p class="pr-1">
                                        أوافق على
                                        <a href="https://www.jarir.com/terms_and_conditions" target="_blank">
                                            <b>على الشروط والأحكام</b>
                                        </a>
                                    </p>
                                </div>
                                <div class="form-control mt-1">
                                    <input id="cbx-subscribe" type="checkbox" checked />
                                    <label class="cbx" for="cbx-subscribe">
                                        <div class="flip">
                                            <div class="front"></div>
                                            <div class="back">
                                                <svg width="16" height="14" viewBox="0 0 16 14">
                                                    <path d="M2 8.5L6 12.5L14 1.5"></path>
                                                </svg>
                                            </div>
                                        </div>
                                    </label>
                                    <p class="pr-1"> أوافق للانضمام للنشرة البريدية</p>
                                </div>
                                <div class="form-control mt-1">
                                    <input type="submit" class="w-100 text-align-center" value="إنشاء حساب" />
                                </div>
                            </form>
                            <span class="text-align-center d-block mt-2 my-2">
                                لديك حساب؟
                                <span onclick="login()" class="link">تسجيل الدخول</span>
                            </span>
                        </div>
                    </div>
                </div>
                `;
// slideshow Modal
// id="needLogin2" onclick="login()"
var modal = document.getElementById("modal-dialog");
var loginElem = document.getElementById("needLogin");
var signupElem = document.getElementById("needSignup");

var span = document.getElementsByClassName("close")[0];

loginElem.addEventListener('click', ()=>{
    document.getElementById('modal-content').innerHTML = loginPage;
    document.getElementById("modal-dialog").style.display = "flex";
});
signupElem.addEventListener('click', ()=>{
    document.getElementById('modal-content').innerHTML = signupPage;
    document.getElementById("modal-dialog").style.display = "flex";
});
function login() {
    document.getElementById('modal-content').innerHTML = loginPage;
    document.getElementById('modal-dialog').style.display = "flex";
}
function signup() {
    document.getElementById('modal-content').innerHTML = signupPage;
    document.getElementById('modal-dialog').style.display = "flex";
}
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