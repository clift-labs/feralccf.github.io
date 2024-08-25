---
sidebar_position: 5
title: http_data
tags:
- Category:Data
- Package:Core
---

Get Data using an HTTP request and store the results in a context variable.

## Key
`http_data`

## Configuration Keys:
* `context_path` - The path in the context to store the results

## Results
* `ok` - The arithmetic operation has been run and the results added to the context

## Process Method
```php 
public function process(ContextInterface $context): ResultInterface
{
    $contextPath = $this->getRequiredConfigurationValue(self::CONTEXT_PATH, self::DEFAULT_CONTEXT_PATH);
    $url = $this->getRequiredConfigurationValue(self::URL);

    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, $url);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_FOLLOWLOCATION, true);

    $response = curl_exec($ch);
    $responseCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
    if ($response === false) {
        throw new ProcessException(sprintf(
            'cURL error connecting to "%s". Error: %s',
            $url,
            curl_error($ch)
        ));
    }

    $this->setValueInContext($contextPath, $response, $context);
    curl_close($ch);
    return $this->result(
        ResultInterface::OK,
        'cURL call to "%s" which returned code "%u" with %u bytes.',
        [$url, $responseCode, strlen($response)]
    );
}
```