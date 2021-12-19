require("@nomiclabs/hardhat-waffle");
module.exports = {
  solidity: "0.7.5",
  networks: {
    polygon: {
      url: "https://rpc-mumbai.maticvigil.com/",
      accounts: ["ba6c513338ac6fa82631290d993957302783592c35e0b268c17c8e0579a43a12"],
    }, 
  }
}


