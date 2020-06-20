import {
    css,
    html,
    LitElement
} from 'lit-element';


export class DashboardPage extends LitElement {
    static get properties() {
        return {}
    }

    constructor() {
        super();


    }

    static get styles() {
        return [css `
        :host {
            height: 100%;
            width: 100%;
            display: block;
            background: red;
            }
        `];
    }

    render() {
        return html `
        <main>
        </main>
        <footer></footer>
        `
    }


}