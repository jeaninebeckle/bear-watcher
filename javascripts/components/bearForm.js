import utils from "../helpers/utils.js"
import bearData from "../helpers/data/bearData.js"
import showBear from "./river.js";

const clickSubmitEvent = (e) => {
  e.preventDefault();
  bearData.addBearToArray();
  document.getElementById("inputName").value = null;
  document.getElementById("inputName").value = null;
  showBear.makeCard();
}

const makeForm = () => {
  const domString = `


<form>
  <div class="bear">
    <h5>Do you have a furry friend that you want to keep an eye on? We just need a few key pieces of information. This will bearly take any time at all.</h5>
    <div class="form-group">
      <label for="inputName"></label>
      <input type="text" class="form-control" id="inputName" aria-describedby="emailHelp" placeholder="What's your bear's name?" required>
    </div>
    <div class="form-group">
      <label for="addImage"></label>
      <input type="text" class="form-control" id="addImage" placeholder="Insert an image link of the bear here!" required>
    </div>
    <button id="make-bear" type="button" class="btn btn-outline-secondary">Submit</button>
  </div>
</form>
    `;

utils.printToDom("#bearForm", domString);

document.querySelector("#make-bear").addEventListener("click", clickSubmitEvent)
}

export default { makeForm }
