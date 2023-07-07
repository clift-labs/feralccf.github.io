---
sidebar_position: 5
title: log
tags:
- Category:Data
- Package:Core
---

Sent a message to the logs. The message can include token variables which will be replaced with values from the context.
This will log to the [`Psr\Log\LoggerInterface`](https://www.php-fig.org/psr/psr-3/) object injected into the constructor. You can log to 
any level found in `Psr\Log\LogLevel`

## Key
`log`

## Configuration Keys:
* `message` - The message to log
* `level` - the log level to use

### Level Options
See [**`LogLevel`**](https://github.com/php-fig/log/blob/master/src/LogLevel.php) for the PSR implementation
* emergency
* alert
* critical
* error
* warning
* notice
* info
* debug

## Results
* `ok` - The message has been logged

## Process Method
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