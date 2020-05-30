import utils from "../helpers/utils.js"
import bearData from "../helpers/data/bearData.js"

const makeCard = () => {
  const myBear = bearData.getBear()
  let domString = '';

  for (let i = 0; i < myBear.length; i++) {
    const bear = myBear[i];
    domString += `
    <div class="container">
    <div class="row">
    <div class="col-sm">
    <div class="card" style="width: 18rem;">
      <img class="card-img-top" src="${bear.imgUrl}" alt="Bear image">
        <class="card-body">
          <h3 class="card-title">${bear.name}</h3>
          <button type="button" class="btn btn-outline-warning">Fishing Attempt</button><p>Latest attempt:<br> 01/01/2020 00:00</p><br>
          <button type="button" class="btn btn-outline-success">Fishing Success</button><p>Latest success:<br> 01/01/2020 00:00</p>
          <h6>Total number of fish caught: </h6>
          </div>
          </div>
        </div>
    </div>
    </div>
    `;
  }

  utils.printToDom("#river", domString)
}

export default { makeCard }
