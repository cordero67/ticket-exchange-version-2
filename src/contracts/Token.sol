// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

import "openzeppelin-solidity/contracts/math/SafeMath.sol";

contract Token {
    /*
        function transfer(address _to, uint256 _value) public returns (bool success)
        function transferFrom(address _from, address _to, uint256 _value) public returns (bool success)
        function approve(address _spender, uint256 _value) public returns (bool success)
        function allowance(address _owner, address _spender) public view returns (uint256 remaining)

        event Transfer(address indexed _from, address indexed _to, uint256 _value)
        event Approval(address indexed _owner, address indexed _spender, uint256 _value)
    */

    string public name = "Blu Mun Token";
    string public symbol = "BLMN";
    uint256 public decimals = 18;
    uint256 public totalSupply;

    mapping(address => uint256) public balanceOf;

    event Transfer(address indexed _from, address indexed _to, uint256 _value);

    constructor() public {
        totalSupply = 1000000 * (10**decimals);
        balanceOf[msg.sender] = totalSupply;
    }

    function transfer(address _to, uint256 _value)
        public
        payable
        returns (bool)
    {
        //require(_owner == msg.sender);
        require(
            balanceOf[msg.sender] >= _value,
            "insufficient funds available"
        );
        balanceOf[msg.sender] -= _value;
        //balanceOf[msg.sender] = balanceOf[msg.sender].sub(_value);
        balanceOf[_to] += _value;
        //balanceOf[_to] = balanceOf[_to].add(_value);
        emit Transfer(msg.sender, _to, _value);
        return true;
    }
}
