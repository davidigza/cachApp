import { css, html, LitElement } from 'lit-element';

class LogoSpinner extends LitElement {
    static get properties() {
        return {
            status: {
                type: String
            },
        }
    }


    constructor() {
        super();
        this.myStatus = '';
    }


    static get styles() {
        return css `
        :host{
            --logo-height: 7.750em;
            --logo-witdh: 7.750em;
            --point-color: rgb(10,27,96);
            --primary-line-color: rgb(70,81,135);
            --secondary-line-color: rgb(159,216,233);
            --terciary-line-color: rgb(251,226,84);
            height: var(--myCustomHeight, var(--logo-height , 7.750em));
            width: var(--myCustomwidth, var(--logo-witdh , 7.750em));
        }
        .atom-spinner, .atom-spinner * {
            box-sizing: border-box;
          }
        
          .atom-spinner {
            height: var(--myCustomHeight,var(--logo-height , 7.750em));
            width: var(--myCustomwidth,var(--logo-witdh , 7.750em));
            overflow: hidden;
        
          }
        
          .atom-spinner .spinner-inner {
            position: relative;
            display: block;
            height: 100%;
            width: 100%;
          }
        
          .atom-spinner .spinner-circle {
            display: block;
            position: absolute;
            color: var(--point-color);
            font-size: var(--myCustomPoint, 1.5em);
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
          }
        
          .atom-spinner .spinner-line {
            position: absolute;
            width: 100%;
            height: 100%;
            border-radius: 50%;
            animation-duration: 1s;
            border-left-width: calc(var(--myCustomHeight,var(--logo-height , 7.750em;)) / 12);
            border-top-width: calc(var(--myCustomHeight,var(--logo-height , 7.750em;)) / 12);
            border-left-color: #000;
            border-left-style: solid;
            border-top-style: solid;
            border-top-color: transparent;
          }


        
          .atom-spinner .spinner-line:nth-child(1) {
            border-left-color: var(--primary-line-color);
            transform: rotateZ(120deg) rotateX(66deg) rotateZ(0deg);
          }
        
         .atom-spinner .spinner-line:nth-child(2) {
            border-left-color: var(--secondary-line-color);
            transform: rotateZ(240deg) rotateX(66deg) rotateZ(0deg);
          }
        
        .atom-spinner .spinner-line:nth-child(3) {
            border-left-color: var(--terciary-line-color);
            transform: rotateZ(360deg) rotateX(66deg) rotateZ(0deg);
          }
        
        
        
        
          .atom-spinner[status="active"] .spinner-line:nth-child(1) {
            animation: atom-spinner-animation-1 1s linear infinite;
            
          }
        
          .atom-spinner[status="active"] .spinner-line:nth-child(2) {
            animation: atom-spinner-animation-2 1s linear infinite;
          }
        
          .atom-spinner[status="active"] .spinner-line:nth-child(3) {
            animation: atom-spinner-animation-3 1s linear infinite;
          }
        
          @keyframes atom-spinner-animation-1 {
            100% {
              transform: rotateZ(120deg) rotateX(66deg) rotateZ(360deg);
            }
          }
        
          @keyframes atom-spinner-animation-2 {
            100% {
              transform: rotateZ(240deg) rotateX(66deg) rotateZ(360deg);
            }
          }
        
          @keyframes atom-spinner-animation-3 {
            100% {
              transform: rotateZ(360deg) rotateX(66deg) rotateZ(360deg);
            }
          }
        
        
        
        `;
    }

    render() {
        return html `
       <div class="atom-spinner" status="${this.status}">
            <div class="spinner-inner">
                <div class="spinner-line" ></div>
                <div class="spinner-line" ></div>
                <div class="spinner-line" ></div>
                <div class="spinner-circle">
                    &#9679;
                </div>
            </div>
        </div>
        `
    }
}

customElements.define('logo-spinner', LogoSpinner);