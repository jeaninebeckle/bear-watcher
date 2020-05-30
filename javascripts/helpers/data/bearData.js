let bearArray = [];
let bearId = 0;

const addBearToArray = () => {
  let newBear = {};

  newBear['name'] = document.getElementById("inputName").value;
  newBear['imgUrl'] = document.getElementById("addImage").value;
  newBear['uniqueId'] = bearId;
  bearId++
  
  bearArray.push(newBear);
  console.log(bearArray)
}

const getBear = () => {
  return bearArray;
};

export default { addBearToArray, getBear }
