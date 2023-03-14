//დავალება 1

let array = [12, 25, 3, 6, 8, 14, 7, 23];
 let newArray = array.map(item => item / 3);
 console.log(newArray);

//დავალება 2

 let languages = ["html", "css", "javascript", "python", "php"];
 let newArray = languages.filter((item) => item.length > 3);
 console.log(newArray);

//დავალება 3

 let words = ['Madrid', 'Rome', 'Milan', 'Berlin'];
 let newWords = words.filter(item => item.includes('M') || item.includes('m'));



//დავალება 4

 let arr1 = [1, 2];
 let arr2 = [3, 4];
 let arr3 = [5, 6];
 let newArray = arr1.concat(arr2, arr3);
 console.log(newArray);

//დავალება 5

 let arr = [-1, -2, -3, 4].some((item) => item > 0);
 console.log(arr);

//დავალება 6

let array =[23,45,32,5,87,7,3,98];
 let maxNumber = array.sort((x, y) => y - x)[array.length - 1];
 console.log(maxNumber);

 //დავალება 7.

 let newDiv = document.createElement("div");
 newDiv.setAttribute("class","wraper");

 let newImg = document.createElement("img");
 newImg.setAttribute("src","https://iso.500px.com/wp-content/uploads/2016/03/stock-photo-142984111.jpg");
 newImg.setAttribute("alt","image");


 let newH2 = document.createElement("h2");
 newH2.classList.add("title");
 newH2.textContent = "image title";
 newH2.style.color = "red";
 newH2.style.fontSize = "30px";

 newDiv.appendChild(newImg);
 newDiv.appendChild(newH2);

 document.getElementById("id-div").appendChild(newDiv);