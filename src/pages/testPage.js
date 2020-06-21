import {
    css,
    html,
    LitElement
} from 'lit-element';
import '../elements/logoSpinner.js';

import fontscss from '../helpers/fontsStyles.js';


export class TestPage extends LitElement {
    static get properties() {
        return {
            items: {
                type: Array
            }
        }
    }

    constructor() {
        super();
        this.items = [
            { title: "Sentadillas 1'", resAnterior: 30, resActual: 41 },
            { title: "Pasos de Oso 1'", resAnterior: 0, resActual: 41 },
            { title: "Tablon ISO", resAnterior: '40', resActual: "2'20" },
            { title: "Jumping jack 1", resAnterior: 0, resActual: 87 },
            { title: "Flexiones 1'", resAnterior: 30, resActual: 37 },
            { title: "Sentadilla ISO'", resAnterior: 30, resActual: '43' },
            { title: "Abd Rombo 1'", resAnterior: 30, resActual: 30 },
            { title: "Burpees 1'", resAnterior: 30, resActual: 24 },
            { title: "Dominadas 1'", resAnterior: 0, resActual: 8 },
            { title: "Carrera 1'", resAnterior: "6'00", resActual: "5'11" },
            { title: "Carrera 3'", resAnterior: 0, resActual: 0 },
            { title: "Carrera 5'", resAnterior: 0, resActual: 0 },
            { title: "Dominada ISO'", resAnterior: 0, resActual: 0 },
            { title: "Super Test'", resAnterior: 0, resActual: "11'44" },

        ]
    }

    static get styles() {
        return [fontscss, css `
        :host {
            min-height: 100%;
            display: grid;
            grid-template-rows: auto 1fr auto;
            grid-template-columns: 100%;
            position: relative;
            background: #fff;
            padding: 2em;
            box-sizing: border-box;
            --myCustomHeight: 3em;
            --myCustomwidth: 3em;
            --myCustomPoint: 1em;
        }

        header{
            display: flex;
            align-items: center;
            justify-content: space-between;
        }

        header span {
            font-family: Ultra, serif;
            text-transform: uppercase;
            color: rgb(10, 27, 96);
            font-size: 2.2em;
        }

        main {
            display: flex;
            flex-direction: column;
            justify-content: space-evenly;
            padding: 0 1em 1em;
        }

        .table{
            display: flex;
            justify-content: space-between;
        }

        .table span {
            width: 2em;
            font-family:'Raleway';
            font-size: 1em;
            text-align: right;
        }

        .table span.title {
            width: 7.75em;
            text-transform: uppercase;
            text-align: left;
        }

        .header{
            color:rgb(159 216 233)
        }

        button {
            position: relative;
            display: inline-block;
            cursor: pointer;
            outline: none;
            border: 0;
            vertical-align: middle;
            text-decoration: none;
            background: transparent;
            padding: 0;
            font-size: inherit;
            font-family: inherit;
        }
        button.singIn {
            width: 12rem;
            height: auto;
        }
        button.singIn .circle {
            -webkit-transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
            transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
            position: relative;
            display: block;
            margin: 0;
            width: 3rem;
            height: 3rem;
            background: rgb(10, 27, 96);
            border-radius: 1.625rem;
            transform: rotate(180deg);
        }
        button.singIn .circle .icon {
            -webkit-transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
            transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
            position: absolute;
            top: 0;
            bottom: 0;
            margin: auto;
            background: #fff;
        }
        button.singIn .circle .icon.arrow {
            -webkit-transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
            transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
            left: 0.625rem;
            width: 1.125rem;
            height: 0.125rem;
            background: none;
        }
        button.singIn .circle .icon.arrow::before {
            position: absolute;
            content: '';
            top: -0.25rem;
            right: 0.0625rem;
            width: 0.625rem;
            height: 0.625rem;
            border-top: 0.125rem solid #fff;
            border-right: 0.125rem solid #fff;
            -webkit-transform: rotate(45deg);
                    transform: rotate(45deg);
        }
        button.singIn .button-text {
            -webkit-transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
            transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            padding: 0.75rem 0;
            margin: 0 0 0 3.5rem;
            color: rgb(10, 27, 96);
            font-weight: 700;
            line-height: 1.6;
            text-align: left;
            text-transform: uppercase;
        }
        button:hover .circle {
            width: 100%;
        }
        button:hover .circle .icon.arrow {
            background: #fff;
            -webkit-transform: translate(1rem, 0);
                    transform: translate(1rem, 0);
        }
        button:hover .button-text {
            color: #fff;
        }
        `];
    }

    render() {
            return html `
        <header>
            <logo-spinner></logo-spinner>
            <span> actíva-t </span>  
        </header>
        <main>
        <div class="table">
            <span class="header title">Ejercicio</span>
            <span class="header">Anterior</span>
            <span class="header">Actual</span>
        </div>
        ${this.items.map((i) => html`<div class="table">
            <span class="title">${i.title}</span>
            <span>${i.resAnterior}</span>
            <span>${i.resActual}</span>
        </div>`)}
        </main>

        <footer>
        <button class="singIn" @click="${this.handleClick}">
            <span class="circle" aria-hidden="true">
            <span class="icon arrow"></span>
            </span>
            <span class="button-text">volver</span>
        </button>
        </footer>
    
        `
    }

    handleClick(){
        const custom = new CustomEvent('navigation-to', { 'detail': 'dashboard', composed: true, bubbles: true });
         this.dispatchEvent(custom);
    }

}