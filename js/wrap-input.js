const $wrapInput = document.querySelector('.wrap-input');
const $inputCollab = $wrapInput.querySelector(".input-collab");
const $eyeCollab = $wrapInput.querySelector('.eye-collab');

$eyeCollab.addEventListener("click", () => {

    if ($wrapInput.classList.contains('-show')){
        $inputCollab.setAttribute("type", "password");
    } else {
        $inputCollab.setAttribute("type", "text");
    }

    $wrapInput.classList.toggle("-show");
});

const $wrapInput2 = document.querySelector('.wrap-input2');
const $inputCollab2 = $wrapInput2.querySelector(".input-collab2");
const $eyeCollab2 = $wrapInput2.querySelector('.eye-collab2');

$eyeCollab2.addEventListener("click", () => {

    if ($wrapInput2.classList.contains('-show')){
        $inputCollab2.setAttribute("type", "password");
    } else {
        $inputCollab2.setAttribute("type", "text");
    }

    $wrapInput2.classList.toggle("-show");
});