    let isDarkMode = false; 
    let button = document.getElementsByClassName("button")
    let equal=document.getElementById("button_equal")
    let clearButton = document.getElementById("clear")
    let input=document.getElementById("userInput")
    const time = document.getElementById("time")
    
    console.log(button);

    Array.from(button).forEach(element => {
        element.addEventListener("click",function(){
            input.value+=this.textContent
        })
    });

    clear.addEventListener('click', function() {
        input.value = '';
    });
    equal.addEventListener("click",function(){
        try{
        input.value=eval(input.value)}
        catch(error){
            console.error('An error occurred: ', error);
            input.value = 'Error';
        }
    })
   
    let lightIcon = document.getElementById('light');
    let darkIcon = document.getElementById('dark');

    lightIcon.addEventListener('click', function() {
        // Change the color of the icon
         // Replace 'yellow' with the color you want
         if (!isDarkMode) { // If it's not dark mode, do nothing
            return;
        }
        lightIcon.style.color="gold"
        calculator_mode.style.backgroundColor = "salmon";
        darkIcon.style.color="black"
        isDarkMode = false;
    });
    
    let calculator_mode = document.getElementsByClassName('calculator_mode')[0];

    // Set the initial background color
    calculator_mode.style.backgroundColor = 'salmon';
    
    // Change the background color when the darkIcon is clicked
    darkIcon.addEventListener('click', function() {
        if (isDarkMode) { // If it's already dark mode, do nothing
            return;
        }
        lightIcon.style.color="black"
        this.style.color = 'blue';
        calculator_mode.style.backgroundColor = '#00008B';
        isDarkMode = true;
    });

    input.addEventListener("keydown", function(){
        if(event.keyCode===13){
            event.preventDefault();
            try{
            input.value=eval(this.value)}
            catch (error) {
                console.error('An error occurred: ', error);
                input.value = 'Error';
            }
        }
    })

    function updateClock() {
        const now = new Date();
        const hours = now.getHours().toString().padStart(2, '0');
        const minutes = now.getMinutes().toString().padStart(2, '0');
        const seconds = now.getSeconds().toString().padStart(2, '0');
        document.getElementById('clock').textContent = `${hours}:${minutes}:${seconds}`;
    }
    
    setInterval(updateClock, 1000);
    updateClock();