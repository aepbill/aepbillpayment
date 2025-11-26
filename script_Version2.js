document.addEventListener('DOMContentLoaded', function () {
    var form = document.getElementById('billPayForm');
    var successMsg = document.getElementById('form-success');
    form.addEventListener('submit', function (e) {
        e.preventDefault();
        // Here you would add AJAX/payment integration.
        form.style.display = "none";
        successMsg.style.display = "block";
        window.scrollTo({top: successMsg.offsetTop, behavior: "smooth"});
    });
});