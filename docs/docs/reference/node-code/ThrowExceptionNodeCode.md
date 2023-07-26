---
sidebar_position: 5
title: throw_exception
tags:
- Category:Flow
- Package:Core
---

If an error is received then convert the error into an exception. The message
can contain template variables which will be replaced by context values.

## Key
`throw_exception`

## Configuration Keys:
* message - The message to throw

## Results
_no results are returned_


## Process Method
```php
public function process(ContextInterface $context): ResultInterface
{
    $message = $this->getRequiredConfigurationValue(self::MESSAGE);
    $message = $this->template->replace($message, $context->getAll());
    throw new ProcessException($message);
}
```