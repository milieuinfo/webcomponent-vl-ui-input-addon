import { VlElement, NativeVlElement, define } from '/node_modules/vl-ui-core/vl-core.js';

export const VlInputAddonElement = (SuperClass) => {
    return class extends NativeVlElement(SuperClass) {
        connectedCallback() {
            this.classList.add('vl-input-addon');
        }

        get _stylePath() {
            return '../style.css';
        }
    }
}

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
export class VlInputAddon extends VlInputAddonElement(HTMLParagraphElement) {
    static get _observedAttributes() {
        return ['data-vl-tooltip-content'];
    }

    _data_vl_tooltip_contentChangedCallback(oldValue, newValue) {
        console.log(oldValue + ' - ' + newValue);
    }
}

define('vl-input-addon', VlInputAddon, {extends: 'p'});