

function Confirm(){
    input = document.getElementsByName(input).value

    if (input == ""){
       document.getElementsByName('errorDisplay').styles.visibility = "show";
    }
    else{
        return 0;
    }
}