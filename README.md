# customElementsInitiator
Vzor (pattern) pro generické registrování [Custom Elements (Web Components)](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_custom_elements) – dále *CE/WC*.

Jinými slovy, tento repozitář specifikuje jakým způsobem by měly být *CE/WC* komponenty zapsány, aby je bylo možné inicializovat v různých kontextech.
Tedy například, komponenta očekává své načtení až když je stránka/aplikace připravena, čímž se může myslet událost `DOMContentLoaded` v  případě
webu, ale `deviceready` (či jiná následující) v případě „cordováckých” aplikací.

Zjednodušená (prvotní specifikace), viz [v0](#v0).

Řádek nad definicí komponenty musí obsahovat odkaz:
```JavaScript
/* *CE/WC* v0, see: https://github.com/IndigoMultimediaTeam/customElementsInitiator
 * … případný další text/popisek/dokumnetace ke komponentě (pokud potřeba)
 */
```
… kde `v0` odkazuje na verzi/typ specifikace.

## v0
Tato specifikace počítá se dvěma časy inicializace – **hned** (událost `now`), či **později** (událost `DOMContentLoaded`).
**Později** v tomto případě může znamenat i to, že komponenta závisí i na dalších částech aplikace (je potřeba uvést do dokumnetace).
Komponenta by měla být definována uvnitř funkce `component` a tato fuknce by měla být volána funkcí **`customElementsInitiator`**.
Pokud tato funkce existuje, musí se použít již existující.

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
- `component` je místo (technicky funkce) pro vlastní kód definice *CE/WC* (celý příklad viz [default_v0/example.js](./default_v0/example.js))
- `when` nabývající hodnot `DOMContentLoaded`, nebo `now`

## v1 (diskuze)
Prvotní specifikace je spíše nástřel. Nerozlišuje situaci, kdy komponenta *může* být načtena dříve/později versus *musí*
(protože na tom např. závisí její správné chování – typicky potřebuje databázi).

Proto by měla asi vzniknout tato verze specifikace, která by řešila načítání z pohledu závislostí (např. *atanytime*/*domready*/*appready*).
