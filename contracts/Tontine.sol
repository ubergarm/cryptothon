pragma solidity ^0.4.17;

contract Tontine {

    uint public constant entryCapital = 3 ether;
    uint public currentMonth = 0;
    uint private maxMonths = 23;
    uint private maxMembers = 5;
    uint private numMembers;
    uint private payout;
    uint private t = 1;
    mapping(address => uint) public members;
    

    function Tontine() public
    {
    }
    
    function rollCall() external returns (bool)
    {
        // Don't accept roll call until enrollment is over
        if (t == 1) return false;

        // If the month (hour) has changed, advance and set new payout.
        // Otherwise, if we're in the enrollment period, return false.
        uint delta = (block.timestamp - t) / 1 hours;
        if (currentMonth < delta) {
            if (++currentMonth == maxMonths) selfdestruct(msg.sender);
            payout = (this.balance / (maxMonths + 1 - currentMonth)) / numMembers;
        }
        else if (currentMonth < 1) return false;

        // You're either dead or getting paid
        uint mm = members[msg.sender];
        if (mm == currentMonth) {
            // You're up-to-date, get paid
            members[msg.sender] += 1;
            msg.sender.transfer(this.balance / maxMonths);
        }
        else if (mm < currentMonth) {
            // You died, fuck you!
            delete members[msg.sender];
            maxMembers--;
            numMembers--;
        }
        
        return true;
    }


    // This modifier requires a certain
    // fee being associated with a function call.
    // If the caller sent too much, he or she is
    // refunded, but only after the function body.
    // This was dangerous before Solidity version 0.4.0,
    // where it was possible to skip the part after `_;`.
    modifier costs(uint _amount) 
    {
        require(msg.value >= _amount);

        _;

        if (msg.value > _amount)
            msg.sender.transfer(msg.value - _amount);
    }
    

    function invest() external payable costs(entryCapital) returns(bool)
    {
        // assume only works if enough ether

        // Reject duplicates
        assert(members[msg.sender] > 0);

        // Determine if enrollment is over, then accept no more investments
        if (numMembers++ >= maxMembers) return false;
        if (numMembers == maxMembers) t = block.timestamp;
      
        members[msg.sender] = 1;
        
        return true;
    }

}
