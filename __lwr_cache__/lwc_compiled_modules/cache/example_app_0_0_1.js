import { registerDecorators as _registerDecorators, registerComponent as _registerComponent, LightningElement } from "lwc";
import _tmpl from "./app.html";
class HelloWorldApp extends LightningElement {
  constructor(...args) {
    super(...args);
    this.keyIndex = 0;
    this.itemList = [{
      id: 0
    }];
  }
  addRow() {
    ++this.keyIndex;
    var newItem = [{
      id: this.keyIndex
    }];
    this.itemList = this.itemList.concat(newItem);
  }
  removeRow(event) {
    if (this.itemList.length >= 2) {
      this.itemList = this.itemList.filter(function (element) {
        return parseInt(element.id) !== parseInt(event.target.accessKey);
      });
    }
  }
  handleSubmit(event) {
    var isVal = true;
    this.template.querySelectorAll('lightning-input-field').forEach(element => {
      isVal = isVal && element.reportValidity();
    });
    if (isVal) {
      this.template.querySelectorAll('lightning-record-edit-form').forEach(form => {
        form.submit();
      });
      // this.dispatchEvent(
      //     new ShowToastEvent({
      //         title: 'Success',
      //         message: 'Contacts successfully created',
      //         variant: 'success',
      //     }),
      // );
      alert('Success: Contacts successfully created!');
      // Navigate to the Account home page
      // this[NavigationMixin.Navigate]({
      //     type: 'standard__objectPage',
      //     attributes: {
      //         objectApiName: 'Contact',
      //         actionName: 'home',
      //     },
      // });
    } else {
      // this.dispatchEvent(
      //     new ShowToastEvent({
      //         title: 'Error creating record',
      //         message: 'Please enter all the required fields',
      //         variant: 'error',
      //     }),
      // );
      alert('Error: Please enter all the required fields!');
    }
  }
  /*LWC compiler v2.17.0*/
}
_registerDecorators(HelloWorldApp, {
  track: {
    itemList: 1
  },
  fields: ["keyIndex"]
});
export default _registerComponent(HelloWorldApp, {
  tmpl: _tmpl
});