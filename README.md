# wallet-address-validator

Simple wallet address validator for validating Bitcoin and other altcoins addresses in **Node.js and browser**.

[![Build Status](https://travis-ci.org/christsim/multicoin-address-validator.svg?branch=master)](https://travis-ci.org/christsim/multicoin-address-validator)

Forked from [ryanralph/altcoin-address](https://github.com/ryanralph/altcoin-address).

**File size is ~17 kB (minifed and gzipped)**.

## Installation

### NPM

```
npm install multicoin-address-validator
```

### Browser

```html
<script src="wallet-address-validator.min.js"></script>
```

## API

##### validate (address [, currency = 'bitcoin'[, networkType = 'prod']])

###### Parameters

-   address - Wallet address to validate.
-   currency - Optional. Currency name or symbol, e.g. `'bitcoin'` (default), `'litecoin'` or `'LTC'`
-   networkType - Optional. Use `'prod'` (default) to enforce standard address, `'testnet'` to enforce testnet address and `'both'` to enforce nothing.

> Returns true if the address (string) is a valid wallet address for the crypto currency specified, see below for supported currencies.

### Supported crypto currencies

-   0x/zrx `'0x'` or `'zrx'`
-   Aave Coin/aave `'Aave Coin'` or `'aave'`
-   Alkemi Network DAO/alk `'Alkemi Network DAO'` or `'alk'`
-   Alpha Finance Lab/alpha `'Alpha Finance Lab'` or `'alpha'`
-   Ankr/ankr `'Ankr'` or `'ankr'`
-   Aragon/ant `'Aragon'` or `'ant'`
-   Augur/rep `'Augur'` or `'rep'`
-   AuroraCoin/aur `'AuroraCoin'` or `'aur'`
-   Axie Infinity/axs `'Axie Infinity'` or `'axs'`
-   Balancer/bal `'Balancer'` or `'bal'`
-   Bancor/bnt `'Bancor'` or `'bnt'`
-   Band Protocol/band `'Band Protocol'` or `'band'`
-   Bankex/bkx `'Bankex'` or `'bkx'`
-   Basic Attention Token/bat `'Basic Attention Token'` or `'bat'`
-   BeaverCoin/bvc `'BeaverCoin'` or `'bvc'`
-   Binance Coin/bnb `'Binance Coin'` or `'bnb'`
-   BioCoin/bio `'BioCoin'` or `'bio'`
-   Bitcoin/btc `'Bitcoin'` or `'btc'`
-   Bitcoin SV/bsv `'Bitcoin SV'` or `'bsv'`
-   BitcoinCash/bch `'BitcoinCash'` or `'bch'`
-   BitcoinGold/btg `'BitcoinGold'` or `'btg'`
-   BitcoinPrivate/btcp `'BitcoinPrivate'` or `'btcp'`
-   BitcoinZ/btcz `'BitcoinZ'` or `'btcz'`
-   BitTorrent/btt `'BitTorrent'` or `'btt'`
-   BTU Protocol/btu `'BTU Protocol'` or `'btu'`
-   C8Plus/c8p `'C8Plus'` or `'c8p'`
-   Callisto/clo `'Callisto'` or `'clo'`
-   Cardano/ada `'Cardano'` or `'ada'`
-   Cartesi/ctsi `'Cartesi'` or `'ctsi'`
-   Chainlink/link `'Chainlink'` or `'link'`
-   Chiliz/chz `'Chiliz'` or `'chz'`
-   Civic/cvc `'Civic'` or `'cvc'`
-   Compound/comp `'Compound'` or `'comp'`
-   COTI/coti `'COTI'` or `'coti'`
-   Cred/lba `'Cred'` or `'lba'`
-   Crypto Gaming United/cgu `'Crypto Gaming United'` or `'cgu'`
-   Crypto.com Coin/cro `'Crypto.com Coin'` or `'cro'`
-   Dash/dash `'Dash'` or `'dash'`
-   Decred/dcr `'Decred'` or `'dcr'`
-   DigiByte/dgb `'DigiByte'` or `'dgb'`
-   District0x/dnt `'District0x'` or `'dnt'`
-   DogeCoin/doge `'DogeCoin'` or `'doge'`
-   Elrond/egld `'Elrond'` or `'egld'`
-   Enjin Coin/enj `'Enjin Coin'` or `'enj'`
-   EOS/eos `'EOS'` or `'eos'`
-   Ethereum/eth `'Ethereum'` or `'eth'`
-   EthereumClassic/etc `'EthereumClassic'` or `'etc'`
-   EtherZero/etz `'EtherZero'` or `'etz'`
-   Expanse/exp `'Expanse'` or `'exp'`
-   Fantom/ftm `'Fantom'` or `'ftm'`
-   Filecoin/fil `'Filecoin'` or `'fil'`
-   FreiCoin/frc `'FreiCoin'` or `'frc'`
-   GameCredits/game `'GameCredits'` or `'game'`
-   GarliCoin/grlc `'GarliCoin'` or `'grlc'`
-   Gnosis/gno `'Gnosis'` or `'gno'`
-   Golden Ratio Token/grt `'Golden Ratio Token'` or `'grt'`
-   Golem/gnt `'Golem'` or `'gnt'`
-   GuildFi/gf `'GuildFi'` or `'gf'`
-   HedgeTrade/hedg `'HedgeTrade'` or `'hedg'`
-   Hush/hush `'Hush'` or `'hush'`
-   Hydro Protocol/hot `'Hydro Protocol'` or `'hot'`
-   HyperSpace/xsc `'HyperSpace'` or `'xsc'`
-   iExec RLC/rlc `'iExec RLC'` or `'rlc'`
-   JUST/jst `'JUST'` or `'jst'`
-   Kava.io/kava `'Kava.io'` or `'kava'`
-   Komodo/kmd `'Komodo'` or `'kmd'`
-   Kyber Network Crystal v2/knc `'Kyber Network Crystal v2'` or `'knc'`
-   LBRY Credits/lbc `'LBRY Credits'` or `'lbc'`
-   Lisk/lsk `'Lisk'` or `'lsk'`
-   LiteCoin/ltc `'LiteCoin'` or `'ltc'`
-   loki/loki `'loki'` or `'loki'`
-   Loom Network/loom `'Loom Network'` or `'loom'`
-   Loopring/lrc `'Loopring'` or `'lrc'`
-   Maker/mkr `'Maker'` or `'mkr'`
-   Matchpool/gup `'Matchpool'` or `'gup'`
-   MegaCoin/mec `'MegaCoin'` or `'mec'`
-   Melon/mln `'Melon'` or `'mln'`
-   Metal/mtl `'Metal'` or `'mtl'`
-   MonaCoin/mona `'MonaCoin'` or `'mona'`
-   Monero/xmr `'Monero'` or `'xmr'`
-   Multi-collateral DAI/dai `'Multi-collateral DAI'` or `'dai'`
-   NameCoin/nmc `'NameCoin'` or `'nmc'`
-   Nano/nano `'Nano'` or `'nano'`
-   Nem/xem `'Nem'` or `'xem'`
-   Neo/neo `'Neo'` or `'neo'`
-   NeoGas/gas `'NeoGas'` or `'gas'`
-   Numeraire/nmr `'Numeraire'` or `'nmr'`
-   Ocean Protocol/ocean `'Ocean Protocol'` or `'ocean'`
-   Odyssey/ocn `'Odyssey'` or `'ocn'`
-   OmiseGO/omg `'OmiseGO'` or `'omg'`
-   Ontology/ont `'Ontology'` or `'ont'`
-   Origin Protocol/ogn `'Origin Protocol'` or `'ogn'`
-   Paxos/pax `'Paxos'` or `'pax'`
-   PeerCoin/ppc `'PeerCoin'` or `'ppc'`
-   PIVX/pivx `'PIVX'` or `'pivx'`
-   Polymath/poly `'Polymath'` or `'poly'`
-   PrimeCoin/xpm `'PrimeCoin'` or `'xpm'`
-   ProtoShares/pts `'ProtoShares'` or `'pts'`
-   Qtum/qtum `'Qtum'` or `'qtum'`
-   Quant/qnt `'Quant'` or `'qnt'`
-   RaiBlocks/xrb `'RaiBlocks'` or `'xrb'`
-   Ripio Credit Network/rcn `'Ripio Credit Network'` or `'rcn'`
-   Ripple/xrp `'Ripple'` or `'xrp'`
-   Salt/salt `'Salt'` or `'salt'`
-   Serum/srm `'Serum'` or `'srm'`
-   Siacoin/sc `'Siacoin'` or `'sc'`
-   SIX/six `'SIX'` or `'six'`
-   Smooth Love Potion/slp `'Smooth Love Potion'` or `'slp'`
-   SnowGem/sng `'SnowGem'` or `'sng'`
-   Solana/sol `'Solana'` or `'sol'`
-   SolarCoin/slr `'SolarCoin'` or `'slr'`
-   SOLVE/solve `'SOLVE'` or `'solve'`
-   Spendcoin/spnd `'Spendcoin'` or `'spnd'`
-   Status/snt `'Status'` or `'snt'`
-   Stellar/xlm `'Stellar'` or `'xlm'`
-   Storj/storj `'Storj'` or `'storj'`
-   Storm/storm `'Storm'` or `'storm'`
-   SushiSwap/sushi `'SushiSwap'` or `'sushi'`
-   Swarm City/swt `'Swarm City'` or `'swt'`
-   Swipe/sxp `'Swipe'` or `'sxp'`
-   Synthetix Network/snx `'Synthetix Network'` or `'snx'`
-   TEMCO/temco `'TEMCO'` or `'temco'`
-   TenX/pay `'TenX'` or `'pay'`
-   Tether/usdt `'Tether'` or `'usdt'`
-   Tezos/xtz `'Tezos'` or `'xtz'`
-   The Sandbox/sand `'The Sandbox'` or `'sand'`
-   THORChain/rune `'THORChain'` or `'rune'`
-   Tron/trx `'Tron'` or `'trx'`
-   TrueUSD/tusd `'TrueUSD'` or `'tusd'`
-   UMA/uma `'UMA'` or `'uma'`
-   USDCoin/usdc `'USDCoin'` or `'usdc'`
-   Venus/xvs `'Venus'` or `'xvs'`
-   VertCoin/vtc `'VertCoin'` or `'vtc'`
-   Viberate/vib `'Viberate'` or `'vib'`
-   VoteCoin/vot `'VoteCoin'` or `'vot'`
-   Waltonchain/wtc `'Waltonchain'` or `'wtc'`
-   Waves/waves `'Waves'` or `'waves'`
-   WazirX/wrx `'WazirX'` or `'wrx'`
-   Wings/wings `'Wings'` or `'wings'`
-   Wonderland/time `'Wonderland'` or `'time'`
-   XAUD/xaud `'XAUD'` or `'xaud'`
-   yearn.finance/yfi `'yearn.finance'` or `'yfi'`
-   ZCash/zec `'ZCash'` or `'zec'`
-   ZClassic/zcl `'ZClassic'` or `'zcl'`
-   ZenCash/zen `'ZenCash'` or `'zen'`
-   ZipmexToken/zmt `'ZipmexToken'` or `'zmt'`

### Usage example

#### Node

```javascript
var WAValidator = require("multicoin-address-validator");

var valid = WAValidator.validate("1KFzzGtDdnq5hrwxXGjwVnKzRbvf8WVxck", "BTC");
if (valid) console.log("This is a valid address");
else console.log("Address INVALID");

// This will log 'This is a valid address' to the console.
```

```javascript
var WAValidator = require("multicoin-address-validator");

var valid = WAValidator.validate(
    "1KFzzGtDdnq5hrwxXGjwVnKzRbvf8WVxck",
    "litecoin",
    "testnet"
);
if (valid) console.log("This is a valid address");
else console.log("Address INVALID");

// As this is a invalid litecoin address 'Address INVALID' will be logged to console.
```

```javascript
var WAValidator = require("multicoin-address-validator");

var currency = WAValidator.findCurrency("xrp");
if (currency) console.log("This currency exists");
else console.log("Currency INVALID");

// As this is a valid currency symbol 'This currency exists' will be logged to console.
```

```javascript
var WAValidator = require("multicoin-address-validator");

var currency = WAValidator.findCurrency("random");
if (currency) console.log("This currency exists");
else console.log("Currency INVALID");

// As this is not a valid currency symbol 'Currency INVALID' will be logged to console.
```

#### Browser

```html
<script src="wallet-address-validator.min.js"></script>
```

```javascript
// WAValidator is exposed as a global (window.WAValidator)
var valid = WAValidator.validate(
    "1KFzzGtDdnq5hrwxXGjwVnKzRbvf8WVxck",
    "bitcoin"
);
if (valid) alert("This is a valid address");
else alert("Address INVALID");

// This should show a pop up with text 'This is a valid address'.
```
