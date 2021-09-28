"use strict";

import Counter from './counter.js';

const $ = (selector) => document.querySelector(selector);

const plusBtn = $('#plus');
const minusBtn = $('#minus');
const resetBtn = $('#reset');
const number = $('span');

const store = {
    setLocalStorage(total) {
        localStorage.setItem("total", String(total));
    },
    getLocalStorage() {
        return localStorage.getItem("total");
    }
}

function App() {
    this.initValue = 0;
    this.init = () => {
        if (store.getLocalStorage()) {
            this.initValue = Number(store.getLocalStorage());
        }
        number.textContent = this.initValue;
    };

    const counter = new Counter(this.initValue);

    plusBtn.addEventListener('click', function(){
        number.textContent = counter.increase();
        store.setLocalStorage(counter._count);
    });
    
    minusBtn.addEventListener('click', function(){
        number.textContent = counter.decrease();;
        store.setLocalStorage(counter._count);
    });
    
    resetBtn.addEventListener('click', function(){
        number.textContent = counter.reset();;
        store.setLocalStorage(counter._count);
    });
}

const app = new App();
app.init();