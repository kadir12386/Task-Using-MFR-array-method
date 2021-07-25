//1.create an XHR object.
var request = new XMLHttpRequest();//new is the keyword which represent the object
//2. open a connection
request.open('GET','https://restcountries.eu/rest/v2/all',true);
//3.send a connection
request.send();//open from client to server sending url
//4.once data has been received successfully, we have to convert the data.
request.onload = function(){
    var data = JSON.parse(this.response);
//     console.log(data);
    
    // console.log(data.map(data => data.name)); 

    // 1. Get all the countries from Aisa Continent/region using filter function.
    let asia_countries = data.filter(element => element.region === "Asia");
    console.log("All the Asia Continent/region countries : ",asia_countries);

    // 2. Get all the countries with population of less than 2 lacs using filter function.
    let countries_population = data.filter(element => element.population < 200000);
    console.log("All the countries with population of less than 2 lacs: ",countries_population);
    
    // //3. Print the country which use as Dollars(USD) as currency.
    // console.log(data.map(data => data.currencies));
    let currency=data.filter((x)=>{
        for(var i in x.currencies)
        {
            if(x.currencies[i].code ==='USD')
            {
                return true;
            }
        }
    });
    console.log("The country which  is using Dollars (USD) currency: ",currency);

   
    //4.Print the sum of the total population of the countries by using the reduce function.
    let totalPopulation =data.reduce((total,currentvalue,) => total+currentvalue.population,0)
    console.log("The total population of the countries: ",totalPopulation);

}
