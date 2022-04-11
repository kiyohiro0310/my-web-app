---
title: Next.js
description: How to use getStaticProps() method in Next.js.
image: nextjs.jpeg
date: '2022-4-6'
---

getStaticProps() is the method to pre-render data before web pages show up. Usually, when it's necessary to show the pages quickly, this method is quite useful.

```js
export async function getStaticProps() {
    const data = fetchDataFunction();

    return {
        props: {
            data: data
        }
    }
}
```

Click [here](https://nextjs.org/docs/basic-features/data-fetching/get-static-props) to learn more.