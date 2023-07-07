---
sidebar_position: 5
title: set_context_table
tags:
- Category:Data
- Package:Core
---

Set the value of a context key to a configured value. To set a deep reference the parent object|array must exist.
Set multiple values in the context using a table (associative array)

## Key
`set_context_table`

## Configuration Keys:
* `table`  - The associative array

## Results
* `ok` - The message has been logged

## Process Method
```php 
public function process(ContextInterface $context): ResultInterface
{
    $table = $this->getRequiredArrayConfigurationValue(self::TABLE);
    $contextPath = $this->getRequiredConfigurationValue(self::CONTEXT_PATH, '');
    if (!empty($contextPath)) {
        $contextPath .= DataPathReaderInterface::DEFAULT_DELIMITER;
    }
    foreach ($table as $key => $value) {
        $path = $contextPath . $key;
        $this->setValueInContext($path, $value, $context);
    }

    return $this->result(
        ResultInterface::OK,
        'Table of values set in the context.',
        []
    );
}
```