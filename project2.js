const form=document.querySelector('form')
//note below use case give empty value
//const height=parseInt(document.querySelector('#height').value)

form.addEventListener('submit',function(e){
    e.preventDefault()//submit default action is to send date  to server that we need to prevent
    const height=parseInt(document.querySelector('#height').value)//value deal with take input gives the string value
    //parseInt convert string to interger
    const weight= parseInt(document.querySelector('#weight').value);
    const results=document.querySelector('#results')
    if(height<0 || height==='' || isNaN(height)){
         results.innerHTML = 'please enter valid height ${height}'
    }
    else if(weight<0 || weight===''|| isNaN(weight)){
        weight.innerHTML = 'please enter valid weight ${weight}'
   }
   else {
       let bmi=weight/((height*height)/10000);
       bmi=bmi.toFixed(2);
       //showing the result
       results.innerHTML = bmi;
       if(bmi<18.6){
        results.innerHTML=`you are underweight ${bmi}`
       }
       else if(bmi>=18.6 && bmi<=24.9){
        results.innerHTML=`you have normal weight ${bmi}`
       }
       else{
         results.innerHTML=`you are overweight ${bmi}`
       }
   }


})