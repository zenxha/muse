import { useState } from 'react';
import Button from "./Button";
import { Link } from 'react-router-dom';
import {User} from '../objects/User.ts';
import './SignUpForm.module.css'

function SignUpForm() {
    var newUser = new User();
    const [next, setNext] = useState("username")
    const [input, setInput] = useState('')
    const [count, setCount] = useState(0)
    const [type, settype] = useState('text')

    const handleInput =(event)=> {
        setInput(event.target.value)
    }

    const handleClick =(event)=> {
        if(count > 0) {
            setCount((curr)=>curr-1)
        }
        console.log(count)
        switch (count) {
            case 1:
                setNext("username")
                break;
            case 2:
                setNext("email")
                break;
            default:
                break;

        }
    }

    const handleSubmit =(event)=> {
        event.preventDefault()
        setCount((curr)=>curr+1)
        switch (count) {
            case 0:
                newUser.userName = input;
                setInput('')
                setNext("email")
                settype("text")
                console.log(newUser)
                break;
            case 1:
                newUser.email = input;
                setInput('')
                setNext("password")
                settype("password")
                console.log(newUser)
                break;
            case 2:
                newUser.password = input;
                setInput('')
                console.log(newUser)
                break;
            default:
                break;

        }
        
    }
   
    
    return (
        <div className="container" 
            style={{
                background:"#89a5de", 
                height: "420px",
                width: "600px",
                borderRadius: "20px",
                position: "relative",
                boxShadow: "0 0 30px rgba(173, 185, 236,.9)",
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
        }}>
            {count < 3 ? 
                <>
                    <button 
                        className="btn"
                        onClick={handleClick}
                        style = {{
                            height: "40px",
                            width: "80px",
                            position: "absolute",
                            top: "5%",
                            left: "5%",
                            cursor: "pointer",
                            background: 'steelblue',
                            textAlign: "start",
                            lineHeight: "20px",
                            paddingTop: "1.4%",
                            paddingLeft: "3.2%",
                        }}
                    > Before </button>
                    <form onSubmit={handleSubmit}>
                        <label>
                        {next + " :  "}
                        <input type={type} placeholder={next} value={input} onChange={handleInput} />
                        </label>
                        <br />
                        <Button text={"Next"} />
                    </form>
                </>
                :
                <div>
                    done
                </div>
            }
            
        </div>
    );
}

export default SignUpForm;