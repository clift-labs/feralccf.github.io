---
sidebar_position: 5
title: set_context_value
tags:
- Category:Data
- Package:Core
---

Set the value of a context key to a configured value. To set a deep reference the parent object|array must exist.

## Key
`set_context_value`

## Configuration Keys:
*  `value`  - The value added to the context
*  `context_path` - The key in the context that will be set
*  `value_type` - The type of var to place into the context

### Value Type Options
* 'string'
* 'int'
* 'float'

## Results
* `ok` - The message has been logged

## Process Method
```php 
public function process(ContextInterface $context): ResultInterface
{
    $valueType = $this->getRequiredConfigurationValue(self::VALUE_TYPE, self::OPTION_STRING);
    $value = $this->getRequiredConfigurationValue(self::VALUE);
    $contextPath = $this->getRequiredConfigurationValue(self::CONTEXT_PATH);

    $value = match ($valueType) {
        self::OPTION_STRING => (string)$value,
        self::OPTION_INT => (int)$value,
        self::OPTION_FLOAT => (float)$value,
        default => throw new Exception(sprintf('Unknown type "%s".', $valueType)),
    };

    $this->setValueInContext($contextPath, $value, $context);

    return $this->result(
        ResultInterface::OK,
        'Set value in context path "%s".',
        [$contextPath]
    );
}
```