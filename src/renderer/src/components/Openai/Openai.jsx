import React from 'react';
import { useEffect,useState } from 'react';

function OpenAI(){
    const [prompt, setPrompt]= useState("");
    const [answer, setAnswer]= useState("");

    const fetchAnswer = () => {
        fetch(`https://jsonplaceholder.typicode.com/todos/${prompt}`)
        .then((resp)=> resp.json())
        .then ((data) => {
            setAnswer(data["title"]);
            document.getElementById("answer").value = answer;
            console.log(answer)
        })
    }

    // const fetchAnswer = () = {
    //     fetch("https://jsonplaceholder.typicode.com/todos/1")
    //     .then((resp)=> response.json())
    //     .then ((data)=> {
    //         setAnswer(data["title"]);
    // }};

    useEffect(()=>{

        });

    return (
        <div>
            <input type="text" placeholder='placeholder here' onChange={(event)=> {setPrompt(event.target.value)}}/>
            <button type="submit" onClick={fetchAnswer}>Submit</button>
            <textarea rows="50" cols="100" id="answer">
            </textarea>
        </div>
    );
}

export default OpenAI;