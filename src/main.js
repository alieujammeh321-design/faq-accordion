const buttons = document.querySelectorAll(".faq-btn")

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const faqitem = button.closest(".faq-item")
    const answer = faqitem.querySelector(".answer")
    const plusIcon = button.querySelector(".plus-icon")
    const minusIcon = button.querySelector(".minus-icon")
    
    answer.classList.toggle("hidden")
    plusIcon.classList.toggle("hidden")
    minusIcon.classList.toggle("hidden")
  })
})