import {
    css,
    html,
    LitElement
} from 'lit-element';
import '../elements/logoSpinner.js';

import fontscss from '../helpers/fontsStyles.js'


export class HomePage extends LitElement {
    static get properties() {
        return {
            status: {
                type: String
            },
            user: {
                type: String
            },
            password: {
                type: String
            }
        }
    }

    constructor() {
        super();
        this.status = 'inactive';
        this.user = '';
        this.password = '';

    }

    static get styles() {
        return [fontscss, css `
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
            transition: transform 0.7s;
            z-index: 1;
            min-height: 100%;
            display: grid;
            grid-template-rows: 1fr auto;
            grid-template-columns: 100%;
            box-sizing: border-box;
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

        .modal form .password-field{
            float: right;
            margin-left: -80px;
            margin-top: -25px;
            position: relative;
            z-index: 2;
        }

        .modal form .buttons{
            display: flex;
            justify-content: space-around;
            margin-top: 2em;
        }

        .modal form .button {
            height: 48px;
            opacity: 0.95;
            background: rgb(10, 27, 96);
            box-shadow: rgba(0, 0, 0, 0.5) 0px 2px 4px 0px, rgba(0, 0, 0, 0.72) 4px 4px 8px 0px;
            border-radius: 100px;
            font-family: VarelaRound-Regular;
            font-size: 16px;
            color: #fff;
            letter-spacing: 1px;
            text-transform: capitalize;
            width: 8em;
        }

        .modal .other-logins{
            height: 8em;
        }

        .modal.show {
            transform: translateY(0);
        }


        #share {
            width: 100%;
            text-align: center;
        }


        #share .socialbtn{
            width: 50px;
            height: 50px;
            display: inline-block;
            margin: 8px;
            border-radius: 50%;
            font-size: 24px;
            color: #fff;
            opacity: 0.75;
            transition: opacity 0.15s linear;
        }

        #share .socialbtn:hover {
            opacity: 1;
        }


        #share i {
            position: relative;
            top: 50%;
            transform: translateY(-50%);
        }


        .facebook {
            background: #3b5998;
        }

        .twitter {
            background: #55acee;
        }

        .googleplus {
            background: #dd4b39;
        }

        .linkedin {
            background: #0077b5;
        }

        .pinterest {
            background: #cb2027;
        }
        `];
    }

    render() {
        return html `
        <main>
            <div class="content">
                <logo-spinner status="${this.status}"></logo-spinner>
                <div>
                    <h1>actíva-T</h1>
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
         <form @submit="${this.doLogin}">
            <input name="username" id="login-username" class="login-input" type="text" maxlength="96" tabindex="1" aria-required="true"
            .value="${this.user}" placeholder="e-mail" title="e-mail" @input="${this.setValue}" autocorrect="off" spellcheck="false"  required >
            <input name="password" id="login-password" class="login-input " type="password" maxlength="8" tabindex="1" aria-required="true"
            .value="${this.password}" placeholder="password" @input="${this.setValue}" autocorrect="off" spellcheck="false"  required >

            <p id="last_line">
            <label for="show_password">
                <input type="checkbox" name="show_password" id="show_password" @click="${this.clickShow}">
                Show Password
            </label>
            </p>
            <div class="buttons">
                <button id="login-signing" class="button " type="submit" value="Submit" tabindex="1">Login</button>
                <button id="login-signing" class="button " tabindex="1" @click="${this.close}">close</button>
            </div>
            <a href="/dashboard"></a>
         </form>



         <div class="other-logins">
         <div id="share">
            <!-- facebook -->
            <button  class="socialbtn facebook" ><span class="icon-facebook"><span class="path1"></span><span class="path2"></span></span></a>

            <!-- twitter -->
            <button class="socialbtn twitter"><span class="icon-twitter"><span class="path1"></span><span class="path2"></span></span></a>

            <!-- google plus -->
            <button class="socialbtn googleplus"><span class="icon-google-mas"><span class="path1"></span><span class="path2"></span><span class="path3"></span><span class="path4"></span><span class="path5"></span></span></a>

            <!-- linkedin -->
            <button class="socialbtn linkedin" ><span class="icon-linkedin"><span class="path1"></span><span class="path2"></span></span></a>

            </div>
         </div>
         </div>  
        `
    }

    handleClick() {
        this.status = 'active';
        const node = this.shadowRoot.querySelector('.modal');
        node.classList.toggle('show');
    }

    clickShow(e) {
        const node = this.shadowRoot.querySelector('#login-password');
        e.target.checked ? node.type = 'text' : node.type = 'password';
    }

    closeModal() {
        const node = this.shadowRoot.querySelector('.modal');
        node.classList.toggle('show');
    }

    close(e) {
        const node = this.shadowRoot.querySelector('.modal');
        this.resetLogo();
        this.closeModal();
        node.addEventListener('animationend', () => {
            this.resetForm();
        });
    }

    resetForm() {
        this.user = '';
        this.password = '';
    }

    resetLogo() {
        this.status = 'inactive';
    }


    setValue(e) {
        e.target.name === 'password' ? this.password = e.target.value : this.user = e.target.value;
    }

    doLogin(event) {
        if (event) { event.preventDefault(); }
        this.closeModal();
        const custom = new CustomEvent('navigation-to', { 'detail': 'dashboard', composed: true, bubbles: true });
        this.dispatchEvent(custom);
    }


}