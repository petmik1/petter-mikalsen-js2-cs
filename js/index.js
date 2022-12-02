import storage from "./api/storage/index.mjs";
import variables from "./api/variables/index.mjs"
storage.save("test", [1,2,3]);
console.log(variables.url)