---
sidebar_position: 5
title: calculation
tags:
- Category:Data
- Package:Core
---

A simple math node that can run arithmetic operations on data stored
in different context values and stores the result into a context
path.

## Key
`calculation`

## Configuration Keys:
* `x_context_path` - The path in the context to the left constant
* `y_context_path` - The path in the context to the right constant
* `result_context_path` - The path in the context to store the result
* `operation` - The path in the context to store the result

### Operation Values:
* add
* subtract
* multiply
* divide
* power

## Results
* `ok` - The arithmetic operation has been run and the results added to the context

## Process Method
```php
public function process(ContextInterface $context): ResultInterface
{
    $xPath = $this->getRequiredConfigurationValue(self::X_CONTEXT_PATH);
    $yPath = $this->getRequiredConfigurationValue(self::Y_CONTEXT_PATH);
    $operation = $this->getRequiredConfigurationValue(self::OPERATION);
    $resultPath = $this->getRequiredConfigurationValue(self::RESULT_PATH);
    $x = $this->getValueFromContext($xPath, $context);
    $y = $this->getValueFromContext($yPath, $context);
    $result = match($operation) {
        self::ADD => $x + $y,
        self::SUBTRACT => $x - $y,
        self::MULTIPLY => $x * $y,
        self::DIVIDE => $x / $y,
        self::POWER => pow($x, $y)
    };

    $this->setValueInContext($resultPath, $result, $context);

    return $this->result(
        ResultInterface::OK,
        'Applied operator "%s" path "%s" and "%s".',
        [$operation, $xPath, $yPath]
    );
}
```