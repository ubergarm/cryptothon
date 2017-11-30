pragma solidity ^0.4.16;

import "ds-test/test.sol";

import "./Src.sol";

contract SrcTest is DSTest {
    Src src;

    function setUp() public {
        src = new Src();
    }

    function testFail_basic_sanity() public {
        assertTrue(false);
    }

    function test_basic_sanity() public {
        assertTrue(true);
    }
}
