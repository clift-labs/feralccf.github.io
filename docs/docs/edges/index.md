---
id: edges-index
title: Edges
---

Edges connect nodes together. Each node can have one to many results based on what's
returned from the `NodeCode`. 

In this example NODE_A has 6 edges which connect NODE_A to nodes NODE_B...NODE_G based on
results of NODE_A. This example uses shorthand for comparing two variables. The shorthand
for `gt` is Greater Than. The shorthand for `gte` is Greater Than or Equal. You get the
picture.

```mermaid
graph LR;
    NODE_A-->|gt|NODE_B;
    NODE_A-->|gte|NODE_C;
    NODE_A-->|lt|NODE_D;
    NODE_A-->|lte|NODE_E;
    NODE_A-->|eq|NODE_F;
    NODE_A-->|not|NODE_G;
    NODE_B-->|ok|NODE_X;
    NODE_C-->|ok|NODE_X;
    NODE_D-->|ok|NODE_X;
    NODE_E-->|ok|NODE_X;
    NODE_F-->|ok|NODE_X;
    NODE_G-->|ok|NODE_X;
```

## What if
What if a NodeCode result doesn't map to an edge. This is an invalid process and an error
should be thrown during validation.