window.addEventListener("load", function() {

    //Input query selectors
    const dayInput = document.querySelector("#inp-day");
    const monthInput = document.querySelector("#inp-month");
    const yearInput = document.querySelector("#inp-year");

    //Display query selectors
    const dayDisplay = document.querySelector("#disp-day");
    const monthDisplay = document.querySelector("#disp-month");
    const yearDisplay = document.querySelector("#disp-year");

    dayInput.addEventListener("input", function(){
        console.log(dayInput.value);
        calculateAge(dayInput.value,monthInput.value,yearInput.value);
    })

    monthInput.addEventListener("input", function(){
        console.log(monthInput.value);
        calculateAge(dayInput.value,monthInput.value,yearInput.value);
    })

    yearInput.addEventListener("input", function(){
        console.log(yearInput.value);
        calculateAge(dayInput.value,monthInput.value,yearInput.value);
    })

    function calculateAge(day,month,year){
        const date = new Date();
        const currentDay = date.getDate();
        const currentMonth = (date.getMonth()+1);
        const currentYear = date.getFullYear();

        const ageDay = currentDay - day;
        const ageMonth = currentMonth - month;
        const ageYear = currentYear - year;
        
        if(day != ""){
            dayDisplay.innerText = `${ageDay} Days`;
        } else {
            dayDisplay.innerText = `-- days`;
        }

        if(month != ""){
            monthDisplay.innerText = `${ageMonth} Months`;
        } else {
            monthDisplay.innerText = `-- Months`;
        }
        
        if(year != ""){
            yearDisplay.innerText = `${ageYear} Years`;
        } else {
            yearDisplay.innerText = `-- Years`;
        }
    }

    
});