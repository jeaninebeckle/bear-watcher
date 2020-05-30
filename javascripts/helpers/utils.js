const printToDom = (selector, text) => {
  document.querySelector(selector).innerHTML = text;
}

const getDate = () => {
  return moment().format('MMMM Do YYYY, h:mm:ss a');
}

export default { printToDom, getDate };
