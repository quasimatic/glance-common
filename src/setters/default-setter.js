import log from 'loglevel';
import '../utils/promise-utils'

import {
    setUrlFromClient,
    getTagNameFromClient,
    // getTextFromClient,
    // getSelectTextFromClient,
    getAttributeFromClient,
    setCheckboxValueFromClient,
    triggerChange
} from '../utils/client';

function checkbox(element, values, {glance}) {
    return glance.browser.execute(getAttributeFromClient, element, "type").then(function (attributeType) {
        if (attributeType.toLowerCase() === "checkbox") {
            return glance.browser.execute(setCheckboxValueFromClient, element, ...values);
        }

        return Promise.reject();
    });
}

function input(element, values, {glance}) {
    return glance.browser.setValue(element, ...values);
}

export default function (selector, values, config) {
    var {glance} = config;

    switch(selector) {
        case "browser:url":
            return glance.browser.setUrl(...values);
        case "browser:activetab":
            return glance.browser.setActiveTab(...values);
    }

    return glance.element(selector).then((element)=> {
        return glance.browser.execute(getTagNameFromClient, element).then(function (tagName) {
            switch (tagName.toLowerCase()) {
                case "input":
                    return [
                        checkbox,
                        input
                    ].firstResolved(strategy => strategy(element, values, config)).then(result => {
                        return glance.browser.execute(triggerChange, element).then(changed => result);
                    });

                //             case "select":
                //                 return glance.browser.execute(getSelectTextFromClient, element);
                //
                //             default:
                //                 return glance.browser.execute(getTextFromClient, element);
            }

            return Promise.reject("No Getter Found");
        });
    });


}