console.log('*****Assignment-2 promise  ********');

// function getData(uId) {
//     setTimeout(() => {
//     console.log("Fetched the data!");
//     return "skc@gmail.com";
//     }, 4000);
//     }
    
//     console.log("start");
//     var email = getData("skc");
//     console.log("Email id of the user id is: " + email);
//     console.log("end");

async function getData(uId) {
    let promise = new Promise(resolve =>{
        setTimeout(() => {
               
                console.log("Fetched the data!");
                resolve( "skc@gmail.com"); }, 4000);
            })

           return await promise;
           

    }

    console.log("start");
    getData("skc").then((email)=>{
        console.log("Email id of the user id is: " + email);
        console.log("end");}
        );