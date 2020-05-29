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
        <div class="card-body">
          <h5 class="card-title">${bear.name}</h5>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
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
