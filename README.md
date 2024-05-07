# Startask

This is a sample project to use the facilities that `thegraph.com` provides to process and show NFT data in the `Bored Ape Yacht Club` 
I have to fill all the contents of the `subgraph.yaml` file to point to the `BAYC` contract on the `Ethereum` network.

In the `src\mapping.ts` all the necessary codes are available to implement the `handleTransfer` and `handleMetadata` functions which create necessary tokens to maintain the information of BAYC NFTs.

# Compilation and deployment

To compile and deploy the project, we have to create a subgraph in `thegraph.com` and based on the instructions compile and deploy our project.
Sample instructions are like the following:

npm install -g @graphprotocol/graph-cli
graph init --studio `subgraph_name`
graph auth --studio `authentication token for the subgraph`
cd `subgraph_name`
graph codegen 
graph build
graph deploy --studio `subgraph_name`


# Points
I have to use `file data sources` instead of `ipfs.cat` and `ipfs.map` because newer APIs of the graph do not support these 2 functions.

`https://thegraph.com/docs/en/developing/creating-a-subgraph/#file-data-sources`








