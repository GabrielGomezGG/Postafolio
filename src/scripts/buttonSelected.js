function onClickButton(className, value){
  const button = document.getElementById(className);

  button.addEventListener('click', () => {
    return value;
  });
}