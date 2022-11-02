    
/** Translates optionSet codes into its names
 * 
 *  <optionSet code="OpS_YNU_Numeric_129" name="YNU_Numeric_129" id="mJKvd2WXQtp">
 */ 
function toBoolText_OpS_YNU_Numeric_129(text){
    var value = String(text);
    switch(value){
        case "9":
            return "Unknown";
        case "2":
            return "No";
        case "1":
            return "Yes";
        default:
            return booleanToYesNo(value);
    }
}

/** Translates optionSet codes into its names
 * 
 *  <optionSet code="OpS_Leish_SurvType" name="Leishmaniasis - Surveillance type" id="SqOSRZrBJzs">
 */ 
function toBoolText_OpS_Leish_SurvType(text){
    var value = String(text);
    switch(value){
        case "9":
            return "Unknown";
        case "8":
            return "Non-applicable";
        case "7":
            return "Other";
        case "2":
            return "Integrated";
        case "1":
            return "Vertical";
        default:
            return text;
    }
}