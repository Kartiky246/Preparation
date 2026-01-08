import React, {useEffect, useState} from 'react';
import "./Stepper.css";

interface StepperProp {
    list: {
        name: string,
        component: React.ReactNode
    }[],
    stepPositions: StepPositions,
    stepSize?: number
}

export enum StepPositions {
    TOP = 'top',
    BOTTOM = 'bottom'
}


export const Stepper = ({list, stepPositions, stepSize}: StepperProp) => {
    const [currentStep, setCurrentStep] = useState<{ name: string, component: React.ReactNode } | null>(null);
    useEffect(()=>{
        if(list.length && !currentStep){
            setCurrentStep(list[0]);
        }
    })
        return  (
        <section className='stepper' style={{flexDirection: stepPositions === StepPositions.TOP ? 'column-reverse' : 'column'}}>
            {currentStep?.component && <div className='stepper-content'>{currentStep?.component}</div>}
            <div className='steps-wrapper'>
                 {list.length && (
                list.map(i=>(
                    <div className='stepper-steps' style={{width: `${stepSize}px`, height: `${stepSize}px`}} key={i.name}>{i.name}</div>
                ))
            )}
            </div>
        </section>
        )
}