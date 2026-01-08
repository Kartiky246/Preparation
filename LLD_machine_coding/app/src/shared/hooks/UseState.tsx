import {useState, useEffect} from 'react'
export default function UseState() {
    const [variable, setVariable] = useState<number>(()=>{
        return 1+1
    });
    useEffect(()=>{
        if(variable===0){
            setVariable(4);
        }
        console.log("Effect mount");
        return () =>{
            console.log("Effect unmount")
        }
    }, [variable]);
    const clickhanlder = () =>{
        setVariable((variable)=>{
            return variable+1
        })
        setTimeout(()=>{
            alert(variable);
        },4000)
    }
    return (
        <>
            <button onClick={clickhanlder}>counter</button>
            <div>UseState {variable}</div>
        </>
    )
}
