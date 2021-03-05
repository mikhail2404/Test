import React from 'react'
import classes from './ActiveQuez.module.css'
import AnswersList from './AnswersList/AnswersList'

const ActiveQuez = props => {
    return(
        <div className={classes.ActiveQuez}>
            <p className={classes.Question}>
                <span>
                    <strong>{props.answerNumber + 1}.</strong>&nbsp;
                        {props.question}
                </span>

                <small>{props.answerNumber + 1} from {props.quizLength}</small>
            </p>

            <AnswersList 
                answers={props.answers}
                onAnswerClick={props.onAnswerClick}
                state={props.state}

            />

        </div>
    )
}

export default ActiveQuez;