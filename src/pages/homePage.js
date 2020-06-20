import {
    css,
    html,
    LitElement
} from 'lit-element';
import '../elements/logoSpinner.js';

export class HomePage extends LitElement {
    static get properties() {
        return {
            status: {
                type: String
            }
        }
    }

    constructor() {
        super();
        this.status = 'inactive';
    }

    static get styles() {
        return css `
        :host{
            min-height: 100%;
            display: grid;
            grid-template-rows: 1fr auto;
            grid-template-columns: 100%;
            position: relative;
        }
        main{
            display:flex;
            align-items: center;
            justify-content: center;
        }

        footer {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 6em;
        }
        
        .content{
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            text-align: center;
            letter-spacing: 2px;
        }

        .content h1{
            font-family: 'Ultra', serif;
            text-transform: uppercase;
            color: rgb(10,27,96);
            font-size: 3em;
        }

        .content span{
            font-family: 'Shadows Into Light', cursive;
            font-size: 2em;
            color: rgb(10,27,96);
        }

        .btn{
            text-decoration:none;
            font-weight: 600;
            font-size: 20px;
            color:#333333;
            padding-top:15px;
            padding-bottom:15px;
            padding-left:40px;
            padding-right:40px;
            background-color:blue;
            border-radius:35px;
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
        button.learn-more {
            width: 12rem;
            height: auto;
        }
        button.learn-more .circle {
            -webkit-transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
            transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
            position: relative;
            display: block;
            margin: 0;
            width: 3rem;
            height: 3rem;
            background: rgb(10, 27, 96);
            border-radius: 1.625rem;
        }
        button.learn-more .circle .icon {
            -webkit-transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
            transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
            position: absolute;
            top: 0;
            bottom: 0;
            margin: auto;
            background: #fff;
        }
        button.learn-more .circle .icon.arrow {
            -webkit-transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
            transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
            left: 0.625rem;
            width: 1.125rem;
            height: 0.125rem;
            background: none;
        }
        button.learn-more .circle .icon.arrow::before {
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
        button.learn-more .button-text {
            -webkit-transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
            transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            padding: 0.75rem 0;
            margin: 0 0 0 1.85rem;
            color: rgb(10, 27, 96);
            font-weight: 700;
            line-height: 1.6;
            text-align: center;
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
        .modal{
            position:absolute;
            top:0;
            bottom:0;
            left:0;
            right:0;
            padding: 2em;
            background: #fff;
            transform: translateY(100%);
            transition: transform 1s;
            z-index: 1;
            min-height: 100%;
            display: grid;
            grid-template-rows: 1fr auto;
            grid-template-columns: 100%;
        }

        .modal form {
            display: flex;
            flex-direction: column; 
        }

        .modal .login-input {
            border: 1px solid #000;
            border-radius: 24px;
            padding: 1em;
            margin-bottom: 2em;
        }

        .modal .other-logins{
            height: 8em;
        }

        .modal.show {
            transform: translateY(0);
        }


        
        `;
    }

    render() {
        return html `
        <main>
            <div class="content">
                <logo-spinner status="${this.status}"></logo-spinner>
                <div>
                    <h1>actíva T</h1>
                    <span>libera tu energia</span>
                </div>
            </div> 
        </main>
         <footer>
         <button class="learn-more" @click="${this.handleClick}">
            <span class="circle" aria-hidden="true">
            <span class="icon arrow"></span>
            </span>
            <span class="button-text">Entra</span>
        </button>
         </footer>
         <div class="modal">
         <form action="">
            <input name="username" id="login-username" class="login-input" type="text" maxlength="96" tabindex="1" aria-required="true"
            value="" placeholder="e-mail" title="e-mail" autocorrect="off" spellcheck="false"  required>

            <input name="password" id="login-password" class="login-input " type="password" maxlength="8" tabindex="1" aria-required="true"
            value="" placeholder="password" title="password" autocorrect="off" spellcheck="false" required>

            <button id="login-signing" class="pure-u-1 pure-button mbr-button-primary" type="submit" value="Submit" tabindex="1">Login</button>
         </form>

         <div class="other-logins">

         </div>
         </div>  
        `
    }

    handleClick() {
        this.status = 'active';
        const node = this.shadowRoot.querySelector('.modal');
        node.classList.toggle('show');
    }


}