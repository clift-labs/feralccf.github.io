---
sidebar_position: 5
title: counter
tags:
- Category:Data
- Package:Core
---

Create a counter that ticks every pass through the node. The default context
path is `_counter` but can be changed in the configuration.

## Key
`counter`

## Configuration Keys:
* `context_path` - The path in the context to store the counter

## Results
* `ok` - The arithmetic operation has been run and the results added to the context

## Process Method
```php 
public function process(ContextInterface $context): ResultInterface
{
    $contextPath = $this->getRequiredConfigurationValue(self::CONTEXT_PATH, self::DEFAULT_CONTEXT_PATH);
    $counter = $this->getValueFromContext($contextPath, $context);
    if (!$counter) {
        $counter = 0;
    }
    $counter++;
    $this->setValueInContext($contextPath, $counter, $context);

    return $this->result(
        ResultInterface::OK,
        'Changed the counter to %u.',
        [$counter]
    );
}
```