/* global customElementsInitiator */
/* *CE/WC* v0, see: https://github.com/IndigoMultimediaTeam/customElementsInitiator
 *
 * Just an example
 */
(typeof customElementsInitiator==="function" ? customElementsInitiator : function customElementsInitiator(component, when= "now"){
    if(when==="DOMContentLoaded"&&document.readyState==="loading")
        return document.addEventListener(when, component.bind(this));
    component.call(this);
})(function component(){
  class CExampleElement extends HTMLElement{
    static get tag_name(){ return "c-example"; }
  }
  customElements.define(CExampleElement.tag_name, CExampleElement);
}, "DOMContentLoaded");
