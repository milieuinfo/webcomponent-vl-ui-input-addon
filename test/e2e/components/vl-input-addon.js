const { VlElement } = require('vl-ui-core').Test;
const { By } = require('selenium-webdriver');

class VlInputAddon extends VlElement {  
}

class VlButtonInputAddon extends VlInputAddon {

    async getIcon() {
        const icon = await this.findElement(By.css(this.selector + ' [is="vl-icon"]'));
        if (icon)  {
            const { VlIcon } = require('vl-ui-icon').Test;
            return new VlIcon(this.driver, icon);
        } 
    }
 }

module.exports = {
    VlInputAddon,
    VlButtonInputAddon
};
    
