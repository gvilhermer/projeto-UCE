
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

   
    const confirmButton = document.querySelector(".confirm-btn");

 
    confirmButton.addEventListener("click", function () {
        if (selectedTime) {
            alert(`Agendamento confirmado para às ${selectedTime}!`);
        } else {
            alert("Por favor, selecione um horário antes de confirmar.");
        }
    });
    
});