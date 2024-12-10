# use-is-match-media

## example

```tsx
"use client";
import { useIsMatchMedia } from "use-is-match-media";

export default function Counter() {
  const isMatch = useIsMatchMedia("(min-width: 768px)");

  return <div>isMatch: {JSON.stringify(isMatch)}</div>;
}
```
