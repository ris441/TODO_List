const express = require('express');
const bodyparser = require('body-parser');
let items = ["Add Your Task From Here"];

// making app 
const app = express();
app.use(bodyparser.urlencoded({extended:true}));
app.set('view engine', 'ejs');
app.use(express.static("public"));
app.get('/', (req, res) =>{

    // res.send("respose is received ");
    // res.sendFile(__dirname+"/index.html");
    let weekday = '';
    //  var day = new Date();
    //  var storeday = day.getDay();
    //  console.log(storeday)
    // switch(storeday){
    //     case 0:
    //          weekday='a Sunday';
    //          break;

    //     case 1:
    //          weekday='a Monday';
    //          break;
    //     case 2:
    //          weekday='a Tuesday';
    //          break;
    //    case 3:
    //          weekday='a Wednesday';
    //          break;

    //     case 4:
    //          weekday='a Thursday';
    //          break;
    //     case 5: 
    //           weekday='a Friday';
    //           break;
    //     case 6:
    //         weekday='a Saturday';



    //     default:
    //         weekday='a default day';
    //         break;
    // }

    let options = {
        weekday:"long",
        day:"numeric",
        month: "long"
    }
    let today = new Date();
    console.log(today.toLocaleDateString("hi-IN",options))
    console.log(today.toLocaleDateString("en-US",options))
    weekday = today.toLocaleDateString("hi-IN",options);
    res.render('home',{day:weekday,newtask:items});
});

app.post('/', function(req, res){
     let  item = req.body.task;
     if(item.length>0){

         items.push(item);
     }
      console.log(item);
    //  res.render('home',{newtask:item});
    res.redirect("/")
});
// app.post('/', function(req, res) {
//     if(req.body.delete){
  
//         // const index = items.indexOf(req.body.delete); 
//         if (items.length > -1) { // only splice array when item is found
//             items.splice(items.length-1, 1);
//         }
//       }
//     //items is my array where I'm storing the newly added to-do list items.
//       res.redirect('/');
// });
app.listen(3000,function(){
    console.log("listening on port 3000");
})