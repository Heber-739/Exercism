export class DiffieHellman {
  p = null;
  g = null;
  constructor(p, g) {
    if (p < 1 || g < 1) {
      throw new Error("arguments are out of range");
    }
    let prim = (a) => {
      for (let i = 2; i < a; i++) {
        if (p % i == 0) {
          return true;
        }
      }
      return false;
    };
    if (prim(p) && prim(g)) {
      throw new Error("arguments are not prime");
    } else {
      this.p = p;
      this.g = g;
    }
  }

  getPublicKey(privateKey) {
    if (privateKey <= 1 || privateKey >= this.p) {
      throw new Error("arguments invalid");
    }
    return this.g ** privateKey % this.p;
  }

  getSecret(theirPublicKey, myPrivateKey) {
    return theirPublicKey ** myPrivateKey % this.p;
  }
}

const pr = new DiffieHellman(23, 5);
console.log(pr.getPublicKey("p + 1"));
console.log(pr.getSecret(19, 6));

/* A^2 mod C = (A * A) mod C = ((A mod C) * (A mod C)) mod C */
console.log(5 ** 6 % 23);
console.log(
  ((5 % 23) * (5 % 23) * (5 % 23) * (5 % 23) * (5 % 23) * (5 % 23)) % 23
);
