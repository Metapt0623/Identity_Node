// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract Protocol176 is ERC20 {
    // 修正为 2026 年真实 Unix 时间戳
    uint256 public constant T1_GENESIS = 1735689600;   // 2026.1.1
    uint256 public constant T2_BROADCAST = 1738281600; // 2026.1.31
    uint256 public constant T3_DEPLOY = 1738368000;    // 2026.2.1
    uint256 public constant BURN_RATE = 2; 

    constructor(address pool, address ai, address tri, address wiki, address ops) 
        ERC20("MetaPToken", "TBB") 
    {
        // 修正为 17.6 亿
        uint256 total = 1760000000 * 10**18;
        
        // 按照 3:2:3:1:1 比例分发
        _mint(pool, total * 30 / 100);
        _mint(ai,   total * 20 / 100);
        _mint(tri,  total * 30 / 100);
        _mint(wiki, total * 10 / 100);
        _mint(ops,  total * 10 / 100);
    }

    // 2% 转账自动销毁逻辑
    function _update(address from, address to, uint256 value) internal virtual override {
        if (from != address(0) && to != address(0)) {
            uint256 burnAmount = (value * BURN_RATE) / 100;
            super._update(from, address(0), burnAmount); // 销毁入黑洞
            super._update(from, to, value - burnAmount); // 余额发送
        } else {
            super._update(from, to, value);
        }
    }
}
