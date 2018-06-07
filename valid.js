
var flag=0;
function addDetails(){
    $('span').hide();
    validateFirstName();
    validateLastName();
    validateDesignation();
    validateEmployeeCode();
    validateBloodGroup();
    // validateReasonsForIssues();
    // validateDateOfJoining();
    validateEmailId();
    // validateMobileNum();
    // validateEmerContact();
    // if(flag==0)
    //     postData();
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
    $('span').hide();
})
function spanerror(sid,bid){
    $(`#${sid}`).show();
    $(`#${bid}`).css( "border","solid 1px red");
}

function validateFirstName(){
    const fn=$('#firstName').val();
    if(fn==""){
        flag=1;
        spanerror('errorfn','firstName');  
    }
}

function validateLastName(){
    const ln=$('#lastName').val();
    if(ln==""){
        flag=1;
        spanerror('errorln','lastName');
    }
}

function validateDesignation(){
    const de=$('#designation').val();
    if(de==""||de==null){
        flag=1;
        spanerror('errorde','designation');
    }
}
    
function validateEmployeeCode(){
        const ec=$('#emp_code').val();
        if(ec===""){
            flag=1;
            spanerror('erroren','emp_code'); 
        }
}

function validateEmailId(){
    const ec=$('#email').val();
    const p=/^[a-z|A-Z][a-z|A-Z|0-9]+@virtusa.com/;
    const r=ec.match(p);
    if(r==null||ec==""){
        flag=1;
        spanerror('errormail','email'); 
    }
}

function validateBloodGroup(){
    
}