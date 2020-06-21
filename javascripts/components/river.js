import utils from "../helpers/utils.js";
import bearData from "../helpers/data/bearData.js";



const makeCard = () => {
  const myBear = bearData.getBear()
  let cardString = '';

  for (let i = 0; i < myBear.length; i++) {
    const bear = myBear[i];

    cardString += `
    <div id="${bear.uniqueId}" class="card bear-card col-sm-5">
      <img class="card-img-top" src="${bear.imgUrl}" alt="Bear image">
        <class="card-body">
          <h3 class="card-title">${bear.name}</h3>
          <button value="Attempt" type="button" class="attempt btn btn-outline-warning">Fishing Attempt</button>
          <button value="Success" type="button" class="success btn btn-outline-success">Fishing Success</button>
          ${makeGrid(bear.uniqueId)}
          </div>
          `; 
  }
  utils.printToDom("#river", cardString)

  const buttons = document.querySelectorAll(".attempt, .success")
  for (const button of buttons) {
    button.addEventListener("click", bearData.clickButtonEvent)
  }
};

const makeGrid = (id) => {
  const myLog = bearData.getLog();

  const logsForBear = myLog.filter((log) => log.bearId === id);

  let fishingForBear = logsForBear.filter((fishing) => fishing.status === "Success");

  let rowString = `<h6>Total number of fish caught: ${fishingForBear.length}</h6>`;

  const headerString = `
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Status</th>
        <th scope="col">Time</th>
      </tr>
    </thead>
  `;


for (let i = 0; i < logsForBear.length; i++) {
  const logData = logsForBear[i];
  
  rowString += `
  <div id=${id}>
    <tbody>
      <tr>
        <th scope="row">${i+1}</th>
        <td class="${logData.status}">${logData.status}</td>
        <td>${logData.timeStamp}</td>
      </tr>
    </tbody>
  </div>
  `;
  }
let domString = `<table class="table table-sm">` + headerString + rowString + `</table>`

return domString;
}

export default { makeCard, makeGrid }
