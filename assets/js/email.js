/**
 * KOMMÆRSJ - EmailJS Contact Form
 * Handles contact form submission via EmailJS
 */

(function () {
  // EmailJS credentials
  const PUBLIC_KEY = 'SP5IayKp_7eOD2lfU';
  const SERVICE_ID = 'gmail';
  const TEMPLATE_ID = 'rosie';

  // Initialize EmailJS
  emailjs.init(PUBLIC_KEY);

  const form = document.getElementById('contact-form');
  if (!form) return;

  const submitBtn = form.querySelector('.form-submit');
  const originalBtnHTML = submitBtn.innerHTML;

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    // Disable button and show loading state
    submitBtn.disabled = true;
    submitBtn.innerHTML = 'SENDER...';

    // Gather form data matching EmailJS template variables
    const templateParams = {
      from_name: form.querySelector('#name').value.trim(),
      from_email: form.querySelector('#email').value.trim(),
      phone: form.querySelector('#phone').value.trim(),
      message: form.querySelector('#message').value.trim(),
      to_email: 'jonas.lounissi@gmail.com'
    };

    emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams)
      .then(function () {
        // Success
        submitBtn.innerHTML = '✓ SENDT!';
        submitBtn.style.backgroundColor = '#22c55e';
        form.reset();

        // Reset button after 3 seconds
        setTimeout(function () {
          submitBtn.innerHTML = originalBtnHTML;
          submitBtn.style.backgroundColor = '';
          submitBtn.disabled = false;
        }, 3000);
      })
      .catch(function (error) {
        // Error
        console.error('EmailJS error:', error);
        submitBtn.innerHTML = 'FEIL – PRØV IGJEN';
        submitBtn.style.backgroundColor = '#ef4444';

        // Reset button after 3 seconds
        setTimeout(function () {
          submitBtn.innerHTML = originalBtnHTML;
          submitBtn.style.backgroundColor = '';
          submitBtn.disabled = false;
        }, 3000);
      });
  });
})();
