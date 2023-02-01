import { LightningElement, track } from 'lwc';

export default class HelloWorldApp extends LightningElement {
    greeting = 'World';

    handleChange(event) {
        this.greeting = event.target.value;
    }
}
