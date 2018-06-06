
var flag=0;
function addDetails(){
    validateFirstName();
    validateLastName();
    validateDesignation();
   
}

function postData(){
    const data={
        firstName:$('#firstName').val(),
        lastName:$('#lastName').val()
    };
    $.ajax({
        type: "POST",
        url: 'https://id-form-15ee0.firebaseio.com/applicationIds.json',
        data: JSON.stringify(data),
        success: onPostSucess,
       // dataType: dataType
      });
}
const onPostSucess=(data)=>{
    console.log(data);
}
$('document').ready(()=>{
    $('#errorfn').hide();
    $('#errorln').hide();
    $('#errorde').hide();
    $('#erroren').hide();
})


function validateFirstName(){
    const fn=$('#firstName').val();
    if(fn===""){
        flag=0;
        $('#firstName').css( "border","solid 1px red")
        $('#errorfn').show();
        
    }
    else{
        flag=1;
    }
    
}

  

function validateLastName(){
    const ln=$('#lastName').val();
    if(ln===""){
        flag=0;
        $('#lastName').css( "border","solid 1px red");
        $('#errorln').show();
    }
    
    else{
        flag=1;
    }
}

   

function validateDesignation(){
    const de=$('#designation').val();
    if(de===""){
        flag=0;
        $('#designation').css( "border","solid 1px red");
        $('#errorde').show();
    }

    else{
        flag=1;
    }}

    function validateEmp_No(){
        const fn=$('#emp_no').val();
        if(fn===""){
            flag=0;
            $('#emp_no').css( "border","solid 1px red")
            $('#erroren').show();
            
        }
        else{
            flag=1;
        }
        
    }

