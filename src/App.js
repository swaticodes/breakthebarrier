import {useState} from "react"
function App() {
    let words = [
        {
            english: "(yo)-yo",
            englishSyllable: "yo",
            korean: "요",
            koreanExample: "용",
        },
        {
            english: "f(a)ther",
            englishSyllable: "ah",
            korean: "아",
            koreanExample: "바다",
        },
        {
            english: "n(o)",
            englishSyllable: "oh",
            korean: "오",
            koreanExample: "오늘",
        },
        {
            english: "y(ou)",
            englishSyllable: "yoo",
            korean: "유",
            koreanExample: "유리",
        },
        {
            english: "y(a)cht",
            englishSyllable: "yah",
            korean: "야",
            koreanExample: "야구",
        }
    ];


    //create a function to:
    //print out english word
    //print out english syllable and stylize (color)
    //print korean vowel and stylize (color)
    //print korean example word
    
    // {() => doThing()} arrow function executes immediately (as soon as rendering)
    //words[0]['english']
    //delay appearance using CSS
    //JSX - no components or state or hooks
    //can call functions in HTML
    //.map() js - array.map() x -> y
    //buttons- react on click


    //tailwind classes (tailend documentation)
    //animation- tailwind transitions
    //translate to move
    //opacity to fade in + colors
    //transition duration- defines how long transition takes and spacing out transition


    const [index, setIndex] = useState(0); // state variable, intialize index to be 0
    
    
    const SwitchButton1 = ({initialText, afterText}) => {
        const [buttonText, setButtonText] = useState(initialText);

        return (
            <button className="text-pink-200 text-3xl" onClick={() => setButtonText(afterText)}>{buttonText}</button>
        );
    }

    const SwitchButton2 = ({initialText, afterText}) => {
        const [buttonText, setButtonText] = useState(initialText);

        return (
            <button className="text-purple-200 text-3xl" onClick={() => setButtonText(afterText)}>{buttonText}</button>
        );
    }

    const SwitchButton3 = ({initialText, afterText}) => {
        const [buttonText, setButtonText] = useState(initialText);

        return (
            <button className="text-blue-300 text-3xl" onClick={() => setButtonText(afterText)}>{buttonText}</button>
        );
    }

    const SwitchButton4 = ({initialText, afterText}) => {
        const [buttonText, setButtonText] = useState(initialText);

        return (
            <button className="text-green-200 text-3xl" onClick={() => setButtonText(afterText)}>{buttonText}</button>
        );
    }

    //* set index to +1*/ 
    const incrementIndex = () => {
        setIndex((index + 1)% words.length)
    }
    // function to set the text
    // const [buttonText2, setButtonText2] = useState("Show english sound")
    // const [buttonText3, setButtonText3] = useState("Show korean consonant")
    // const [buttonText4, setButtonText4] = useState("Show korean word example")

    // const changeText2 = (text) => setButtonText2(text)
    // const changeText3 = (text) => setButtonText3(text)
    // const changeText4 = (text) => setButtonText4(text)

    return (
        <>
        <div className="w-full h-screen bg-gray-900 flex flex-col items-center justify-evenly"> 
        {/* {
            words.map((word) => {
                return <p>{word.english}</p>
            })
        } */}
        {/* <p className="text-red-300 text-5xl">{words[index]['english']}</p>
        <p className="text-blue-500 text-5xl">{words[index]['englishSyllable']}</p>
        <p className="text-green-700 text-5xl">{words[index]['korean']}</p>
        <p className="text-indigo-300 text-5xl">{words[index]['koreanExample']}</p> */}
        <SwitchButton1 initialText="Show English word" afterText={words[index]['english']}></SwitchButton1>
        <SwitchButton2 initialText="Show English sound from word" afterText={words[index]['englishSyllable']}></SwitchButton2>
        <SwitchButton3 initialText="Show Korean consonant" afterText={words[index]['korean']}></SwitchButton3>
        <SwitchButton4 initialText="Show Korean Example" afterText={words[index]['koreanExample']}></SwitchButton4>
        <button className="bg-indigo-500 hover:bg-indigo-300 text-white font-bold py-2 px-4 rounded text3xl animate-bounce" onClick={incrementIndex}>Next Word</button>
        </div>
        </>
    );
}

export default App;
