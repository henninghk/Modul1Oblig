function isDateValid(dato) {
    return  checkLength(dato)
         && checkPunctuation(dato)
         && checkYear(dato)
         && checkMonth(dato)
         && checkDay(dato)
     
 }
 
 function checkLength(dato) {
     return dato.length === 10;
 }
 
 function checkPunctuation(dato) {
     return dato.charAt(2) == '.' && dato.charAt(5) == '.';
 }
 
 function checkYear(dato) {
     const year = dato.substring(6);
     return year.length === 4 && year >= '0000' && year <= '9999';
 } 
 
 function checkMonth(dato) {
     const month = dato.substring(3, 5);
     return month.length === 2 && month >= '01' && month <= '12';
 } 
 
 function checkDay(dato) {
     const day = dato.substring(0, 2);
     const month = dato.substring(3, 5);
     const year = dato.substring(6);
     if (day.length === 2 && day >= '01' && day <= '28') return true;
     if (day > '31') return false;
     if (month != '02'){ 
         return day <= '30' || month !== '04' && month  !== '06' && month  !== '09' && month  !== '11';
     }
     else {
        return day == '29' && isLeapYear(year);
     }
 }
 function isLeapYear(year){
     return (year % 4 == 0 && year % 100 != 0 || year % 400 == 0);
 }