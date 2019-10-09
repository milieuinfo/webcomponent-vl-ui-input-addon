import { VlElement } from '/node_modules/vl-ui-core/vl-core.js';

(() => {
    loadScript('util.js', '../node_modules/@govflanders/vl-ui-util/dist/js/util.js', () => {
        loadScript('input-addon.js', '../node_modules/@govflanders/vl-ui-input-addon/dist/js/input-addon.js')
    });
  
    function loadScript(id, src, onload) {
        if (!document.head.querySelector('#' + id)) {
            let script = document.createElement('script');
            script.setAttribute('id', id);
            script.setAttribute('src', src);
            script.onload = onload;
            document.head.appendChild(script);
        }
    }
 })();

/**
 * VlInput-addon
 * @class
 * @classdesc 
 * 
 * @extends VlElement
 * 
 * @property 
 * 
 * @see {@link https://www.github.com/milieuinfo/webcomponent-vl-ui-input-addon/releases/latest|Release notes}
 * @see {@link https://www.github.com/milieuinfo/webcomponent-vl-ui-input-addon/issues|Issues}
 * @see {@link https://webcomponenten.omgeving.vlaanderen.be/demo/vl-input-addon.html|Demo}
 * 
 */
export class VlInput-addon extends VlElement(HTMLElement) {



}

customElements.define('vl-input-addon', VlInput-addon);
