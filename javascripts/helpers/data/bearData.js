let bearArray = [];

const addBearToArray = () => {
  let newBear = {};

  newBear['name'] = document.getElementById("inputName").value;
  newBear['imgUrl'] = document.getElementById("addImage").value;
  
  bearArray.push(newBear);
  console.log(bearArray)
}

export default { addBearToArray }
