import { registerDecorators as _registerDecorators, registerComponent as _registerComponent, LightningElement } from "lwc";
import _tmpl from "./apiSetterGetter.html";
class ApiSetterGetter extends LightningElement {
  constructor(...args) {
    super(...args);
    this.lastTodoId = 2;
    this.todos = [{
      id: 1,
      description: 'Explore recipes',
      priority: true
    }, {
      id: 2,
      description: 'Install Ebikes sample app',
      priority: false
    }];
    this.description = void 0;
    this.priority = false;
  }
  handleDescriptionChange(event) {
    this.description = event.target.value;
  }
  handlePriorityChange(event) {
    this.priority = event.target.checked;
  }
  handleSave() {
    this.lastTodoId = this.lastTodoId + 1;
    // Using immutable data structures. Creating a new array with old and new items instead of mutating the existing array with push()
    this.todos = [...this.todos, {
      id: this.lastTodoId,
      description: this.description,
      priority: this.priority
    }];
  }
  /*LWC compiler v2.17.0*/
}
_registerDecorators(ApiSetterGetter, {
  fields: ["lastTodoId", "todos", "description", "priority"]
});
export default _registerComponent(ApiSetterGetter, {
  tmpl: _tmpl
});