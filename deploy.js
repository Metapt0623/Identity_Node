const hre = require("hardhat");

async function main() {
  // 这里的 Protocol176 必须对应你 .sol 文件里 'contract' 后面的名字
  const Contract = await hre.ethers.getContractFactory("Protocol176");
  const target = "0x3bfda04ad60df30a7adf66702c68b339f1c4d17f";

  console.log("正在生成 176 协议永久地址...");
  const token = await Contract.deploy(target, target, target, target, target);
  await token.waitForDeployment();

  console.log("------------------------------------------");
  console.log("部署成功！");
  console.log("你的永久合约地址:", await token.getAddress());
  console.log("------------------------------------------");
}

main().catch((error) => { console.error(error); process.exitCode = 1; });
