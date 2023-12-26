import { useState } from "react";
import GlobalInput from "./GlobalInput";

const InputProp = () => {
    const [state, setState] = useState("")

  return (
    <div>
        <GlobalInput
        placeholder="Input Your Value"
        
        value={state}
        onChange= {(el: any) => setState(el.target.value)}
        className="w-[300px]"
        color="border-pink-600"
        />
    </div>
  )
}

export default InputProp;
 