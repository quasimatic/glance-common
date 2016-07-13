class PromiseWrappedDriver {
    constructor(driver) {
        this.driver = driver;
    }

    init() {
        if(this.driver.init)
            return Promise.resolve(this.driver.init());

        return Promise.resolve();
    }

    getUrl() {
        return Promise.resolve(this.driver.getUrl());
    }

    setUrl(address) {
        return Promise.resolve(this.driver.setUrl(address));
    }

    type(keys) {
        return Promise.resolve(this.driver);
    }

    click(element) {
        return Promise.resolve(this.driver.click(element));
    }

    doubleClick(elementReference) {
        return Promise.resolve(this.driver);
    }

    middleClick(elementReference) {
        return Promise.resolve(this.driver);
    }

    moveMouseTo(elementReference, xOffset, yOffset) {
        return Promise.resolve(this.driver);
    }

    rightClick(elementReference) {
        return Promise.resolve(this.driver);
    }

    mouseDown(button) {
        return Promise.resolve(this.driver);
    }

    mouseUp(button) {
        return Promise.resolve(this.driver);
    }

    execute(func, ...args) {
        return Promise.resolve(this.driver.execute(func, ...args));
    }

    executeAsync(func, ...args) {
        return Promise.resolve(this.driver.executeAsync(func, ...args));
    }

    dragAndDrop(elementReferenceSource, elementReferenceTarget, xOffset, yOffset) {
        return Promise.resolve(this.driver);
    }

    pause(delay) {
        return Promise.resolve(this.driver);
    }

    saveScreenshot(filename) {
        return Promise.resolve(this.driver);
    }

    end() {
        return Promise.resolve(this.driver);
    }

    element(reference) {
        return Promise.resolve(this.driver.element(reference));
    }

    elements(reference) {
        return Promise.resolve(this.driver.elements(reference));
    }

    getValue(element) {
        return Promise.resolve(this.driver.getValue(element));
    }

    setValue(element, ...values) {
        return Promise.resolve(this.driver.setValue(element, ...values));
    }

    getTitle() {
        return Promise.resolve(this.driver);
    }

    log(type) {
        return Promise.resolve(this.driver.log(type));
    }
}

export default PromiseWrappedDriver;
