const resolveHello = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("hello");
    }, 3000);
  });
};

const resolveWorld = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("world");
    }, 2000);
  });
};

//==========================================Sequential Execution======================================
const sequentialFn = async () => {
  const start = Date.now()
  const resHello = await resolveHello();
  console.log(resHello); //3 seconds
  const resWorld = await resolveWorld();
  console.log(resWorld); //extra 1 second
  const end = Date.now()
  console.log((end-start)/1000)
};
// sequentialFn()

//==========================================Concurrent Execution======================================
const concurrentFn = async () => {
  const start = Date.now();
  const resHello = resolveHello();
  const resWorld = resolveWorld();
  console.log(await resHello); //3 seconds
  console.log(await resWorld); //3seconds
  const end = Date.now();
  console.log((end - start) / 1000);
};
// concurrentFn();

const concurrentFn2 = async () => {
  const start = Date.now();
  const resHello = await resolveHello();
  const resWorld = await resolveWorld();
  console.log(resHello);
  console.log(resWorld);
  const end = Date.now();
  console.log((end - start) / 1000);
};
//concurrentFn2();

//==========================================Parallel Execution======================================

const paralleleFn=()=>{
    Promise.all([
        (async ()=>console.log(await resolveHello()))(),
        (async ()=>console.log(await resolveWorld()))()
    ])
    console.log('checking...')
}
// paralleleFn()

const parallelFn2=async ()=>{
    await Promise.all([
        (async ()=>console.log(await resolveHello()))(),
        (async ()=>console.log(await resolveWorld()))()
    ])
    console.log('checking...')
}
// parallelFn2()