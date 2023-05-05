
function relogioDois(){/*Criando a função relogio()*/
            var data=new Date(); /*Aqui está sendo criado um objeto */
            var hor=data.getHours();
            var min=data.getMinutes();
            var seg=data.getSeconds();
            
            if(hor < 10){
                hor="0"+hor;
            }
            if(min < 10){
                min="0"+min;
            }
            if(seg < 10){
                seg="0"+seg;
            }
            
            var horas= hor + ":" + min + ":" + seg;/**/
            
            document.getElementById("relogio").value=horas;
        }

var timer=setInterval(relogioDois,1000); /*Aqui estamos chamando a função */
