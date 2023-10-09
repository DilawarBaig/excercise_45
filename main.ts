// Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly.

function car (manufacturer:string, model:string, ...rest:any[]) {
    let carinfo: any= {
      manufacturer: manufacturer,
      model: model,
    }
    rest.forEach(function([index, value]){
      carinfo[index] = value;
    })
    return carinfo;
  }
  
  let carinfo = car("Audi", "Etron",["year", 2022],["color", "black"],["Optional Features", ["8 Airbags", "Sunroof","Heated Seats"]],["Fuel Type", "Electric"], ["Range", "485KM"]);  
  console.log(carinfo);
  
