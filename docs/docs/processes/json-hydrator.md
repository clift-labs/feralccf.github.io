---
sidebar_position: 2
title: JSON Hydrator
---

The JSON Hydrator is an object that converts a JSON document into a runnable process. The 
JSON document must conform to a schema that the loader can understand and build nodes 
and connect with edges.

:::tip

Use the [**`ProcessJsonHydrator`**](https://github.com/cybermantix/feral-core/blob/master/src/Process/ProcessJsonHydrator.php) 
class to convert a JSON document to a [**`Process`**](https://github.com/cybermantix/feral-core/blob/master/src/Process/Process.php) object.
:::

## Example: Simple Math
```json

{
  "schema_version": 1,
  "key": "simple_math",
  "version": 1,
  "context": {
    "message": "This is a simple example of stringing nodes together."
  },
  "nodes": [
    {
      "key": "start",
      "description": "The starting node",
      "catalog_node_key": "start",
      "configuration": {},
      "edges": {
        "ok": "set_left"
      }
    },
    {
      "key": "set_left",
      "description": "Set the left variable to '1'",
      "catalog_node_key": "set_context_value",
      "configuration": {
        "value": "3",
        "context_path": "left",
        "value_type": "int"
      },
      "edges": {
        "ok": "set_right"
      }
    },
    {
      "key": "set_right",
      "description": "Set the right variable to '1'",
      "catalog_node_key": "set_context_value",
      "configuration": {
        "value": "4",
        "context_path": "right",
        "value_type": "int"
      },
      "edges": {
        "ok": "add"
      }
    },
    {
      "key": "add",
      "description": "Check if the value is greater than zero",
      "catalog_node_key": "add",
      "configuration": {
        "x_context_path": "left",
        "y_context_path": "right",
        "result_context_path": "result"
      },
      "edges":  {
        "ok": "info"
      }
    },
    {
      "key": "info",
      "description": "Log a statement",
      "catalog_node_key": "log_info",
      "configuration": {
        "message": "The constants are '{left}' and '{right}'. The results of the calculation is {result}"
      },
      "edges": {
        "ok": "stop"
      }
    },
    {
      "key": "stop",
      "description": "Stop",
      "catalog_node_key": "stop",
      "configuration": {},
      "edges": {}
    }
  ]
}


```
