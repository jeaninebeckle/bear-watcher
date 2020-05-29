import utils from "../helpers/utils.js"

const makeForm = () => {
  const domString = `


<form>
  <div class="bear">
    <p>Do you have a furry friend that you want to keep an eye on? We just need a few key pieces of information. This will bearly take any time at all.</p>
    <div class="form-group">
      <label for="inputName"></label>
      <input type="text" class="form-control" id="inputName" aria-describedby="emailHelp" placeholder="What's your bear's name?" required>
    </div>
    <div class="form-group">
      <label for="addImage"></label>
      <input type="url" class="form-control" id="addImage" placeholder="Insert an image link of the bear here!" required>
    </div>
    <button type="button" class="btn btn-outline-secondary">Submit</button>
  </div>
</form>
    `;

utils.printToDom("#bearForm", domString);
}

export default { makeForm }
