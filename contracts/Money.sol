pragma solidity ^0.4.11;

contract MoneyMoneyMoneyMoney {

  uint private myFuckingMoney; // how much money this contract has accumulated.



  function MoneyMoneyMoneyMoney(uint initialFuckingMoney) public {

    myFuckingMoney = initialFuckingMoney;

  }



  function takeMyMoney (uint amountOfFuckingMoney) public {

    myFuckingMoney = myFuckingMoney + amountOfFuckingMoney;

  }



  function tellMeHowMuchFuckingMoneyYouHave () public constant returns (uint) {

    return myFuckingMoney;

  }

}
