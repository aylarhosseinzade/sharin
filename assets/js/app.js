var display_nav = false

function blur_body() {
    var general_container = document.getElementById('general-container')
    display_nav = !display_nav
    console.log(display_nav)
    if (display_nav == true) {
        general_container.classList.add('blur-display')
    } else {
        general_container.classList.remove('blur-display')

    }
}

window.onload = function() {
    var checkboxes = document.getElementsByTagName("INPUT");

    for (var x = 0; x < checkboxes.length; x++) {
        if (checkboxes[x].type == "checkbox") {
            checkboxes[x].checked = false;
        }
    }

}