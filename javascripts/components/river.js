import utils from "../helpers/utils.js"
import bearData from "../helpers/data/bearData.js"


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
          <button value="Success" type="button" class="success btn btn-outline-success">Fishing Success</button><h6>Total number of fish caught: </h6>
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

  let rowString = '';

  const headerString = `
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Status</th>
        <th scope="col">Time</th>
      </tr>
    </thead>
  `;


for (let i = 0; i < myLog.length; i++) {
  const logData = myLog[i];
  if (id = logData.bearId) {
  rowString += `
  <div id=${id}>
    <tbody>
      <tr>
        <th scope="row">${logData.number}</th>`
        if (logData.status === "Attempt") {
        rowString += `<td class="table-attempt">${logData.status}</td>`
        }
        if (logData.status === "Success") {
          rowString += `<td class="tableSuccess">${logData.status}</td>`
          }
        rowString += `
        <td>${logData.timeStamp}</td>
      </tr>
    </tbody>
  </div>
  `;
  console.log(`${id}`)
  }
}
let domString = `<table class="table table-sm">` + headerString + rowString + `</table>`
return domString;
}

// const clickAttemptEvent = (e) => {
//   e.preventDefault();
//   console.log(utils.getDate())
// }

// const clickSuccessEvent = (e) => {
//   e.preventDefault();
//   console.log(utils.getDate())
// }



export default { makeCard, makeGrid }
