const utilsModule = require("./utils");

const giftModule = {
  formContainer: document.getElementById("gift__form-container"),
  firstName: document.getElementById("form__firstname"),
  lastName: document.getElementById("form__lastname"),
  email: document.getElementById("form__email"),
  tel: document.getElementById("form__tel"),
  // fromDateValue = fromDate.value.trim(),
  // toDateValue = toDate.value.trim(),
  msg: document.getElementById("msg"),
  loader: document.getElementById("loader"),
  inputs: document.querySelectorAll("input, textarea"),
  handleFormSubmit: function (event) {
    event.preventDefault();

    giftModule.checkInputs();
  },
  handleDisplayForm: function (value) {
    if (value === 0) {
      giftModule.hideForm();
    } else if (value === 1) {
      giftModule.showForm();
    }
  },
  handleInputChange: function (input) {
    if (!input.value) input.parentElement.className = "form__control";
  },
  handleMinAndMaxDate: function (event) {
    const form = document.getElementById("form");

    event.target.setAttribute("min", giftModule.getLimitDate(0));
    event.target.setAttribute("max", giftModule.getLimitDate(2));
    form.elements.todate.setAttribute("min", form.elements.fromdate.value);
    form.elements.todate.value < form.elements.fromdate.value
      ? (form.elements.todate.value = form.elements.fromdate.value)
      : "";
  },
  getLimitDate: function (value) {
    const today = new Date();
    const day = today.getDate();
    const month = today.getMonth() + 1;
    const year = today.getFullYear() + value;

    if (day < 10) {
      day = "0" + day;
    }
    if (month < 10) {
      month = "0" + month;
    }

    return year + "-" + month + "-" + day;
  },
  hideForm: function () {
    giftModule.clearInputsText();
    giftModule.formContainer.style.display = "none";
    giftModule.formContainer.classList.remove("gift__form-container--active");
  },
  showForm: function () {
    const dates = document.querySelectorAll(".timepicker");

    giftModule.formContainer.style.display = "flex";
    giftModule.formContainer.classList.add("gift__form-container--active");

    for (date of dates) {
      date.addEventListener("click", giftModule.handleMinAndMaxDate);
      date.addEventListener("input", giftModule.handleMinAndMaxDate);
    }
  },
  checkInputs: function () {
    const firstNameValue = giftModule.firstName.value.trim(),
      lastNameValue = giftModule.lastName.value.trim(),
      emailValue = giftModule.email.value.trim(),
      telValue = giftModule.tel.value.trim(),
      // fromDate: fromDate.value,
      // toDate: toDate.value,
      emptyField = "Le champs ne doit pas être vide";

    if (!firstNameValue) {
      giftModule.setErrorFor(giftModule.firstName, emptyField);
    } else {
      giftModule.setSuccessFor(giftModule.firstName);
    }

    if (!lastNameValue) {
      giftModule.setErrorFor(giftModule.lastName, emptyField);
    } else {
      giftModule.setSuccessFor(giftModule.lastName);
    }

    if (!emailValue) {
      giftModule.setErrorFor(giftModule.email, emptyField);
    } else {
      giftModule.setSuccessFor(giftModule.email);
    }

    if (!telValue) {
      giftModule.setErrorFor(giftModule.tel, emptyField);
    } else {
      giftModule.setSuccessFor(giftModule.tel);
    }

    // if(!fromDateValue) {
    //    setErrorFor(fromDate, emptyField);
    // } else {
    //    setSuccessFor(fromDate);
    // }

    // if(!toDateValue) {
    //    setErrorFor(toDate, emptyField);
    // } else {
    //    setSuccessFor(toDate);
    // }
  },
  setErrorFor: function (input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector("small");

    small.innerText = message;
    formControl.className = "form__control error";
  },
  setSuccessFor: function (input) {
    const formControl = input.parentElement;

    formControl.className = "form__control success";
    giftModule.sendEmail();
  },
  sendEmail: async function () {
    giftModule.loader.style.display = "flex";
    const mailData = {
      firstName: giftModule.firstName.value,
      lastName: giftModule.lastName.value,
      email: giftModule.email.value,
      tel: giftModule.tel.value,
      msg: giftModule.msg.value,
    };

    try {
      await utilsModule.sendMail(mailData);

      giftModule.loader.style.display = "none";
      giftModule.makeSuccessModal();
      giftModule.clearInputsText();

      console.log("SUCCESS!");
    } catch (err) {
      giftModule.loader.style.display = "none";
      giftModule.makeErrorModal();

      console.log("FAILED...", err);
    }
  },
  makeSuccessModal: function () {
    swal({
      title: "Demande Envoyée avec succès !",
      text: "Selon mes disponibilités, je la confirmerai par mail.",
      icon: "success",
      button: "OK",
    });
  },
  makeErrorModal: function () {
    swal({
      title: "Oups...",
      text: "Echec de l'envoi de la demande",
      icon: "error",
      button: "OK",
    });
  },
  clearInputsText: function () {
    giftModule.inputs.forEach((input) => {
      input.value = "";
      input.parentElement.className = "form__control";
    });
  },
};

module.exports = giftModule;
