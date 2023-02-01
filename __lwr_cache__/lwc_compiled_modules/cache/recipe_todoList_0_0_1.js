import { registerDecorators as _registerDecorators, registerComponent as _registerComponent, LightningElement } from "lwc";
import _tmpl from "./todoList.html";
class TodoList extends LightningElement {
  constructor(...args) {
    super(...args);
    this.filteredTodos = [];
    this._todos = [];
    this.priorityFilter = false;
  }
  get todos() {
    return this._todos;
  }
  set todos(value) {
    this._todos = value;
    this.filterTodos();
  }
  filterTodos() {
    if (this.priorityFilter) {
      this.filteredTodos = this._todos.filter(todo => todo.priority === true);
    } else {
      this.filteredTodos = this._todos;
    }
  }
  handleCheckboxChange(event) {
    this.priorityFilter = event.target.checked;
    this.filterTodos();
  }
  /*LWC compiler v2.17.0*/
}
_registerDecorators(TodoList, {
  publicProps: {
    todos: {
      config: 3
    }
  },
  fields: ["filteredTodos", "_todos", "priorityFilter"]
});
export default _registerComponent(TodoList, {
  tmpl: _tmpl
});