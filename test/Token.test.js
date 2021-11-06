const Token = artifacts.require("./Token");

require("chai").use(require("chai-as-promised")).should();

// injects all the accounts from the ganache locally created blockchain
//contract("token", (accounts) => {
contract("token", ([deployer, receiver, sender]) => {
  let token;
  const name = "Blu Mun Token";
  const symbol = "BLMN";
  const decimals = "18";
  const totalSupply = "1000000000000000000000000";

  beforeEach(async () => {
    token = await Token.new();
  });

  describe("deployment", () => {
    it("tracks the name", async () => {
      const result = await token.name();
      result.should.equal(name);
    });

    it("tracks the symbol", async () => {
      const result = await token.symbol();
      result.should.equal(symbol);
    });

    it("tracks the decimals", async () => {
      const result = await token.decimals();
      result.toString().should.equal(decimals);
    });

    it("tracks the total supply", async () => {
      const result = await token.totalSupply();
      result.toString().should.equal(totalSupply);
    });

    it("assigns the total token supply to the deployer", async () => {
      //const result = await token.balanceOf(accounts[0]);
      const result = await token.balanceOf(deployer);
      result.toString().should.equal(totalSupply);
    });
  });

  describe("sending tokens", () => {
    it("transfers token balances", async () => {
      let balanceOf;
      balanceOf = await token.balanceOf(deployer);
      console.log("deployer balance before: ", balanceOf.toString());
      balanceOf = await token.balanceOf(receiver);
      console.log("recipient balance before: ", balanceOf.toString());
      let result;
      result = await token.transfer(receiver, 1000000000000000, {
        from: deployer,
      });
      ////////////////////////////////////////1000000000000000000000000
      balanceOf = await token.balanceOf(deployer);
      console.log("deployer balance after: ", balanceOf.toString());
      balanceOf = await token.balanceOf(receiver);
      console.log("recipient balance after: ", balanceOf.toString());
    });
  });
});
