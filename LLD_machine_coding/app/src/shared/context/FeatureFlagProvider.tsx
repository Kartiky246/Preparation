import React, {createContext, useState} from 'react';
import {FeatureTypes} from '../constants/Features';

type FeatureFlags = {
  [key in FeatureTypes]: boolean;
};

export const FeaturesFlags = createContext<FeatureFlags>({
    [FeatureTypes.COUNTER_BUTTON]: false
});

export const FeatureFlagProvider = ({children}: {children: React.ReactNode }) =>{
    const [featureFlags, _] = useState<FeatureFlags>({
        [FeatureTypes.COUNTER_BUTTON]: false
    });
    // make the api call and set feature flags in future
    return (<FeaturesFlags value={featureFlags}>{children}</FeaturesFlags>)
}