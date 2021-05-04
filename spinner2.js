const spinner = ['\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\r|\n  '];
const animation = function(spinner) {
  let num = 100;
  for (const spin of spinner) {
    setTimeout(() => process.stdout.write(spin), num += 200);
  }
};
animation(spinner);
