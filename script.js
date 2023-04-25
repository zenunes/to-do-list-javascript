
//Elementos
const inputElement = document.querySelector(".new-input");
const addTaskBtn = document.querySelector(".new-button");

//Funções
const validateInput = () =>{
    return inputElement.value.trim().length > 0;
};

const handleAddTask = () =>{
    
    const inputIsValid = validateInput();
    
    console.log(inputIsValid);

    if (!inputIsValid){
        return inputElement.classList.add("error");
    }
};
const handleInputChange = () =>{
    const inputIsValid = validateInput();
    console.log(inputIsValid);
    if(inputIsValid){
        return inputElement.classList.remove("error");
    }
};


//Eventos
addTaskBtn.addEventListener("click", () => handleAddTask());
inputElement.addEventListener("change", () => handleInputChange());