function sleep(delay) {
  return new Promise((resolve) => setTimeout(resolve, delay));
}

async function main() {
  console.log("Start");
  await sleep(3000);
  console.log("End");
}

main()