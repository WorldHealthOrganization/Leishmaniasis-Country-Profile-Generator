    

function toBoolText(text){
    switch(text){
        case "9":
            return "Unknown";
        case "8":
            return WHEN_NON_APPLICABLE;
        default:
            return booleanToYesNo(text);
    }
}