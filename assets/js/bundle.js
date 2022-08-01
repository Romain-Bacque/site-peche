!function(){const e={videoFile:document.getElementById("video-file"),videoIcon:document.getElementById("video-icon"),initAlbum:function(){document.querySelectorAll(".album__card").forEach(e=>{const t=e.querySelectorAll("a");e.querySelector(".album__description").innerText=t.length+" photos"}),new Swiper(".album__container",{effect:"coverflow",grabCursor:!0,centeredSlides:!0,slidesPerView:"auto",loop:!0,spaceBetween:32,coverflowEffect:{rotate:0}})},handleVideo:function(){e.videoFile.paused?(e.videoFile.play(),e.videoIcon.classList.add("ri-pause-line"),e.videoIcon.classList.remove("ri-play-line")):(e.videoFile.pause(),e.videoIcon.classList.remove("ri-pause-line"),e.videoIcon.classList.add("ri-play-line"))},handleVideoEnding:function(){e.videoIcon.classList.remove("ri-pause-line"),e.videoIcon.classList.add("ri-play-line")}};var t=e,n="user_I1HWuX9oE076hNrKEuHTK",o="service_ruzv3v1",l="template_y6oarwo";const s={formContainer:document.getElementById("container__form"),firstName:document.getElementById("user__firstname"),lastName:document.getElementById("user__lastname"),email:document.getElementById("user__email"),tel:document.getElementById("user__tel"),msg:document.getElementById("msg"),loader:document.getElementById("loader"),inputs:document.querySelectorAll("input, textarea"),handleFormSubmit:function(e){e.preventDefault(),s.checkInputs()},handleDisplayForm:function(e){0===e?s.hideForm():1===e&&s.showForm()},handleInputChange:function(e){e.value||(e.parentElement.className="form__control")},handleMinAndMaxDate:function(e){const t=document.getElementById("form");e.target.setAttribute("min",s.getLimitDate(0)),e.target.setAttribute("max",s.getLimitDate(2)),t.elements.todate.setAttribute("min",t.elements.fromdate.value),t.elements.todate.value<t.elements.fromdate.value&&(t.elements.todate.value=t.elements.fromdate.value)},getLimitDate:function(e){const t=new Date,n=t.getDate(),o=t.getMonth()+1;return n<10&&(n="0"+n),o<10&&(o="0"+o),t.getFullYear()+e+"-"+o+"-"+n},hideForm:function(){s.clearInputsText(),s.formContainer.style.display="none",s.formContainer.classList.remove("container__form")},showForm:function(){const e=document.querySelectorAll(".timepicker");for(date of(s.formContainer.style.display="flex",s.formContainer.classList.add("container__form"),e))date.addEventListener("click",s.handleMinAndMaxDate),date.addEventListener("input",s.handleMinAndMaxDate)},checkInputs:function(){const e=s.firstName.value.trim(),t=s.lastName.value.trim(),n=s.email.value.trim(),o=s.tel.value.trim(),l="Le champs ne doit pas \xeatre vide";e?s.setSuccessFor(s.firstName):s.setErrorFor(s.firstName,l),t?s.setSuccessFor(s.lastName):s.setErrorFor(s.lastName,l),n?s.setSuccessFor(s.email):s.setErrorFor(s.email,l),o?s.setSuccessFor(s.tel):s.setErrorFor(s.tel,l)},setErrorFor:function(e,t){const n=e.parentElement;n.querySelector("small").innerText=t,n.className="form__control error"},setSuccessFor:function(e){e.parentElement.className="form__control success",s.sendEmail()},sendEmail:function(){s.loader.style.display="flex",emailjs.send(o,l,{firstName:s.firstName.value,lastName:s.lastName.value,email:s.email.value,tel:s.tel.value,msg:s.msg.value?"Aucune information compl\xe9mentaire.":msg.value}).then(e=>{s.loader.style.display="none",s.makeSuccessModal(),s.clearInputsText(),console.log("SUCCESS!",e.status,e.text)},e=>{s.loader.style.display="none",s.makeErrorModal(),console.log("FAILED...",e)})},makeSuccessModal:function(){swal({title:"Demande Envoy\xe9e avec succ\xe8s !",text:"Selon mes disponibilit\xe9s, je la confirmerai par mail.",icon:"success",button:"OK"})},makeErrorModal:function(){swal({title:"Oups...",text:"Echec de l'envoi de la demande",icon:"error",button:"OK"})},clearInputsText:function(){s.inputs.forEach(e=>{e.value="",e.parentElement.className="form__control"})}};var i=s;const a={themeButton:document.getElementById("theme-button"),handleTheme:function(){document.body.classList.toggle("dark-theme"),a.themeButton.classList.toggle("ri-sun-line"),localStorage.setItem("selected-theme",getCurrentTheme()),localStorage.setItem("selected-icon",getCurrentIcon())},getCurrentTheme:function(){return document.body.classList.contains(darkTheme)?"dark":"light"},getCurrentIcon:function(){return a.themeButton.classList.contains(iconTheme)?"ri-moon-line":"ri-sun-line"},handleLinkClick:function(){document.getElementById("nav-menu").classList.remove("show-menu")},handleHeaderScroll:function(){const e=document.getElementById("header"),t=document.querySelector(".nav__logo-fish");scrollY>=100?e.classList.add("scroll-header"):e.classList.remove("scroll-header"),scrollY>=100?t.classList.add("nav__logo-fish-rotate"):t.classList.remove("nav__logo-fish-rotate")}};var r=a;var c={handleDescriptionDisplay:function(e,t){t.stopPropagation(),0===e?document.getElementById("lieux__description").classList.toggle("description"):1===e&&document.getElementById("lieux__description").classList.remove("description")}};const d={shelterPictures:document.querySelectorAll(".photo__g\xeete"),handlePicturesDisplay:function(e,t){switch(t.stopPropagation(),e){case 0:d.toggleShelter1();break;case 1:d.toggleShelter2();break;case 2:d.hideShelters();break;default:console.log(`Sorry, we are out of ${e}.`)}},toggleShelter1:function(){d.shelterPictures[1].classList.toggle("g\xeete2"),d.shelterPictures[0].classList.remove("g\xeete1")},toggleShelter2:function(){d.shelterPictures[0].classList.toggle("g\xeete1"),d.shelterPictures[1].classList.remove("g\xeete2")},hideShelters:function(){d.shelterPictures[0].classList.remove("g\xeete1"),d.shelterPictures[1].classList.remove("g\xeete2")}};var m=d;const u={loaderDOM:document.getElementById("loader-dom"),init:function(){u.initTheme(),t.initAlbum(),u.initIntersectionObserver(),u.initEmailjs(),u.addEventActions()},initDOMLoader:function(e){e<=0?(r.handleHeaderScroll(),u.loaderDOM.style.display="none"):(u.loaderDOM.style.opacity=e,window.setTimeout(()=>{u.initDOMLoader(e-.05)},50))},initTheme:function(){const e=localStorage.getItem("selected-theme"),t=localStorage.getItem("selected-icon"),n=document.getElementById("theme-button");e&&(document.body.classList["dark"===e?"add":"remove"]("dark-theme"),n.classList["ri-moon-line"===t?"add":"remove"]("ri-sun-line"))},initIntersectionObserver:function(){const e=new IntersectionObserver(e=>{e.forEach(e=>{e.isIntersecting?e.target.classList.remove("reveal"):e.target.classList.add("reveal")})},{root:null,rootMargin:"-10% 0px",treshold:0});document.querySelectorAll(".reveal, .reveal-box").forEach(t=>{e.observe(t)})},initEmailjs:function(){emailjs.init(n)},addEventActions:function(){window.addEventListener("load",()=>u.initDOMLoader(1)),window.addEventListener("scroll",()=>{u.handleSomeElementsDisplay(),u.handleScrollUpButton(),u.handleActiveNavLink(),r.handleHeaderScroll()}),document.getElementById("nav-toggle").addEventListener("click",()=>document.getElementById("nav-menu").classList.add("show-menu")),document.getElementById("nav-close").addEventListener("click",()=>document.getElementById("nav-menu").classList.remove("show-menu")),document.querySelectorAll(".nav__link").forEach(e=>e.addEventListener("click",r.handleLinkClick)),document.getElementById("theme-button").addEventListener("click",r.handleTheme),document.getElementById("marker").addEventListener("click",c.handleDescriptionDisplay.bind(null,0)),document.querySelector(".lieux__banni\xe8re").addEventListener("click",c.handleDescriptionDisplay.bind(null,1));const e=document.querySelectorAll(".panneau__text");e[0].addEventListener("click",m.handlePicturesDisplay.bind(null,0)),e[1].addEventListener("click",m.handlePicturesDisplay.bind(null,1)),document.querySelector(".g\xeetes__container").addEventListener("click",m.handlePicturesDisplay.bind(null,2));const n=document.querySelectorAll(".form__button");n[0].addEventListener("click",i.handleDisplayForm.bind(null,0)),n[1].addEventListener("click",i.handleDisplayForm.bind(null,1)),document.getElementById("form").addEventListener("submit",i.handleFormSubmit),document.querySelectorAll("input, textarea").forEach(e=>e.addEventListener("input",()=>i.handleInputChange(e))),document.getElementById("video-button").addEventListener("click",t.handleVideo),document.getElementById("video-file").addEventListener("ended",t.handleVideoEnding)},handleScrollUpButton:function(){const e=document.getElementById("scroll-up");window.scrollY>=560?e.classList.add("show-scroll"):e.classList.remove("show-scroll")},handleActiveNavLink:function(){const e=document.querySelectorAll("section[id]"),t=window.pageYOffset;e.forEach(e=>{const n=e.offsetHeight,o=e.offsetTop-50;sectionId=e.getAttribute("id"),t>o&&t<=o+n?document.querySelector(`.nav__menu a[href*="${sectionId}"]`).classList.add("active-link"):document.querySelector(`.nav__menu a[href*="${sectionId}"]`).classList.remove("active-link")})},handleSomeElementsDisplay:function(){const e=document.querySelectorAll("#cadeau, #g\xeetes");(window.scrollY<e[1].offsetTop-600||window.scrollY>e[1].offsetHeight+e[1].offsetTop)&&m.hideShelters(),(window.scrollY<e[0].offsetTop-600||window.scrollY>e[0].offsetHeight+e[0].offsetTop)&&i.hideForm()}};window.addEventListener("DOMContentLoaded",u.init)}();