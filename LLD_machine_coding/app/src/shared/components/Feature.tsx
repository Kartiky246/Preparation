import React, {useContext} from 'react';
import { FeaturesFlags } from '../context/FeatureFlagProvider';
import { FeatureTypes } from '../constants/Features';

export const Feature = ({children, featureKey}: {children: React.ReactNode , featureKey : FeatureTypes }) =>{
    const features = useContext(FeaturesFlags);
    return features[featureKey] ? children : null; 
}