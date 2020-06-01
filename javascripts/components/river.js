import utils from "../helpers/utils.js"
import bearData from "../helpers/data/bearData.js"


const makeCard = () => {
  const myBear = bearData.getBear()
  let cardString = '';

  for (let i = 0; i < myBear.length; i++) {
    const bear = myBear[i];
    cardString += `
    <div id="${bear.uniqueId}" class="card bear-card col-sm-6">
      <img class="card-img-top" src="${bear.imgUrl}" alt="Bear image">
        <class="card-body">
          <h3 class="card-title">${bear.name}</h3>
          <button value="Attempt" type="button" class="attempt btn btn-outline-warning">Fishing Attempt</button>
          <button value="Success" type="button" class="success btn btn-outline-success">Fishing Success</button><h6>Total number of fish caught: </h6>
          ${makeGrid()} //not working right
          </div>
          `;
             
  }
  let domString = cardString
  utils.printToDom("#river", domString)
  document.querySelector(".attempt").addEventListener("click", bearData.clickButtonEvent)
  document.querySelector(".success").addEventListener("click", bearData.clickButtonEvent)
  
}

const makeGrid = () => {
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
  
  rowString += `
    <tbody>
      <tr>
        <th scope="row">${logData.number}</th>
        <td>${logData.status}</td>
        <td>${logData.timeStamp}</td>
      </tr>
    </tbody>
  `;
}

  let domString = `<table class="table table-sm">` + headerString + rowString + `</table>`
 return domString

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
