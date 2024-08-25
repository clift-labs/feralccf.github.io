---
sidebar_position: 5
title: slack-webhook
tags:
- Category:Data
- Package:Slack
---

Send a message to a slack webhook. The message must be in the context
and it's sent to the URL found in the webhook configuration value.

:::note
You can use the block builder to set blocks into the context
:::

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
    $contextPath = $this->getRequiredConfigurationValue(self::CONTEXT_PATH, self::DEFAULT_CONTEXT_PATH);
    $contextMessagePath = $this->getRequiredConfigurationValue(self::CONTEXT_MESSAGE_PATH, self::DEFAULT_CONTEXT_MESSAGE_PATH);
    $url = $this->getRequiredConfigurationValue(self::WEBHOOK_URL);
    $message = $this->getRequiredStringConfigurationValue($contextMessagePath);

    $ch = curl_init();
    curl_setopt($ch, CURLOPT_POST, true);
    curl_setopt($ch, CURLOPT_POSTFIELDS, $message);
    curl_setopt($ch, CURLOPT_HTTPHEADER, ['Content-Type: ' . self::CONTENT_TYPE]);
    curl_setopt($ch, CURLOPT_URL, $url);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_FOLLOWLOCATION, true);

    $response = curl_exec($ch);
    $responseCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
    if ($response === false) {
        throw new ProcessException(sprintf(
            'Slack Webhook error connecting to "%s". Error: %s',
            $url,
            curl_error($ch)
        ));
    }

    $this->setValueInContext($contextPath, $response, $context);
    curl_close($ch);
    return $this->result(
        ResultInterface::OK,
        'Slack Webhook call to "%s" which returned code "%u" with %u bytes.',
        [$url, $responseCode, strlen($response)]
    );
}
```