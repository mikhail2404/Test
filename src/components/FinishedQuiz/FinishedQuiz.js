import React from 'react'
import classes from './FinishedQuiz.module.css'

const FinishedQuiz = props => {
    
    const resultArray = props.quiz.map((quizItem, index) => {
        
        const array =  Object.keys(quizItem.results)      
        return console.log(array);
    })
    
    // const newResultArray = resultArray[0].concat(resultArray[1])
    // console.log(newResultArray);
    // const successCount = newResultArray.reduce((total, key) => {
    //     if(newResultArray[key] === props){

    //     }
    // })
    
    // console.log(Object.keys(props.quiz[props.activeQuestion].results));
    // console.log(props.quiz);
    // console.log(Object.keys(props.quiz[props.activeQuestion].results))
    return(
        <div className={classes.FinishedQuiz}>
           
            <ul>

                { props.quiz.map((quizItem, index) => {
                 
                    
                    const cls =[
                        'fas',
                        Object.keys(quizItem.results).length === 1 ? 'fa-check' : 'fa-times',
                        Object.keys(quizItem.results).length === 1 ? classes['success'] : classes['error'],
                        
                    ]
                    return (
                        
                        <li 
                            key={index}
                        >
                            <strong>{index + 1}</strong>.&nbsp;
                            {quizItem.question}
                            <i className={cls.join(' ')}/>
                           
                        </li>
                    )
                })}
   
            </ul>
            <p>Правильно 4 из {props.quiz.length}</p>

            <div>
                <button>Повторить</button>
            </div>
        </div>
    )
}

export default FinishedQuiz;