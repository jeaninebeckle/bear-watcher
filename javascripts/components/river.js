import utils from "../helpers/utils.js"
import bearData from "../helpers/data/bearData.js"


const makeCard = () => {
  const myBear = bearData.getBear()
  let domString = '';

  for (let i = 0; i < myBear.length; i++) {
    const bear = myBear[i];
    domString += `
    <div id="${bear.uniqueId}" class="card bear-card col-sm-6">
      <img class="card-img-top" src="${bear.imgUrl}" alt="Bear image">
        <class="card-body">
          <h3 class="card-title">${bear.name}</h3>
          <button value="Attempt" type="button" class="attempt btn btn-outline-warning">Fishing Attempt</button><p>Latest attempt:<br> 01/01/2020 00:00</p><br>
          <button value="Success" type="button" class="success btn btn-outline-success">Fishing Success</button><p>Latest success:<br> 01/01/2020 00:00</p>
          <h6>Total number of fish caught: </h6>
    </div>
    `;
  }

  utils.printToDom("#river", domString)
  document.querySelector(".attempt").addEventListener("click", bearData.clickButtonEvent)
  document.querySelector(".success").addEventListener("click", bearData.clickButtonEvent)
}

// const clickAttemptEvent = (e) => {
//   e.preventDefault();
//   console.log(utils.getDate())
// }

// const clickSuccessEvent = (e) => {
//   e.preventDefault();
//   console.log(utils.getDate())
// }

// const buildFishingTable = {

// return 
// <table class="table table-sm">
//   <thead>
//     <tr>
//       <th scope="col">#</th>
//       <th scope="col">First</th>
//       <th scope="col">Last</th>
//       <th scope="col">Handle</th>
//     </tr>
//   </thead>
//   <tbody>
//     <tr>
//       <th scope="row">1</th>
//       <td>Mark</td>
//       <td>Otto</td>
//       <td>@mdo</td>
//     </tr>
//   </tbody>
// </table>

// }

export default { makeCard }
