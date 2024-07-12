

const rateBtn = Array.from(document.getElementsByClassName(`rate-btn`));

const submit = document.querySelector('.submit')


let stored = ` `

rateBtn.forEach( (elemet, index) => {
    elemet.addEventListener('click', function() {
        // console.log(`you clicked on a ${index + 1} button`)

        stored = `${index + 1}`
    })
} )


submit.addEventListener('click', function () {

    localStorage.setItem(`dataKey`, stored)


    console.log(stored)


    window.location.href = `./secondPage.html`
})

