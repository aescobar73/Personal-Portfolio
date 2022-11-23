import Scantron from '../assets/scantron.jpg'
import Escape from '../assets/project2.jpg'
import Text from '../assets/textEditor.jpg'
import Note from '../assets/foodie.jpg'
import Planner from '../assets/planner.jpg'
import Generator from '../assets/generator.jpg'

export default function Project () {
    return (
        <>
     <div class='grid-container'>  
        <div>
            <h1>The Scranton Gamer</h1>
            <h3><a href='https://that-s-what-she-said.github.io/The-Scranton-Gamer/' target='_blank' rel="noreferrer"><img src={Scantron} alt='Scantron'height={100} width={400}/></a></h3>
            <h4><a href='https://github.com/That-s-what-she-said/The-Scranton-Gamer' target='_blank' rel="noreferrer">Github</a></h4>
        </div>
       
       
       <div>
            <h1>Escape Room</h1>
            <h3><a href='https://eat-the-bagel.herokuapp.com/' target='_blank' rel="noreferrer"><img src={Escape} alt='Scantron'height={250} width={275}/></a></h3>
            <h4><a href='https://github.com/Eat-The-Bagel/Escape-App' target='_blank' rel="noreferrer">Github</a></h4>
        </div>

        <div>
            <h1>The Text Editor</h1>
            <h3><a href='https://mighty-falls-20351.herokuapp.com' target='_blank' rel="noreferrer"><img src={Text} alt='Editor Icon'height={250} width={350}/></a></h3>
            <h4><a href='https://github.com/aescobar73/The-Text-Editor' target='_blank' rel="noreferrer">Github</a></h4>
        </div>

        <br></br>

        <div>
            <h1>Foodie Finder</h1>
            <h3><a href='https://lala-foodiefinder.herokuapp.com/' target='_blank' rel="noreferrer"><img src={Note} alt='Note Icon'height={250} width={350}/></a></h3>
            <h4><a href='https://github.com/LALA-Chicago' target='_blank' rel="noreferrer">Github</a></h4>
        </div>

        <div>
            <h1>Daily Planner</h1>
            <h3><a href='https://aescobar73.github.io/Daily-Planner/' target='_blank' rel="noreferrer"><img src={Planner} alt='Planner Icon'height={250} width={350}/></a></h3>
            <h4><a href='https://github.com/aescobar73/Daily-Planner' target='_blank' rel="noreferrer">Github</a></h4>
        </div>

        <div>
            <h1>Password Generator</h1>
            <h3><a href='https://aescobar73.github.io/Password_generator/' target='_blank' rel="noreferrer"><img src={Generator} alt='Password Icon'height={250} width={350}/></a></h3>
            <h4><a href='https://github.com/aescobar73/Password_generator' target='_blank' rel="noreferrer">Github</a></h4>
        </div>

        </div> 

        </>
    )
}