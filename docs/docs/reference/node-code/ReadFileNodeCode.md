---
sidebar_position: 5
title: read_file
tags:
- Category:Data
- Package:Core
---

Read the contents of a file into the context. The default maximum size is 1024^2 or 1048576 bytes.

## Key
`read_file`

## Configuration Keys:
* `context_path` - The context path to store the contents of the file
* `file` - The file to read
* `maximum_size` - The maximum size of the file

## Results
* `ok` - The message has been logged

## Process Method
```php 
public function process(ContextInterface $context): ResultInterface
{
    $filePath = $this->getRequiredConfigurationValue(self::FILE);
    $path = $this->getRequiredConfigurationValue(self::CONTEXT_PATH);
    $maximumSize = $this->getRequiredConfigurationValue(self::MAXIMUM_SIZE, self::DEFAULT_MAXIMUM_SIZE);

    if (!$this->fileWrapper->isFile($filePath)) {
        throw new \Exception(sprintf('File path "%s" does not exist.', $filePath));
    } elseif (!$this->fileWrapper->isReadable($filePath)) {
        throw new \Exception(sprintf('File path "%s" does not readable.', $filePath));
    } elseif ($maximumSize < $this->fileWrapper->getFilesize($filePath)) {
        throw new \Exception(sprintf('File "%s" is larger than the maximum filesize allowed "%u".', $filePath, $maximumSize));
    }

    $value = $this->fileWrapper->getFileContents($filePath);
    $this->setValueInContext($path, $value, $context);

    return $this->result(
        ResultInterface::OK,
        'Read "%u" characters from file "%s".',
        [strlen($value), $value]
    );
}
```