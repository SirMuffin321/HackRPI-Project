const quizForm = document.getElementById('quiz-form');
            const resultDiv = document.getElementById('result');
            //const fourpointanswers = ['a'];

            quizForm.addEventListener('submit', e=>{
                e.preventDefault();

                let score = 0;
                const userAnswers = [quizForm.q1.value];
                userAnswers.forEach((answer,index) => {
                    if(answer === 'a'){
                        score += 0;
                    }
                    else if(answer === 'b'){
                        score += 1;
                    }
                    else if(answer === 'c'){
                        score += 2;
                    }
                    else if(answer === 'd'){
                        score += 3;
                    }
                    else if(answer === 'e'){
                        score += 4;
                    }
                });

                resultDiv.innerHTML = `Your diabetes score is ${score}`;
            });