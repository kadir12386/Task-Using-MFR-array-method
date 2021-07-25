//1.create an XHR object.
var request = new XMLHttpRequest();//new is the keyword which represent the object
//2. open a connection
request.open('GET','https://restcountries.eu/rest/v2/all',true);//we are receiving form 
//3.send a connection
request.send();//open from client to server sending url
//4.once data has been received successfully, we have to convert the data.
request.onload = function(){
    var data = JSON.parse(this.response);
    console.log(data);
    // console.log(data.map(data => data.currencies));



    
    // console.log(data.map(data => data.name)); 


    // 1. Get all the countries from Aisa Continent/region using filter function.
    let asia_countries = data.filter(element => element.region === "Asia");
    console.log("All the countries from Asia Continent/region : ",asia_countries);

    // 2. Get all the countries with population of less than 2 lacs using filter function.
    let countries_population = data.filter(element => element.population <200000);
    console.log("All the countries with population of less than 2 lacs",countries_population);
    
    // //3. Print the country which use as Dollars(USD) as currency.
    // console.log(data.map(data => data.currencies));
    let cusd=data.filter((x)=>{
        for(var i in x.currencies)
        {
            if(x.currencies[i].code ==='USD')
            {
                return true;
            }
        }
    });
    console.log(cusd);

    
    
    //4.Print the sum of the total population of the countries by using the reduce function.
    let totalPopulation =data.reduce((total,currentvalue,) => total+currentvalue.population,0)
    console.log("The total population of the countries: ",totalPopulation);
    
    

}



// var obj={
//     name:"abc",
//     age:24
// }//this is object

// var arr =[1,2,3,]//this is array

// var student=[{

// }]



// var obj = [{
//     "name": "India",
//     "capital": "New Delhi",

//     "nativeName": "भारत",
//     "numericCode": "356",
//     "currencies": [
//         {
//             "code": "INR",
//             "name": "Indian rupee",
//             "symbol": "₹"
//         }
//     ]
// },
//     {
//         "name": "Kuwait",
//         "capital": "Kuwait City",
//         "nativeName": "الكويت",
//         "numericCode": "414",
//         "currencies": [
//             {
//                 "code": "KWD",
//                 "name": "Kuwaiti dinar",
//                 "symbol": "د.ك"
//             }
//         ],
//     }
// ];

// sir if i want to print the currencies symbol or code how to do the sir?

// console.log(currencies.map(curr => curr.code));
// is this code is crt sir?




