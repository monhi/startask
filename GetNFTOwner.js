const axios = require('axios');

// Function to get the owner of an NFT in the Bored Ape Yacht Club collection
async function getNFTOwner(tokenId) {
    try {
        const baycContractAddress = "0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d";
        const apiEndpoint = `https://api.opensea.io/api/v1/asset/${baycContractAddress}/${tokenId}/`;

        const response = await axios.get(apiEndpoint);
        const data = response.data;

        if (data && data.owner) {
            const ownerAddress = data.owner.address;
            console.log(`Owner of NFT #${tokenId} in Bored Ape Yacht Club collection: ${ownerAddress}`);
        } else {
            console.log(`NFT #${tokenId} not found or ownership data unavailable.`);
        }
    } catch (error) {
        console.error('Error fetching NFT owner:', error.message);
    }
}

// Usage example: Replace <TOKEN_ID> with the ID of the NFT you want to look up
const tokenIdToLookup = "<TOKEN_ID>";
getNFTOwner(tokenIdToLookup);
