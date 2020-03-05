const { VlInputAddon, VlButtonInputAddon} = require('../components/vl-input-addon');
const { Page, Config } = require('vl-ui-core').Test;
const { VlTooltip } = require('vl-ui-tooltip').Test;

class VlInputAddonPage extends Page {
    async _getInputAddon(selector) {
        return new VlInputAddon(this.driver, selector);
    }

    async _getButtonInputAddon(selector) {
        return new VlButtonInputAddon(this.driver, selector);
    }

    async load() {
        await super.load(Config.baseUrl + '/demo/vl-input-addon.html');
    }

    async getInputAddon() {
        return this._getInputAddon('#input-addon');
    }

    async getTooltipFromInputAddon() {
        return new VlTooltip(this.driver, '#tooltip');
    }

    async getInputAddonButton() {
        return this._getButtonInputAddon('#button-input-addon');
    }
}

module.exports = VlInputAddonPage;
