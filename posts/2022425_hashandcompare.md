---
    title: hash and compare
    description: How to set password hashed and compare the credential password and user password.
    image: js.png
    date: 2022-4-25
---

To use hash in nextjs project, need to import bcryptjs. Hash is used to create hashedPassword as you can see. Compare is used to compare the password and hashedPassword that already put in database.

```js
import { hash, compare } from "bcryptjs";

export async function hashedPassword(password){
       const hashedPassword = hash(password, 12);l
       return hashedPassword;
}
export async function verifyPassword(password, hashedPassword){
       const isValid = compare(password, hashedPassword);
       return isValid;
}
```

Click [here](https://next-auth.js.org/getting-started/rest-api) to learn more.