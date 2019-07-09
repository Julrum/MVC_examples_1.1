import Controller from "./Controller";
import Articles from "../models/Articles";
import DetailPage from "../views/DetailPage";
import EditPage from "../views/EditPage";
import ListPage from "../views/ListPage";

class ArticleController extends Controller {
  constructor(parent, route) {
    super(parent);
    this.route = route;
    this.views = {
      detail: new DetailPage(this.parent),
      edit: new EditPage(this.parent),
      list: new ListPage(this.parent)
    };
    this.model = Articles;
    this.model.list.forEach(article => article.addObserver(this));
  }

  list() {
    const { list } = this.views;
    this.view = list;
    this.model = Articles;
    this.render();
  }

  detail() {
    const { detail } = this.views;
    this.view = detail;
    this.model = Articles.now;
    this.render();
  }

  edit() {
    const { edit } = this.views;
    this.view = edit;
    this.model = Articles.now;
    this.render();
  }

  render() {
    const { view, model, route } = this;
    view.render(model, route);
  }
}

// Singleton
export default ArticleController;
