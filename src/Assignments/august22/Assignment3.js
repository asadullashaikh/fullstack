import { useState } from 'react';

function August22() {
    let jsonData = {
        quiz: {
            sport: {
                q1: {
                    question: "Which one is correct team name in NBA?",
                    options: [
                        "New York Bulls",
                        "Los Angeles Kings",
                        "Golden State Warriros",
                        "Huston Rocket"
                    ],
                    answer: "Huston Rocket",
                }
            },
            maths: {
                q1: {
                    question: "5 + 7 = ?",
                    options: [
                        "10",
                        "11",
                        "12",
                        "13"
                    ],
                    answer: "12"
                },
                q2: {
                    question: "12 - 8 = ?",
                    options: [
                        "1",
                        "2",
                        "3",
                        "4"
                    ],
                    answer: "4"
                }
            }
        }
    }

    let l = jsonData.quiz.sport.q1.options
    let q = jsonData.quiz.maths
    console.log(q)
    return(
        <div>
    <div>
        <div>
        3) write a program to print all options in q1 of sports subject.
        </div>
        
        <div>
            {l.join(" , ")}
    </div>
    </div>
    </div>
    )
}

export default August22