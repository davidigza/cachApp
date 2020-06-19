import { css, html, LitElement } from 'lit-element';

export class HomePage extends LitElement {
    static get properties() {
        return {
            title: { type: String }
        }
    }


    static get styles() {
        return css ``;
    }

    render() {
        return html `
        <main>
            <h1>Working</h1>
        </main>`
    }
}