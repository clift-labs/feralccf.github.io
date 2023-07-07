---
sidebar_position: 5
title: stop
tags:
- Category:Flow
- Package:Core
---

Stop the process by returning the stop status.

## Key
`stop`

## Configuration Keys:
_no configuration keys_

## Results
* `ok` - The message has been logged


## Process Method
```php
public function process(ContextInterface $context): ResultInterface
{
    return $this->result(ResultInterface::STOP, 'Stop processing.');
}
```