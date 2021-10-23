function App() {
    let words = [
        {
            english: "yo-yo",
            englishSyllable: "yo",
            korean: "요",
            koreanExample: "용",
        },
        {
            english: "father",
            syllable: "ah",
            korean: "아",
            koreanExample: "바다",
        },
        {
            english: "no",
            syllable: "oh",
            korean: "오",
            koreanExample: "오늘",
        },
        {
            english: "you",
            syllable: "yoo",
            korean: "유",
            koreanExample: "유리",
        },
        {
            english: "yacht",
            syllable: "yah",
            korean: "야",
            koreanExample: "야구",
        }
    ];


    //create a function to:
    //print out english word
    //print out english syllable and stylize (color)
    //print korean vowel and stylize (color)
    //print korean example word

    function doThing() {
        return "Hello World"
        //return words[2][english]
    } 
    // {() => doThing()} arrow function executes immediately (as soon as rendering)
    //words[0]['english']
    //delay appearance using CSS
    //JSX - no components or state or hooks
    //can call functions in HTML
    //.map() js - array.map() x -> y
    //buttons- react on click


    //tailwind classes (tailend documentation) 
    //animation- tailend transitions
    //translate to move
    //opacity to fade in + colors
    //transition duration- defines how long transition takes and spacing out transition

    return (
        <div className="w-full h-screen bg-gray-100 flex flex-col items-center justify-center"> 
            <h1 className="text-4xl text-gray-700">{words[0]['english'], words[0]['englishSyllable'], words[0]['korean']}</h1>
        </div>
    );
}

export default App;
