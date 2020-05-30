import utils from "../utils.js";



let bearArray = [];
let bearId = 0;



const clickButtonEvent = (e) => {

  let fishingLog = {};

  fishingLog['status'] = e.target.value;
  fishingLog['timeStamp'] = utils.getDate()
  fishingLog['bearId'] = e.target.closest(".bear-card").id
  console.log(fishingLog)
}




const addBearToArray = () => {
  let newBear = {};
  newBear['name'] = document.getElementById("inputName").value;
  newBear['imgUrl'] = document.getElementById("addImage").value;
  newBear['uniqueId'] = `bear${bearId}`;

  bearId++
  
  bearArray.push(newBear);
  console.log(bearArray)
}

const getBear = () => {
  return bearArray;
};

export default { addBearToArray, getBear, clickButtonEvent }
