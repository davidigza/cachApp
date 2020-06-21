import {
    css,
    html,
    LitElement
} from 'lit-element';

import fontscss from '../helpers/fontsStyles.js'


export class DashboardPage extends LitElement {
    static get properties() {
        return {}
    }

    constructor() {
        super();


    }

    static get styles() {
        return [fontscss, css `
        :host {
            min-height: 100%;
            display: grid;
            grid-template-rows: auto 1fr;
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
            margin-top: 2em;
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

        .btn{
            display: inline-block;
            padding: 6px 12px 0 0;
            margin-bottom: 0;
            font-size: 14px;
            font-weight: 400;
            line-height: 1.42857143;
            text-align: center;
            white-space: nowrap;
            vertical-align: middle;
            -ms-touch-action: manipulation;
            touch-action: manipulation;
            cursor: pointer;
            user-select: none;
            background-image: none;
            border: 1px solid transparent;
            border-radius: 4px;
            text-align: center;
            align-content: center;
            height: 3em;
            line-height: 38px;
        }

        .btn-label {
            position: relative;
            float:left;
            display: inline-block;
            background: rgba(0,0,0,0.15);
            border-radius: 3px 0 0 3px;
            line-height: 38px;
            height: 100%;
            width: 2.5em;
        }

        .btn-labeled {color: #fff;
           
            padding-top: 0;
            padding-bottom: 0;}

        .btn-dieta{
            background-color: #5cb85c;
            border-color: #4cae4c;
        }

        .btn-tabla{
            background-color: #337ab7;
            border-color: #2e6da4;
        }

        .btn-obj{
            background-color: #f0ad4e;
            border-color: #eea236;
        }

        .btn-test{
            background-color: #5bc0de;
            border-color: #46b8da;
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
            <button type="button" class="btn btn-labeled btn-dieta">
            <span class="btn-label icon-spoon-knife"></span>Alimentación</button>
            <button type="button" class="btn btn-labeled btn-tabla"><span class="btn-label icon-calendar"></span>Tabla</button>
            <button type="button" class="btn btn-labeled btn-obj"><span class="btn-label icon-rocket"></span>Objetivos</button>
            <button type="button" class="btn btn-labeled btn-test"><span class="btn-label icon-clipboard"></span>Tests</button>
        </main>
        
        `
    }


}