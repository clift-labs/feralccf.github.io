---
sidebar_position: 5
title: json_encode
tags:
- Category:Data
- Package:Core
---

Encode an array and store the resulting JSON string. The default get context path is `_results` and the
default results path is `_data`.

## Key
`json_encode`

## Configuration Keys:
* `context_path` - The path in the context to store the resulting array
* `get_context_path` - The path where the JSON string is found

## Results
* `ok` - The arithmetic operation has been run and the results added to the context

## Process Method
```php 
public function process(ContextInterface $context): ResultInterface
{
    $contextPath = $this->getRequiredConfigurationValue(self::CONTEXT_PATH, self::DEFAULT_CONTEXT_PATH);
    $getContextPath = $this->getRequiredConfigurationValue(self::GET_CONTEXT_PATH, self::DEFAULT_GET_CONTEXT_PATH);

    $jsonString = $this->getStringValueFromContext($getContextPath, $context);
    $arrayData = json_encode($jsonString, true);
    $this->setValueInContext(self::CONTEXT_PATH, $arrayData, $context);

    return $this->result(
        ResultInterface::OK,
        'Converted array data from path "%s" and placed in path "%s"',
        [$getContextPath, $contextPath]
    );
}
```
## Catalog Node Decorators
```php
[CatalogNodeDecorator(key:'json_encode', name: 'JSON Encode', group: 'Data', description: 'Convert an array to a JSON string.')]
``` 