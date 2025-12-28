import React, {useContext} from 'react';
import { FeaturesFlags } from '../context/FeatureFlagProvider';
import { FeatureTypes } from '../constants/Features';

export const Feature = ({children, featureKey}: {children: React.JSX.Element, featureKey : FeatureTypes }) =>{
    const features = useContext(FeaturesFlags);
    return features[featureKey] ? children : null; 
}