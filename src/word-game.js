/**
 * @license
 * Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */

// Import statements in Polymer 3.0 can now use package names.
// polymer-element.js now exports PolymerElement instead of Element,
// so no need to change the symbol. 
import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import '@polymer/iron-input/iron-input.js';


class WordGame extends PolymerElement {
  static get properties () {
    return {
      message: {
        type: String,
        value: '',
        notify: true
      },
      words: {
        type: Array,
        value: []
      },
      entry: {
       type: String,
        value: ''
      }
    };
  }

  constructor() {
   super();
  }

  addWord(){
    this.entry = this.entry.toLowerCase();
    if(this.words.indexOf(this.entry)>-1){
      this.message = 'You thought of the word already.';
    }else if(!(/^[a-zA-Z]+$/.test(this.entry))){
      this.message = 'The word should only contain alphabets.';  
    }else{
       this.push('words',this.entry);
       this.message = ""
    }
    this.entry = "";
  }

  static get template () {
    // Template getter must return an instance of HTMLTemplateElement.
    // The html helper function makes this easy.
    return html`
      <style>
        .row{
          width: 100%;
          padding: 4px;
        }
        .col-3{
          border: 2px;
          border-color: #ccc;
          padding: 2px;
          color: green;
          text-transform: capitalize;
        }
      </style>

      <div class="container-fluid">
      <div class="row">
      <h1>All the words that I know</h1>
      </div>

      <div class="row">
      <b> Total Counts: {{words.length}}</b>
      </div>
      <div class="row">
        <template is="dom-repeat" items="{{words}}">
            <span class="col-3">{{item}}, </span>
         </template>
      </div>
      <div class="row">
      <p>Enter the word below.{{message}} </p>
      <div>
        The current word is {{entry}}
      </div>
      </div>
      <div class="row">
      <iron-input bind-value="{{entry}}">
      <input is="iron-input" placeholder="Your word here..." on-change="addWord">
      </iron-input>
      <br>
      <button on-click="addWord">Add word.</button>
      </div>
      </div>
    `;
  }
}

// Register the element with the browser.
customElements.define('word-game', WordGame);
