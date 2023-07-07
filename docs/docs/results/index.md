---
id: results-index
title: Results
---

When a NodeCode completes processing, it must return a 
[**`ResultInterface`**](https://github.com/cybermantix/feral-core/blob/master/src/Process/Result/ResultInterface.php)
object. This object contains two instance variables. 

In this code example from [**`LogNodeCode`**](https://github.com/cybermantix/feral-core/blob/master/src/Process/NodeCode/Data/LogNodeCode.php)
you can see the method returns the status of `ok` and a simple message.

```php
public function process(ContextInterface $context): ResultInterface
{
    $message = $this->getRequiredConfigurationValue(self::MESSAGE);
    $level = $this->getRequiredConfigurationValue(self::LEVEL, LogLevel::INFO);

    $message = $this->template->replace($message, $context->getAll());
    $this->logger->log($level, $message);

    return $this->result(
        ResultInterface::OK,
        'Logged the message to the logger.',
        []
    );
}

```

## Status
The `status` variable indicates 
to the process engine the computer readable value that was return. This is used with
the edges to link to the next Node.

:::tip
The [**`ResultInterface`**](https://github.com/cybermantix/feral-core/blob/master/src/Process/Result/ResultInterface.php)
intrface contains over a dozen commonly used response statuses like `ok`, `low`, `high`, `true`, `false`, and more.

:::

## Message
The result object can also contain an optional message that is human-readable to describe
the result returned from the NodeCode process method. These messages can be used in debugging
or telemetry to identify errant issues in a process.

## Result Descriptions
These objects are returned from the NodeCode objects to indicate the possible responses from
the NodeCode. These descriptions help UI tools and validation code manage the process creation.

## Result Description Traits
Since many of the NodeCode return common result statuses, the core package contains several
common results. [See this package](https://github.com/cybermantix/feral-core/tree/master/src/Process/NodeCode/Traits)
for all the result description traits. 

See this example of the `OkResultsTrait` being used.
```php 
class LogNodeCode implements NodeCodeInterface
{
    use NodeCodeMetaTrait,
        ResultsTrait,
        ConfigurationTrait,
        ConfigurationValueTrait,
        EmptyConfigurationDescriptionTrait,
        ContextValueTrait,
        OkResultsTrait;

    const KEY = 'log';

    const NAME = 'Log Message';
    ```