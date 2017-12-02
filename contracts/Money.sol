pragma solidity ^0.4.17;

contract Money {

  uint private myFuckingMoney; // how much money this contract has accumulated.



  function Money(uint initialFuckingMoney) public {

    myFuckingMoney = initialFuckingMoney;

  }



  function put (uint amountOfFuckingMoney) public {

    myFuckingMoney = myFuckingMoney + amountOfFuckingMoney;

  }



  function get () public constant returns (uint) {

    return myFuckingMoney;

  }

}
