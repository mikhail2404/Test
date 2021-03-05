import React, { Component } from 'react'
import classes from './Quez.module.css'
import ActiveQuez from '../../components/ActiveQuez/ActiveQuez'
import FinishedQuiz from '../../components/FinishedQuiz/FinishedQuiz'

class Quez extends  Component{

    state = {
        isFinished: false,
        activeQuestion: 0,
        answerState: null,
        quiz: [
            {
                results: {},
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
                results: {},
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
        const results = [...this.state.quiz]


        if(question.rightAnswerId === answerId) {
            if(!results[this.state.activeQuestion].results[answerId]) {
                results[this.state.activeQuestion].results[answerId] = 'success'

                
            }

            this.setState({
                answerState: {[answerId]: 'success'},
                quiz: results
                
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
            results[this.state.activeQuestion].results[answerId] = 'error'
            
            
            this.setState({
                answerState: {[answerId] : 'error'},
                quiz: results
               
            })
        }
        // console.log(Object.keys(result));
        // console.log( results);
        // console.log(this.state.quiz[this.state.activeQuestion].id);
        // console.log(this.state.results);
        // console.log(this.state.quiz);
        // console.log(Object.keys(this.state.quiz[this.state.activeQuestion].results));
       
    }

    isQuizFinished() {
        return this.state.activeQuestion + 1 === this.state.quiz.length
    }

    render() {
      
        return(
            <div className={classes.Quez}>
                <div className={classes.QuezWrapper}>
                   

                    {
                        this.state.isFinished
                        ? 
                           <div> 
                                <h1>Результаты теста</h1>
                                <FinishedQuiz 
                                
                                quiz={this.state.quiz}
                                activeQuestion={this.state.activeQuestion}
                                rightAnswerId={this.state.quiz[this.state.activeQuestion ].rightAnswerId}
                                />
                            </div>

                        : 
                            <div>
                                <h1>Пройдите тест</h1>
                                <ActiveQuez
                                answers={this.state.quiz[this.state.activeQuestion].answers}
                                question={this.state.quiz[this.state.activeQuestion].question}
                                onAnswerClick={this.onAnswerClickHandler}
                                quizLength={this.state.quiz.length}
                                answerNumber={this.state.activeQuestion}
                                state={this.state.answerState}
                                />
                            </div>
                    }
           
                     

                   
                </div>
            </div>
        )
    }
}
export default Quez