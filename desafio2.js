let balancePlayer = playerWinnerBalance(150, 52);
let rankPlayer = matchRank(balancePlayer);

console.log(`O herói tem saldo de ${balancePlayer} e está no nível de ${rankPlayer}`);



function matchRank(winPlayer) {
    let levelRank = "";
    if(winPlayer < 10) {
      levelRank = "Ferro";
    }
    else if(winPlayer > 10 && winPlayer <= 20) {
      levelRank = "Bronze";
    }
    else if(winPlayer > 20 && winPlayer <= 50) {
      levelRank = "Prata";
    }
    else if(winPlayer > 50 && winPlayer <= 80) {
      levelRank = "Ouro";
    }
    else if(winPlayer > 80 && winPlayer <= 90) {
      levelRank = "Diamante";
    }
    else if(winPlayer > 90 && winPlayer <= 100) {
      levelRank = "Lendário";
    }
    else {
      levelRank = "Imortal";
    }
    return levelRank;
}





function playerWinnerBalance(victories, loses) {
  let result = victories - loses;
  if(result < 0) {
    result = 0;
  }

  return result;
}