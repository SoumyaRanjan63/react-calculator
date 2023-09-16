import React,{useState,useEffect} from "react";

const App=()=>{
   
    const [input1,setInput1]=useState("");
    const [input2,setInput2]=useState("");
    const [result,setResult]=useState("");
    const [error,setError]=useState("");

    useEffect(() => {
        document.title = "react-calculator"; // Set the title when the component mounts
    }, []); 

    const handleInputOne=(event)=>{
        setInput1(event.target.value);
        setResult("");
    }
    const handleInputTwo=(event)=>{
        setInput2(event.target.value);
        setResult("");
    }

    const validation =()=>{
        if(input1.trim()===""||input2.trim()===""){
            setError("Both input field are required!");
            setInput1("");
            setInput2("");
            setResult("");
            return false;
        }
        if(isNaN(input1) || isNaN(input2)){
            setError("Please input valid number");
            setInput1("");
            setInput2("");
            setResult("");
            return false;
        }
        setError("");
        return true;
    }

    const perFormOperation=(operationType)=>{
      if(validation()){
         const num1=parseFloat(input1);
         const num2=parseFloat(input2);

         let resultvalue;
         if(operationType==="addtion"){
            resultvalue=num1+num2;
         }
         if(operationType === "substraction"){
            resultvalue =num1-num2;
         }
         if(operationType === "multiply"){
            resultvalue=num1*num2;
         }
         if(operationType=== "divide"){
            if(num2!=0){
                resultvalue=num1/num2;
            }
            else{
                setError("Division by 0 is not allowed.");
                return;
            }
         }
         setResult(`Result : ${resultvalue}`);
         setError("");
      }
    }
    
    return (
        
        <div className="calculator">
            <h1>React Calculator</h1>
            <input type="text" placeholder="Num 1" value={input1} onChange={handleInputOne} />
            <input type="text" placeholder="Num 2" value={input2} onChange={handleInputTwo} />
            <div className="operation-btn">
            <button type="button" onClick={()=>perFormOperation("addtion")}>+</button>
            <button type="button" onClick={()=>perFormOperation("substraction")}>-</button>
            <button type="button" onClick={()=>perFormOperation("multiply")}>*</button>
            <button type="button" onClick={()=>perFormOperation("divide")}>/</button>
            </div>
            
            {error && <p className="error"><span>error!</span>{error}</p> }
            {result && <p className="result"><span>success!</span>{result}</p>}
        </div>
    )
}
export default App;
