contract BinaryFuture{

    struct Future{
        uint256 expires;
        uint256 buyIn;
        uint256 startValue;
        uint256 endValue;
        string query;
        address queryAddress;
        address long;
        address short;
        address winner;
        FuturesStage stage;
        uint256 finalValue;
    }

    enum FuturesStage{
        Unfilled,
        ReadyStart,
        ContractLive,
        ReadyEnd,
        ReadySettle
    }

    enum Positions{
        Long,
        Short
    }

    event Query(string queryString, address queryAddress);

    Future future;

    function BinaryFuture(
        uint256 expires,
        uint256 buyIn,
        string queryString,
        address queryAddress){

        future.expires = expires;
        future.buyIn = buyIn;
        future.stage = FuturesStage.Unfilled;
        future.query = queryString;
        future.queryAddress = queryAddress;
    }

    //take "long" or "short" position with msg.value == future.buyIn
    function fillPosition(uint256 position) public payable {
        if (Positions(position) == Positions.Short) {
            future.short = msg.sender;
        } else if (Positions(position) == Positions.Long) {
            future.long = msg.sender;
        }

        if (future.long != 0 && future.short != 0) {
            future.stage = FuturesStage.ReadyStart;
        }
    }

    //make query for future.startValue
    function startContract() public {
        queryOracle();
    }

    //make query for future.endValue
    function endContract() public {
        queryOracle();
    }

    //compare future.startValue with future.endValue, payout to and short proportionally
    function settleContract() public {
        if (future.stage == FuturesStage.ReadySettle) {
            future.finalValue =  future.endValue - future.startValue;
        } else {
            throw;
        }
    }

    //emit query event
    function queryOracle() internal {
        Query(future.query, future.queryAddress);
    }

    //handle oracle response
    function oracleCallback(uint256 response){
        if (future.stage == FuturesStage.ReadyStart) {
            future.startValue = response;
            future.stage = FuturesStage.ContractLive;
        } else if (future.stage == FuturesStage.ContractLive) {
            future.endValue = response;
            future.stage = FuturesStage.ReadySettle;
        } else {
            throw;
        }
    }

    //are positions unfilled =>Unfilled (0)
    //is contract ready to start ( make query for future.startValue) =>ReadyStart (1)
    //is contract startValue set and is yet to expire =>ContractLive (2)
    //is contract ready to end (make query for future.endValue) =>ReadyEnd (3)
    //is contract ready to settle payouts via future.startValue and future.endValue =>ReadySettled (4)
    function getStatus() constant returns(FuturesStage stage){
        return future.stage;
    }

    function getBuyIn() constant returns(uint256 buyIn){
        return future.buyIn;
    }

    function getWinner() constant returns(address winner){
        return future.winner;
    }

    function getLong() constant returns(address long){
        return future.long;
    }

    function getShort() constant returns(address short){
        return future.short;
    }

    function getExpires () returns(uint256 expires) {
        return future.expires;
    }

}
