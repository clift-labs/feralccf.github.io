---
sidebar_position: 5
title: start
tags:
- Category:Flow
- Package:Core
---

Start the process by returning the OK status.

## Key
`start`

## Configuration Keys:
_no configuration keys_

## Results
* `ok` - The message has been logged


## Process Method
```php
public function process(ContextInterface $context): ResultInterface
{
    return $this->result(ResultInterface::OK, 'Start processing.');
}
```