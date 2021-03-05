import React, { Component } from 'react'
import classes from './Quez.module.css'
import ActiveQuez from '../../components/ActiveQuez/ActiveQuez'
import FinishedQuiz from '../../components/FinishedQuiz/FinishedQuiz'

class Quez extends  Component{

    state = {
        results: {},
        isFinished: false,
        activeQuestion: 0,
        answerState: null,
        quiz: [
            {
                question: 'Какого цвета небо?',
                rightAnswerId: 1,
                id: 1,
                answers: [
                    {text: 'Синий', id:1},
                    {text: 'Розовый', id:2},
                    {text: 'Красный', id:3},
                    {text: 'Желтый', id:4},
                ]
            },
            {
                question: 'Какой сейчас год?',
                rightAnswerId: 3,
                id: 2,
                answers: [
                    {text: '2003', id:1},
                    {text: '2000', id:2},
                    {text: '2021', id:3},
                    {text: '1990', id:4},
                ]
            }
        ]
    }

    onAnswerClickHandler = (answerId) => {
        
        
        if (this.state.answerState) {
            const key = Object.keys(this.state.answerState)[0]
            
            if(this.state.answerState[key] === 'success'){
                return
            }
        }

        const question = this.state.quiz[this.state.activeQuestion] 
        const results = this.state.results
        
        
        // console.log(results[answerId]);
        // console.log(result[answerId] = answerId);
        // console.log(result[answerId] = answerId);
        // console.log(result[answerId]);
        // console.log(Object.keys(results).length)
        if(question.rightAnswerId === answerId) {
            if(!results[answerId]) {
                results[answerId] = 'success'

                
            }

            this.setState({
                answerState: {[answerId]: 'success'},
                results: results
            })
            
           const timeout =  window.setTimeout(() => {
             
            if(this.isQuizFinished()) {
                this.setState({ 
                    isFinished: true
                })
            } else {
                this.setState({
                    activeQuestion: this.state.activeQuestion + 1,
                    answerState: null
                })
            }

            window.clearTimeout(timeout)
           }, 1000)

           
        } else {
            results[answerId] = 'error'
            
            this.setState({
                answerState: {[answerId] : 'error'},
                results
            })
        }
        // console.log(Object.keys(result));
        console.log( results);
        // console.log(this.state.results);
    }

    isQuizFinished() {
        return this.state.activeQuestion + 1 === this.state.quiz.length
    }

    render() {
      
        return(
            <div className={classes.Quez}>
                <div className={classes.QuezWrapper}>
                    <h1>Пройдите тест</h1>

                    {
                        this.state.isFinished
                        ? <FinishedQuiz 
                            
                            results={this.state.results}
                            quiz={this.state.quiz}
                            />
                        : <ActiveQuez
                            answers={this.state.quiz[this.state.activeQuestion].answers}
                            question={this.state.quiz[this.state.activeQuestion].question}
                            onAnswerClick={this.onAnswerClickHandler}
                            quizLength={this.state.quiz.length}
                            answerNumber={this.state.activeQuestion}
                            state={this.state.answerState}
                            />
                    }
           
                     

                   
                </div>
            </div>
        )
    }
}
export default Quez