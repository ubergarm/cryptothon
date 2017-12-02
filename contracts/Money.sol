pragma solidity ^0.4.11;

contract MoneyMoneyMoneyMoney {

  uint private myFuckingMoney; // how much money this contract has accumulated.



  function MoneyMoneyMoneyMoney(uint initialFuckingMoney) {

    myFuckingMoney = initialFuckingMoney;

  }



  function takeMyMoney (uint amountOfFuckingMoney) {

    myFuckingMoney = myFuckingMoney + amountOfFuckingMoney;

  }



  function tellMeHowMuchFuckingMoneyYouHave () constant returns (uint) {

    return myFuckingMoney;

  }

}
