function ageCalculator(){
    const ageInput=document.getElementById('ageLable').value;
    if(!ageInput){
        alert("Please enter you date of birth");
        return
    }
    const ageLable = new Date(ageInput);
    const today = new Date();
    let age = today.getFullYear()-ageLable.getFullYear();
    const month = today.getMonth()-ageLable.getMonth();
    const day = today.getDay()-ageLable.getDay();
    if (month < 0 || ( month ===0 && day < 0)){
        age--;
    }
    const result = document.getElementById("result");
    result.textContent = `You are ${age} years old.`
    setTimeout(() => {
        document.getElementById("result").textContent = "";
    }, 60000); // 60,000 milliseconds = 60 seconds

}
