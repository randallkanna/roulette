var Roulette = artifacts.require('../Roulette.sol');

contract('Roulette', function(accounts) {
  var user1 = accounts[0];
  var user2 = accounts[1];
  var user3 = accounts[2];

  beforeEach(function() {
    return Roulette.new()
    .then(function(instance) {
      contract = instance;
    });
  });

  it("should assert true", function(done) {
    var roulette = Roulette.deployed();
    assert.isTrue(true);
    done();
  });

  it("should let a user deposit ether into the contract and input a charity", async function() {

  });
});

    // await contract.createRemittance(recipientAccount, puzzleSolution, { from: ownerAccount, value: sendAmount });
    //
    // var ownerAccountOriginalBalance = web3.eth.getBalance(ownerAccount).toNumber();
    //
    // let transaction = await contract.completeRemittance(puzzleSolution);
    //
    // var ownerAccountNewBalance = web3.eth.getBalance(ownerAccount).toNumber();
    // var tx = await web3.eth.getTransaction(transaction.tx);
    // var gasUsed = tx.gasPrice.mul(transaction.receipt.gasUsed).toNumber();
    //
    // assert.strictEqual(ownerAccountOriginalBalance - sendAmount - gasUsed, ownerAccountNewBalance, 'should withdraw from owne
