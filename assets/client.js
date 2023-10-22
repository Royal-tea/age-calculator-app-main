window.addEventListener("load", function() {

    //Input query selectors
    const dayInput = document.querySelector("#inp-day");
    const monthInput = document.querySelector("#inp-month");
    const yearInput = document.querySelector("#inp-year");

    //Submit button query selector
    const submitButton = document.querySelector("#submit-button");

    //Display query selectors
    const dayDisplay = document.querySelector("#disp-day");
    const monthDisplay = document.querySelector("#disp-month");
    const yearDisplay = document.querySelector("#disp-year");

    submitButton.addEventListener("click", function(){
        calculateAge(dayInput.value,monthInput.value,yearInput.value);
    }); 

    function calculateAge(day,month,year){
        const date = new Date();
        const currentDay = date.getDate();
        const currentMonth = (date.getMonth()+1);
        const currentYear = date.getFullYear();

        const ageDay = currentDay - day;
        const ageMonth = currentMonth - month;
        const ageYear = currentYear - year;
        
        if(day != ""){
            dayDisplay.innerHTML = `<strong>${ageDay}</strong>days`;
        } else {
            dayDisplay.innerText = `-- days`;
        }

        if(month != ""){
            monthDisplay.innerHTML = `<strong>${ageMonth}</strong>months`;
        } else {
            monthDisplay.innerText = `-- months`;
        }
        
        if(year != ""){
            yearDisplay.innerHTML = `<strong>${ageYear}</strong>years`;
        } else {
            yearDisplay.innerText = `-- years`;
        }
    }

    
});