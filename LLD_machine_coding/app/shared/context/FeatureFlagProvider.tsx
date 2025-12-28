import React, {createContext, useState} from 'react';
import {FeatureTypes} from '../constants/Feature';

type FeatureFlags = {
  [key in FeatureTypes]: boolean;
};

const Features = createContext<FeatureFlags>({
    [FeatureTypes.COUNTER_BUTTON]: true
});

export const FeatureFlagProvider = () =>{
    const [featureFlags, setFeatureFalgs] = useState<FeatureFlags>({
        [FeatureTypes.COUNTER_BUTTON]: true
    });
    // make the api call and set feature flags in future
    return (<Features.Provider value={featureFlags}></Features.Provider>)
}