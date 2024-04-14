import React from 'react';
import ReactDOM from 'react-dom';

function Extest() {
    const check = () => {
        const radios1 = document.getElementsByName('q1');
        let selected_value1 = null;

        for (const radio of radios1) {
            if (radio.checked) {
                selected_value1 = radio.value;
                break;
            }
        }
        if (selected_value1 === 'NM') {
            document.getElementById('ans1').innerHTML = "<span style='color: green'>Correct Answer</span>";
        } else {
            document.getElementById('ans1').innerHTML = "<span style='color: red'>Wrong Answer</span>";
        }

        const radios2 = document.getElementsByName('q2');
        let selected_value2 = null;
        for (const radio of radios2) {
            if (radio.checked) {
                selected_value2 = radio.value;
                break;
            }
        }
        if (selected_value2 === 'Delhi') {
            document.getElementById('ans2').innerHTML = "<span style='color: green'>Correct Answer</span>";
        } else {
            document.getElementById('ans2').innerHTML = "<span style='color: red'>Wrong Answer</span>";
        }

        const radios3 = document.getElementsByName('q3');
        let selected_value3 = null;
        for (const radio of radios3) {
            if (radio.checked) {
                selected_value3 = radio.value;
                break;
            }
        }
        if (selected_value3 === 'Hindi') {
            document.getElementById('ans3').innerHTML = "<span style='color: green'>Correct Answer</span>";
        } else {
            document.getElementById('ans3').innerHTML = "<span style='color: red'>Wrong Answer</span>";
        }

        const radios4 = document.getElementsByName('q4');
        let selected_value4 = null;
        for (const radio of radios4) {
            if (radio.checked) {
                selected_value4 = radio.value;
                break;
            }
        }
        if (selected_value4 === 'Rupee') {
            document.getElementById('ans4').innerHTML = "<span style='color: green'>Correct Answer</span>";
        } else {
            document.getElementById('ans4').innerHTML = "<span style='color: red'>Wrong Answer</span>";
        }
    };

    return (
        <>
            <h1>Grey's Anatomy Quiz</h1>
            <h2>Answer the Questions given below</h2>
            <p>Q1: Who is the Chief of Surgery at Seattle Grace Hospital at the beginning of the series?</p>
            <input type="radio" name="q1" value="NM" /> Richard Webber<br />
            <input type="radio" name="q1" value="RG" /> Miranda Bailey<br />
            <input type="radio" name="q1" value="AK" /> Derek Shepherd<br />
            <p id="ans1"></p>
            <p>Q2: What is the name of the surgical intern who is involved in a car accident in the pilot episode?</p>
            <input type="radio" name="q2" value="Delhi" /> Meredith Grey<br />
            <input type="radio" name="q2" value="Mumbai" /> Izzie Stevens<br />
            <input type="radio" name="q2" value="Bangalore" /> George O'Malley<br />
            <p id="ans2"></p>
            <p>Q3: What is the name of the groundbreaking medical procedure that Derek Shepherd performs in Season 2?</p>
            <input type="radio" name="q3" value="Hindi" /> The Alzheimer's Clinical Trial<br />
            <input type="radio" name="q3" value="English" /> The Hand Transplant<br />
            <input type="radio" name="q3" value="Bengali" /> The Brain Tumor Removal<br />
            <p id="ans3"></p>
            <p>Q4: What is the name of the plane crash that occurs in Season 8, resulting in the death of several main characters?</p>
            <input type="radio" name="q4" value="Dollar" />The Seattle Grace Plane Crash<br />
            <input type="radio" name="q4" value="Rupee" /> The Mercy West Merger Plane Crash<br />
            <input type="radio" name="q4" value="Yen" /> The Domestic Flight Crash<br />
            <p id="ans4"></p>
            <button onClick={check}>Submit</button>
        </>
    );
}

ReactDOM.render(<Extest />, document.getElementById('root'));
export default Extest;





