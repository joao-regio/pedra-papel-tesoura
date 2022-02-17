var elementos = document.querySelectorAll('.player-options div > img');
            var playerOpt = "";
            var inimigoOpt = "";
            var vencedor = document.querySelector('.vencedor');
            
            

            function validarVitoria(){
                

                if(playerOpt == "papel"){

                    if(inimigoOpt == "papel"){
                        //empate
                        vencedor.innerHTML = "O jogo foi empatado";
                    }else if(inimigoOpt == "tesoura"){
                        //derrota
                        vencedor.innerHTML = "Você perdeu";
                    }else if(inimigoOpt == "pedra"){
                        //vitória
                        vencedor.innerHTML = "Você ganhou";
                    }
                }
                if(playerOpt == "tesoura"){

                    if(inimigoOpt == "papel"){
                        //vitória
                        vencedor.innerHTML = "Você ganhou";
                    }else if(inimigoOpt == "tesoura"){
                        //empate
                        vencedor.innerHTML = "O jogo foi empatado";
                    }else if(inimigoOpt == "pedra"){
                        //derrota
                        vencedor.innerHTML = "Você perdeu";
                    }
                }
                
                if(playerOpt == "pedra"){

                    if(inimigoOpt == "papel"){
                        //derrota
                        vencedor.innerHTML = "Você perdeu";
                    }else if(inimigoOpt == "tesoura"){
                        //vitória
                        vencedor.innerHTML = "Você ganhou";
                    }else if(inimigoOpt == "pedra"){
                        //empate
                        vencedor.innerHTML = "O jogo foi empatado";
                    }
                }

            }


            function resetInimigo(){
                const enemyOptions = document.querySelectorAll('.enemy-options div');
                for(var j = 0; j < enemyOptions.length; j++){
                    enemyOptions[j].childNodes[0].style.opacity = 0.2;
                    
                    }
            }
            
            

            function inimigoJogar() {
                let rand = Math.floor(Math.random()*3);

                const enemyOptions = document.querySelectorAll('.enemy-options div');
                resetInimigo();

                for(var j = 0; j < enemyOptions.length; j++){
                    if(j == rand){
                        enemyOptions[j].childNodes[0].style.opacity = 1;
                        inimigoOpt = enemyOptions[j].childNodes[0].getAttribute('opt');
                    }
                }

                validarVitoria();

               

            }

            

            function resetOpacityPlayer(){
                for(var j = 0; j < elementos.length; j++){
                    elementos[j].style.opacity=0.2;
                }
            }
            


            for(var j = 0; j < elementos.length; j++){
                elementos[j].addEventListener('click',function(t){
                    resetOpacityPlayer();
                    t.target.style.opacity = 1;
                    playerOpt = t.target.getAttribute('opt');
                    
                    inimigoJogar()
                });
            }

      /*  vencedor.getAnimations.animate([
                //keyframes
                5%{backgroundColor: 'red'},
                   { color: 'black'},
                20%{backgroundColor: 'purple'},
                    {color: 'brown'},
                40%{backgroundColor: 'yellow'},
                    { color: 'purple'},
                60%{backgroundColor: 'green'},
                   { color: 'yellow'},
                80%{backgroundColor: 'aquamarine'},
                   { color: 'green'},
                100%{backgroundColor: 'orange'},
                    {color: 'aquamarine'}
            ],{
                //OPÇÕES DE TEMPO
                duration: 3000,
                iterations: Infinity,
                
                easing: "linear"
            });
*/
