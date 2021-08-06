# customElementsInitiator
Vzor (pattern) pro generické registrování [Custom Elements (Web Components)](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_custom_elements) – dále *CE/WC*.

Tento repozitář specifikuje jak inicializovat proces registrace vlastních elementů. Komponenta by měla být definována uvnitř funkce `component` a tato fuknce by měla být volána funkcí **`customElementsInitiator`**.

## v0
**Definice komponenty**
```JavaScript
/* global customElementsInitiator */
/* *CE/WC* v0, see: https://github.com/IndigoMultimediaTeam/customElementsInitiator
 *
 * … anothher docs/comments if needed …
 */
(typeof customElementsInitiator==="function" ? customElementsInitiator : function customElementsInitiator(component, when= "now"){
    if(when==="DOMContentLoaded"&&document.readyState==="loading")
        return document.addEventListener(when, component.bind(this));
    component.call(this);
})(function component(){ /* … */ }/*, when*/);
```
Funkce `customElementsInitiator` iniciuje registraci *CE/WC* (vzorová defaultní definice [default_v0/customElementsInitiator.js](./default_v0/customElementsInitiator.js)) a akceptuje dva argumenty:
- `component` je místo pro vlastní kód definice *CE/WC* (celý příklad viz [default_v0/example.js](./default_v0/example.js))
- `when` nabývající hodnot `DOMContentLoaded`, nebo `now`
