import Observer from "../common/Observer";

function isDomNode(element) {
  return element instanceof Element || element instanceof HTMLDocument;
}

class Controller extends Observer {
  constructor(parent) {
    super();
    if (!isDomNode(parent)) throw Error("parent가 DomNode가 아닙니다.");
    this.parent = parent;
  }

  notify() {
    this.render();
  }
}

export default Controller;
