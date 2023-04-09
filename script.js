var accordions = document.getElementsByClassName('accordion');
var i;
for (i = 0; i < accordions.length; i++) {
    accordions[i].onclick = function () {
        this.classList.toggle("active");
        var desc = this.nextElementSibling;
        if (desc.style.height) {
            desc.style.height = null
        } else {
            desc.style.height = desc.scrollHeight + "px";
        };
    };
};