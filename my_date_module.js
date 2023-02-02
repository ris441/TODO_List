exports.curr_date = function(){
    
    const options = {
        weekday:"long",
        day:"numeric",
        month: "long"
    }
    const today = new Date();
    // console.log(today.toLocaleDateString("hi-IN",options))
    // console.log(today.toLocaleDateString("en-US",options))
   return  today.toLocaleDateString("hi-IN",options);

}

exports.curr_day=function(){
    
    const options = {
        weekday:"long"
    }
    const today = new Date();
    // console.log(today.toLocaleDateString("hi-IN",options))
    // console.log(today.toLocaleDateString("en-US",options))
   return  today.toLocaleDateString("hi-IN",options);
}