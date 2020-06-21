import {
    css,
} from 'lit-element';

const fontscss = css `

[class^="icon-"], [class*=" icon-"] {
    /* use !important to prevent issues with browser extensions that change fonts */
    font-family: 'icomoon' !important;
    speak: never;
    font-style: normal;
    font-weight: normal;
    font-variant: normal;
    text-transform: none;
    line-height: 1;
  
    /* Better Font Rendering =========== */
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

.icon-facebook .path1:before {
    content: "\\e900";
    color: rgb(59, 89, 152);
  }
  .icon-facebook .path2:before {
    content: "\\e901";
    margin-left: -1em;
    color: rgb(255, 255, 255);
  }
  .icon-google-mas .path1:before {
    content: "\\e902";
    color: rgb(220, 78, 65);
  }
  .icon-google-mas .path2:before {
    content: "\\e903";
    margin-left: -1em;
    color: rgb(220, 78, 65);
  }
  .icon-google-mas .path3:before {
    content: "\\e904";
    margin-left: -1em;
    color: rgb(220, 78, 65);
  }
  .icon-google-mas .path4:before {
    content: "\\e905";
    margin-left: -1em;
    color: rgb(255, 255, 255);
  }
  .icon-google-mas .path5:before {
    content: "\\e906";
    margin-left: -1em;
    color: rgb(255, 255, 255);
  }
  .icon-twitter .path1:before {
    content: "\\e907";
    color: rgb(85, 172, 238);
  }
  .icon-twitter .path2:before {
    content: "\\e908";
    margin-left: -1em;
    color: rgb(241, 242, 242);
  }
  .icon-linkedin .path1:before {
    content: "\\e909";
    color: rgb(0, 122, 185);
  }
  .icon-linkedin .path2:before {
    content: "\\e90a";
    margin-left: -1em;
    color: rgb(241, 242, 242);
  }
  .icon-calendar:before {
    content: "\\e953";
  }
  .icon-spoon-knife:before {
    content: "\\e9a3";
  }
  .icon-rocket:before {
    content: "\\e9a5";
  }
  .icon-clipboard:before {
    content: "\\e9b8";
  }
  
  `;

export default fontscss;