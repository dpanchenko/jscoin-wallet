# jscoin

Wallet frontend application. Receiving nodes list from nodes pool manager and connecting to first one active node. Ask wallet number and show all transactions and balance for entered wallet. Allow to make make transactions from currently entered wallet to another one.

## Environment

`Node >= 8.11.2`

```
export DEBUG=jscoin*                              # debug information in console
export BACKEND_URL=http://localhost:8070          # http address of the jscoin-miner-pool(https://github.com/dpanchenko/
```

## Start

 - Clone or download this repository
``` bash
git clone
```

 - Enter your local directory, and install dependencies:

``` bash
npm i
```

## Commands

``` bash
# run server in development mode
npm start
```

``` bash
# run linter
npm run lint
```

``` bash
# run tests
npm test
```

## Docker

 - For start application inside docker container use command
``` bash
# the problem to correct using of wallet application in docker container is the necessity to setup jscoin-miner-pool address on docker build stage. because we need to build our frontend javascript bundle and inject BAKCEND url during the building process. so, existing image (dpanchenko/jscoin-wallet:latest) use http://docker.for.mac.localhost:8285 address as address of jscoin-miner-pool service. if you'll use default docker command from README files - it will work correctly, but if you'll change port and addresses configuration it require to rebuild jscoin-wallet image with another parameters.

# build command
docker build -t dpanchenko/jscoin-wallet \
  --build-arg backend_url="http://docker.for.mac.localhost:8285" \ # use custom jscoin-miner-pool service here
  --no-cache git@github.com:dpanchenko/jscoinWallet.git

# run command
docker run -d --name=jscoin-wallet \
       -p 8080:8080 \
       -e PORT="8080" \
       --restart=always dpanchenko/jscoin-wallet:latest
```


