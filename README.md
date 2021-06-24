# customElementsInitiator
Vzor (pattern) pro generické registrování [Custom Elements (Web Components)](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_custom_elements) – dále *CE/WC*.

Tento repozitář specifikuje jak inicializovat proces registrace vlastních elementů. Komponenta by měla být definována uvnitř funkce `component` a tato fuknce by měla být volána funkcí **`customElementsInitiator`**.

## V0
```JavaScript
/* global customElementsInitiator */
(typeof customElementsInitiator==="function" ? customElementsInitiator : function customElementsInitiator(component, when= "now"){
    if(when==="DOMContentLoaded"&&document.readyState==="loading")
        return document.addEventListener(when, component.bind(this));
    component.call(this);
})(function component(){ /* … */ }/*, when*/);
```
Funkce `customElementsInitiator` akceptuje dva argumenty:
- `component` funkce registrující *CE/WC*
- `when` nabývající hodnot `DOMContentLoaded`, nebo `now`
