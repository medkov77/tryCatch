const input = document.querySelector("#valid-input");
const errors = document.querySelector(".errors");

function validete(value) {
  try {
    if (!value.trim()) {
      throw new Error("Поле ввода не должно быть пустым");
    } else if (!Number(value.trim())) {
      throw new Error("Содержимое не является числом");
    } else if (Number(value.trim() < 5)) {
      throw new Error("число меньше чем 5");
    } else if (Number(value.trim() > 10)) {
      throw new Error("число больше чем 10");
    }
    errors.classList.remove("err");
    return "Корректный ввод";
  } catch (e) {
    errors.classList.add("err");
    return e.message;
  }
}

input.oninput = (event) => {
  errors.textContent = validete(event.target.value);
};

async function lottery() {
  console.log("Вы начали игру");
  let promise = new Promise(function (resolve, reject) {
    setTimeout(function () {
      Math.random(0) > 0.5 ? resolve() : reject("Вы промахнулись");
    }, 1000);
  });
  try {
    let result = await promise;
    console.log("Вы выиграли");
    await result;
    console.log("Вам заплатили");
  } catch {
    console.log("Вы проиграли");
  } finally {
    console.log("Игра закончена");
  }
}

lottery();
