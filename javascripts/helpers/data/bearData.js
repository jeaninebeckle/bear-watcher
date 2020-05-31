import utils from "../utils.js";
import river from "../../components/river.js";

let bearArray = [];
let bearId = 0;
let logNumber = 1;

let logArray = [];

const clickButtonEvent = (e) => {
  
  let fishingLog = {};

  fishingLog['number'] = logNumber++;
  fishingLog['status'] = e.target.value;
  fishingLog['timeStamp'] = utils.getDate()
  fishingLog['bearId'] = e.target.closest(".bear-card").id
  logArray.push(fishingLog);

  river.makeGrid();
  
  console.log(fishingLog) 
  console.log(fishingLog['bearId'])
}

const getLog = () => {
  return logArray;
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

export default { addBearToArray, getBear, clickButtonEvent, getLog }
