const stars = document.querySelectorAll('.stars');
for (let m = 0; m < stars.length; m++) {
    let starSmall = stars[m].querySelectorAll('.star');
    for (let i = 0; i < starSmall.length; i++) {
        starSmall[i].addEventListener('click', () => {
            for (let k = 0; k < starSmall.length; k++) {
                starSmall[k].style = 'background: gray';

            }
            for (let j = 0; j <= i; j++) {
                starSmall[j].style = 'background: orange;';

            }
        })

    }
}