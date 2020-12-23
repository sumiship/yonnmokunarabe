'use strict'

{
  let i = 0;
  function setCoin(t){
    const coin = document.createElement('div');
      if (i%2===0) {
        coin.className = 'coin1';
      } else{
        coin.className = 'coin2';
      }
      document.getElementById(`1-${t}`).appendChild(coin);
      i += 1;
  }
  function set(){
    document.getElementById('1').addEventListener('click', ()=>{
      setCoin(1);
      which();
    })
    document.getElementById('2').addEventListener('click', ()=>{
      setCoin(2);
      which();
    })
    document.getElementById('3').addEventListener('click', ()=>{
      setCoin(3);
      which();
    })
    document.getElementById('4').addEventListener('click', ()=>{
      setCoin(4);
      which();
    })
    document.getElementById('5').addEventListener('click', ()=>{
      setCoin(5);
      which();
    })
    document.getElementById('6').addEventListener('click', ()=>{
      setCoin(6);
      which();
    })
    document.getElementById('7').addEventListener('click', ()=>{
      setCoin(7);
      which();
    })
    document.getElementById('8').addEventListener('click', ()=>{
      setCoin(8);
      which();
    })
    document.getElementById('9').addEventListener('click', ()=>{
      setCoin(9);
      which();
    })
    document.getElementById('10').addEventListener('click', ()=>{
      setCoin(10);
      which();
    })
    document.getElementById('11').addEventListener('click', ()=>{
      setCoin(11);
      which();
    })
    document.getElementById('12').addEventListener('click', ()=>{
      setCoin(12);
      which();
    })
    document.getElementById('13').addEventListener('click', ()=>{
      setCoin(13);
      which();
    })
    document.getElementById('14').addEventListener('click', ()=>{
      setCoin(14);
      which();
    })
    document.getElementById('15').addEventListener('click', ()=>{
      setCoin(15);
      which();
    })
    document.getElementById('16').addEventListener('click', ()=>{
      setCoin(16);
      which();
    })
    document.getElementById('17').addEventListener('click', ()=>{
      setCoin(17);
      which();
    })
    document.getElementById('18').addEventListener('click', ()=>{
      setCoin(18);
      which();
    })
    document.getElementById('19').addEventListener('click', ()=>{
      setCoin(19);
      which();
    })
    document.getElementById('20').addEventListener('click', ()=>{
      setCoin(20);
      which();
    })
    document.getElementById('21').addEventListener('click', ()=>{
      setCoin(21);
      which();
    })
    document.getElementById('22').addEventListener('click', ()=>{
      setCoin(22);
      which();
    })
    document.getElementById('23').addEventListener('click', ()=>{
      setCoin(23);
      which();
    })
    document.getElementById('24').addEventListener('click', ()=>{
      setCoin(24);
      which();
    })
  }
  function which(){
    const p = document.querySelector('h1');
    if (i%2===0) {
      document.getElementById('123').className = 'player1';
      p.textContent = 'Player1';
    } else{
      document.getElementById('123').className = 'player2';
      p.textContent = 'Player2';
    }
  }


  set();
}




