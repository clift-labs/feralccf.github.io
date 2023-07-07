---
sidebar_position: 6
title: Process Node
---

A ProcessNode is an instance of a catalog node. The ProcessNode is defined in the
process configuration and does not have a class file associated with it.

In this example, a process node is created which uses the cat_data catalog
node. No configuration is needed in this ProcessNode.
If the result from the NodeCode is ok, then move on to the info node.

```json
...
...
...
{
  "key": "api_data",
  "description": "Get Cat Data",
  "catalog_node_key": "cat_data",
  "configuration": {},
  "edges": {
    "ok": "info"
  }
},
...
```
        
## Key
The ProcessNode key is what maps the edges to each other. It must be unique
within the process.

## Description
The description of the ProcessNode for the process designer.

## Configuration
An object that maps key/value pairs to the NodeCode configuration. The ProcessNode instance must supply any required configuration data not supplied
by the CatalogNode or the NodeCode.

:::caution
Any configuration that matches the CatalogNode keys will be overwritten by
the CatalogNode configuration values.
:::

## Edges
The edges are a collection of connections between nodes. The key/value pair maps the 
node response to the next node for that response.

In this example, the true response from the evaluate node will process the context
and have the result `true` or `false`. If `true` the process will move to the `info_greater`
node. If `false`, the `info_less` node.
```json
...
...
...
{
  "key": "evaluate",
  "description": "Evaluate if the number is high",
  "catalog_node_key": "greater_than",
  "configuration": {
    "test_value": 0.5,
    "context_path": "_random"
  },
  "edges": {
    "true": "info_greater",
    "false": "info_less"
  }
},
...
...
...
```


