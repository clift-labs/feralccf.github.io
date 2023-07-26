---
sidebar_position: 5
title: random
tags:
- Category:Data
- Package:Core
---

Create a random number between 0 and 1

## Key
`random`

## Configuration Keys:
* `context_path` - The context path to store the random number

## Results
* `ok` - The message has been logged

## Process Method
```php 
public function process(ContextInterface $context): ResultInterface
{
    $path = $this->getRequiredConfigurationValue(self::CONTEXT_PATH);
    $value = mt_rand(0, mt_getrandmax()) / mt_getrandmax();
    $this->setValueInContext($path, $value, $context);

    return $this->result(
        ResultInterface::OK,
        'Created the random value "%s".',
        [$value]
    );
}
```