const birthday= document.querySelector('#birth-date')
const luckyNum =document.querySelector('#lucky-number')
const submit = document.querySelector('#btn-submit')

function ValidateData()
{
    let result = true;
    if(birthday.value=='' || luckyNum.value =='')
    {
        console.log("Enter Mandatory fields");
        return false;
    }

    let luckyNumVal= Number(luckyNum.value);
    if (luckyNumVal<1 || luckyNumVal>99)
    {
        console.log("Enter lucky Number between 1-99")
        return false;
    }
    return result;
}

function CaculateDateSum()
{
    let sum = 0;
    console.log(sum)
    let dateValue = birthday.value;
    dateValue = dateValue.replaceAll("-","")
    console.log(dateValue)
    for(let index=0; index< dateValue.length; index++)
    {
        sum+= Number(dateValue[index]);
    }
    
    return sum;
}

function CheckLuck(sum)
{
    console.log(sum);
    let luckyNumVal= Number(luckyNum.value);
    let reminder = sum % luckyNumVal
    if(reminder == 0)
    {
        console.log("lucky")
    }
    else
    {
        console.log("unlucky by", reminder, " days")
    }
}

submit.addEventListener("click", function OnButtonClicked()
{
    let result = ValidateData();
    console.log("validation: ", result)
    if (result === true)
    {
        let sum = CaculateDateSum()
        CheckLuck(sum)
    }
    

});
