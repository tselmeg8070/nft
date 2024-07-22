async function main() {
	const TSELME42 = await ethers.getContractFactory("TSELME42");

	// Start deployment, returning a promise that resolves to a contract object
	const t42 = await TSELME42.deploy();
	console.log("Contract deployed to address:", t42.address);
 }

 main()
   .then(() => process.exit(0))
   .catch(error => {
	 console.error(error);
	 process.exit(1);
   });
