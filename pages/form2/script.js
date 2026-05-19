const data = await fetch("./data.json").then((res) => res.json());

const form = document.querySelector("#form");

data.forEach((item) => {
  const divEl = document.createElement("div");
  const labelEl = document.createElement("label");
  labelEl.htmlFor = item.id;
  labelEl.innerText = item.label;
  divEl.append(labelEl);

  const inputEl = document.createElement("input");
  inputEl.type = item.type;
  inputEl.id = item.id;
  inputEl.name = item.name;
  inputEl.placeholder = item.placeholder;
  divEl.append(inputEl);

  form.append(divEl);
});

async function handleClick() {
  try {
    const payload = {};
    const inputs = document.querySelectorAll("input");
    Array.from(inputs).forEach((item) => {
      payload[item.id] = item.value;
    });
    const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });
    const data = await res.json();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

document.getElementById("submit-btn").addEventListener("click", handleClick);
