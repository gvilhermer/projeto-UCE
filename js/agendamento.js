
document.addEventListener("DOMContentLoaded", function () {
    

    const timeButtons = document.querySelectorAll(".time-btn");
    

    let selectedTime = document.querySelector(".time-btn.active")?.textContent || "";

    timeButtons.forEach(button => {
        button.addEventListener("click", function () {
           
            document.querySelector(".time-btn.active")?.classList.remove("active");
            
           
            this.classList.add("active");
            
         
            selectedTime = this.textContent;

           
        });
    });

    const dateItems = document.querySelectorAll(".date-item");

let selectedDate = document.querySelector(".date-item.selected")?.textContent || "";

dateItems.forEach(item => {
    item.addEventListener("click", function () {

        document.querySelector(".date-item.selected")?.classList.remove("selected");

        this.classList.add("selected");

        selectedDate = this.textContent;
    });
});
   
    const confirmButton = document.querySelector(".confirm-btn");

 
   confirmButton.addEventListener("click", function () {
    if (selectedTime && selectedDate) {
        alert(`Agendamento confirmado para ${selectedDate} às ${selectedTime}!`);
    } else {
        alert("Por favor, selecione um dia e horário.");
    }
});
    
});