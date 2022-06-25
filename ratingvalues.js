const one = document.querySelector(".one");
const two = document.querySelector(".two");
const three = document.querySelector(".three");
const four = document.querySelector(".four");
const five = document.querySelector(".five");

const oneColor = document.querySelector(".one-color");
const twoColor = document.querySelector(".two-color");
const threeColor = document.querySelector(".three-color");
const fourColor = document.querySelector(".four-color");
const fiveColor = document.querySelector(".five-color");

function whenClickedOne() {
    let removeClassArr = [two, three, four, five]
    for (i = 0; i < removeClassArr.length; i++) {
        removeClassArr[i].classList.remove("whenClickedBg")
    }
    
    one.classList.add("whenClickedBg");
    oneColor.classList.add("whenClickedFont");
}

function whenClickedTwo() {
    let removeClassArr = [three, four, five]
    for (i = 0; i < removeClassArr.length; i++) {
        removeClassArr[i].classList.remove("whenClickedBg")
    }
    
    one.classList.add("whenClickedBg");
    oneColor.classList.add("whenClickedFont");
    two.classList.add("whenClickedBg");
    twoColor.classList.add("whenClickedFont");
}

function whenClickedThree() {
    let removeClassArr = [four, five]
    let addClassArr = [one, two, three]
    let addColorArr = [oneColor, twoColor, threeColor]
    let removeColorArr = [fourColor, fiveColor]
    
    for (i = 0; i < removeClassArr.length; i++) {
        removeClassArr[i].classList.remove("whenClickedBg")
    }

    for (i = 0; i < addClassArr.length; i++) {
        addClassArr[i].classList.add("whenClickedBg")
    }

    for (i = 0; i < removeColorArr.length; i++) {
        removeColorArr[i].classList.remove("whenClickedFont")
    }

    for (i = 0; i < addColorArr.length; i++) {
        addColorArr[i].classList.add("whenClickedFont")
    }
}

function whenClickedFour() {
    five.classList.remove("whenClickedBg");
    fiveColor.classList.remove("whenClickedFont")
    
    let addClassArr = [one, two, three, four]
    let addColorArr = [oneColor, twoColor, threeColor, fourColor, fiveColor]
    
    for (i = 0; i < addClassArr.length; i++) {
        addClassArr[i].classList.add("whenClickedBg")
    }

    for (i = 0; i < addColorArr.length; i++) {
        addColorArr[i].classList.add("whenClickedFont")
    }
}

function whenClickedFive() {
    let addClassArr = [one, two, three, four, five]
    let addColorArr = [oneColor, twoColor, threeColor, fourColor, fiveColor]
    for (i = 0; i < addClassArr.length; i++) {
        addClassArr[i].classList.add("whenClickedBg")
    }

    for (i = 0; i < addColorArr.length; i++) {
        addColorArr[i].classList.add("whenClickedFont")
    }
}

one.addEventListener("click", whenClickedOne)
two.addEventListener("click", whenClickedTwo)
three.addEventListener("click", whenClickedThree)
four.addEventListener("click", whenClickedFour)
five.addEventListener("click", whenClickedFive)





