window.addEventListener('DOMContentLoaded', () => {

    const plusOneCheckbox = document.getElementById('plus-one-checkbox-btn');
    const partnerBlock = document.getElementById('partner-input-area');

    if (plusOneCheckbox && partnerBlock) {
        plusOneCheckbox.addEventListener('change', function () {
            if (this.checked) {
                partnerBlock.classList.add('visible');
            } else {
                partnerBlock.classList.remove('visible');
            }
        });
    }

    const form = document.getElementById('wedding-rsvp-form-final');

    if (form) {

        form.addEventListener('submit', function (e) {

            e.preventDefault();

            fetch(form.action, {
                method: form.method,
                body: new FormData(form),
                headers: {
                    'Accept': 'application/json'
                }
            })
            .then(response => {

                if (response.ok) {

                    form.innerHTML = `
                        <h2 style="text-align:center;">
                            Дякуємо ♥
                        </h2>
                        <p style="text-align:center;">
                            Вашу відповідь успішно надіслано.
                        </p>
                    `;

                } else {
                    alert('Помилка надсилання');
                }

            })
            .catch(() => {
                alert('Помилка з’єднання');
            });

        });

    }

});