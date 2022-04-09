---
title: Next.js and TypeScript
description: How to set props in tsx
image: typescript.jpeg
date: '2022-4-7'
---

I learned how to set props in tsx.

Before I create export function, I need to create interface first.

```tsx
interface TypeProps {
    value1: string;
    value2: number;
    value3: boolean;
}
const NextTsx: NextPage<TypeProps> = (props) => {
    const { value1, value2, value3 } = props;

    return (
        <Fragment>
            <h1>{value1}</h1>
            <h2>{value2}</h2>
            <h3>{value3}</h3>
        </Fragment>
    )
}

export default NextTsx;
```

Click [here]('https://nextjs.org/docs/basic-features/typescript') to learn more