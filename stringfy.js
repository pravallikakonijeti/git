//Convert Object To String
const personalDetails=
 { name1:"Mouni", 
   age:20, 
   city:"NewYork"
};
console.log(typeof(personalDetails));
const jsonObject=JSON.stringify(personalDetails);//stringify()
console.log(typeof(jsonObject),jsonObject);

//Convert Array To String
const arrName=["Paravali", "Satya", "Swathi", "Ram"];
console.log(typeof(arrName),arrName);
const jsonArray=JSON.stringify(arrName);//stringfy()
console.log(typeof(jsonArray),jsonArray);

//convert string to object
const text='{"name1":"Mouni", "age":20,"city":"NewYork"}';
const object1=JSON.parse(text);//parse()
console.log(typeof(object1),object1);

//convert array to object
const tex='["Ford","BMW","Audi","Fiat" ]';
const myArr=JSON.parse(tex);//parse()
console.log(typeof(myArr),myArr);

