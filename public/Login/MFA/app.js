document.addEventListener("DOMContentLoaded", function () {
  const otpFields = document.querySelectorAll(".otp-field");

  otpFields.forEach(function (field, index) {
    field.addEventListener("input", function () {
      // Move to the next input field when a value is entered
      if (field.value.length === 1 && index < otpFields.length - 1) {
        otpFields[index + 1].focus();
      }
    });

    // Move to the previous input field when backspace is pressed and the field is empty
    field.addEventListener("keydown", function (event) {
      if (event.key === "Backspace" && field.value.length === 0 && index > 0) {
        otpFields[index - 1].focus();
      }
    });
  });
});
