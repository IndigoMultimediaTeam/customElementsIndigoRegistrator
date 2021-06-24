/**
 * Based on specification *CE/WC* v0.
 *
 * Initiate *CE/WC* by calling function `component`
 * @see {@link https://github.com/IndigoMultimediaTeam/customElementsInitiator}
 * @param {function} component Function actually defining the *CE/WC*
 * @param {"DOMContentLoaded"|"now"} [when="now"] When "DOMContentLoaded" initiated when `document.readyState!=="loading"`
 */
function customElementsInitiator(component, when= "now"){
    if(when==="DOMContentLoaded"&&document.readyState==="loading")
        return document.addEventListener(when, component.bind(this));
    component.call(this);
}
