import React from 'react'
import classes from './FinishedQuiz.module.css'

const FinishedQuiz = props => {
    console.log(props.results);
    return(
        <div className={classes.FinishedQuiz}>
            <ul>

                { props.quiz.map((quizItem, index) => {
                    console.log(props.results[quizItem.id]);
                    console.log(quizItem.id);
                    const cls =[
                        'fas',
                        props.results[quizItem.id] === 'error' ? 'fa-times' : 'fa-check',
                        classes[props.results[quizItem.id]]
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
                {/* <li>
                    <strong>1. </strong>
                    {props.quiz[0].answers.id}
                    <i className={'fas fa-times ' + classes.error}/>
                </li>
                <li>
                    <strong>2. </strong>
                    How are you
                    <i className={'fas fa-check ' + classes.success}/>
                </li> */}
            </ul>
            <p>Правильно 4 из 10</p>

            <div>
                <button>Повторить</button>
            </div>
        </div>
    )
}

export default FinishedQuiz;