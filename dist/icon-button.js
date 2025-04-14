import { useElement } from "./core/element";
const name = 'm-icon-button';
const template = `<slot>icon</slot>`;
const style = `:host {
    padding: 8px;
    box-sizing: border-box;
    border-radius: 50%;
    background-color: var(--m-icon-button-default-backgroundColor,${"white"});
    display: inline-flex;
    align-items: center;
    justify-content:space-between;
    transition: transform 0.2s, box-shadow 0.4s, background-color 0.3s, color 0.3s;
}
:host(:not([disabled=true]):hover) {
    transform: translateY(-2px);
    cursor: pointer;
    box-shadow: 0px 4px 30px var(--m-icon-button-default-hover-boxShadowColor,${"rgba(70,70,70,0.237)"});
}
:host(:not([disabled=true]):active) {
    transform: scale(0.95);
    cursor: pointer;
    box-shadow: 0px 4px 30px var(--m-icon-button-default-active-boxShadowColor,${"#2ea1f9d6"});
    background-color: var(--m-icon-button-default-active-backgroundColor,${"#2EA2F9"});
    color: var(--m-icon-button-default-active-textColor,${"white"});
}
:host([disabled=true]) {
    background-color: var(--m-icon-button-default-disabled-backgroundColor,${"#EFEFEF"});
    color: var(--m-icon-button-default-disabled-textColor,${"#BABABA"});
}
:host([type=outlined]) {
    background-color: transparent;
    border: 1.5px solid var(--m-icon-button-outlined-borderColor,${"black"});
    transition: border 0.2s, background-color 0.2s;
}
:host([type=outlined]:not([disabled=true]):hover) {
    box-shadow: none;
    background-color: var(--m-icon-button-outlined-hover-backgroundColor,${"black"});
    color: var(--m-icon-button-outlined-hover-textColor,${"white"});
    transform: none;
}
:host([type=outlined]:not([disabled=true]):active) {
    background-color: var(--m-icon-button-outlined-active-backgroundColor,${"#555555"});
    border: 1.5px solid var(--m-icon-button-outlined-active-borderColor,${"#555555"});
}
:host([type=outlined][disabled=true]) {
    border: 1.5px solid var(--m-icon-button-outlined-disabled-borderColor,${"#EFEFEF"});
    color: var(--m-icon-button-outlined-disabled-textColor,${"#BABABA"});
}
:host([type=text]) {
    background-color: transparent;
    transition: background-color 0.2s, color 0.2s;
}
:host([type=text]:not([disabled=true]):hover) {
    box-shadow: none;
    transform: none;
    background-color: var(--m-icon-button-text-hover-backgroundColor,${"#EFEFEF"});
}
:host([type=text]:not([disabled=true]):active) {
    background-color: var(--m-icon-button-text-active-backgroundColor,${"#2EA2F9"});
}
:host([type=text][disabled=true]) {
    color: var(--m-icon-button-outlined-disabled-textColor,${"#BABABA"});
}
:host([disabled=true]){
    pointer-events:none;
}`;
const props = {
    disabled: false,
    type: ""
};
export class IconButton extends useElement({
    template,
    style,
    props,
    name,
    syncProps: [
        "disabled",
        "type"
    ]
}) {
}
IconButton.defineElement();
import 'vue';
