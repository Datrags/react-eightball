import { useState } from 'react'

const EightBall = (props) => {
    function showResponses(arr) {
        const choice = arr[Math.floor(Math.random() * arr.length)];
        return choice;
    };

    const [ballObj, setBallObj] = useState({
        msg: "Think of a question", 
        color: "#000"
    });

    return (
        <div>
            <button style={{
                backgroundColor: ballObj.color, 
                width: "200px", 
                height: "200px", 
                borderRadius: "50%"}} 
            onClick={() => 
                setBallObj(showResponses(props.answers))}> {ballObj.msg}
            </button>
        </div>
    );
}

export default EightBall;