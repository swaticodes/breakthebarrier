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
    
    //* set index to +1*/ 
    const incrementIndex = () => {
        setIndex((index + 1)% words.length)
    }

    return (
        <>
        <div className="w-full h-screen bg-gray-900 flex flex-col items-center justify-center"> 
        {/* {
            words.map((word) => {
                return <p>{word.english}</p>
            })
        } */}

        <p className="text-red-300 text-5xl">{words[index]['english']}</p>
        <p>' '</p>
        <p>' '</p>
        <p>' '</p>
        <p className="text-blue-500 text-5xl">{words[index]['englishSyllable']}</p>
        <p>' '</p>
        <p>' '</p>
        <p>' '</p>
        <p className="text-green-700 text-5xl">{words[index]['korean']}</p>
        <p>' '</p>
        <p>' '</p>
        <p>' '</p>
        <p className="text-indigo-300 text-5xl">{words[index]['koreanExample']}</p>
        <p>' '</p>
        <p>' '</p>
        <p>' '</p>
        <p>' '</p>
        <button className="bg-purple-500 hover:bg-purple-300 text-white font-bold py-2 px-4 rounded" onClick={incrementIndex}>nextWord</button>
        </div>
        </>
    );
}

export default App;
