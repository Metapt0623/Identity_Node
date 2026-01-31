const hre = require("hardhat");

async function main() {
  // 1. 确保名字和 .sol 文件里的 contract 后面那个词一模一样
  const Contract = await hre.ethers.getContractFactory("Protocol176");
  
  const target = "0x3bfda04ad60df30a7adf66702c68b339f1c4d17f";

  console.log("正在广播 MetaPToken (TBB) 协议...");
  console.log("目标地址:", target);

  // 2. 传入五个出口参数，全部指向你的核心地址
  const token = await Contract.deploy(target, target, target, target, target);
  
  await token.waitForDeployment();

  const address = await token.getAddress();
  console.log("------------------------------------------");
  console.log("🎉 176协议发射成功！");
  console.log("永久合约地址:", address);
  console.log("资产：17.6 亿 TBB 已注入 0x3bfda...d17f");
  console.log("------------------------------------------");
}

main().catch((error) => {
  console.error("广播失败，原因:", error);
  process.exitCode = 1;
});
