import View from "./View";

class DetailPage extends View {
  render(model, route) {
    const { parent } = this;

    this.clearPage();
    this.changePageTitle("Home Page");

    const view = parent.appendChild(document.createElement("div"));

    const titleEl = document.createElement("h1");
    titleEl.innerText = model.title;

    const contentEl = document.createElement("p");
    contentEl.innerText = model.content;

    const buttonEl = document.createElement("button");
    buttonEl.innerText = "페이지 수정하러 가기";
    buttonEl.onclick = () => route("article:edit");

    const button2El = document.createElement("button");
    button2El.innerText = "리스트 화면으로 이동하기";
    button2El.onclick = () => route("article:list");

    view.appendChild(titleEl);
    view.appendChild(contentEl);
    view.appendChild(buttonEl);
    view.appendChild(button2El);
  }
}

export default DetailPage;
