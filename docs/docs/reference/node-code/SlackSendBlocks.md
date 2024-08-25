---
title: slack_send_blocks
tags:
- Category:Flow
- Package:Slack
---

Sned one to many blocks to a slack channel.

## Key
`slack_section_block_builder`

## Configuration Keys:
* `webhook` - The URL for the webhook
* `blocks` - A delimited set of paths that contain the blocks to be sent to the slack channel

## Results
* `ok` - The function has been run

## Process Method
```php
 public function process(ContextInterface $context): ResultInterface
    {
        $url = $this->getConfigurationValue(self::CNF_WEBHOOK_URL);
        $blockPaths = $this->getArrayConfigurationValue(self::CNF_BLOCKS, []);

        $blocks = [];
        foreach($blockPaths as $path) {
            $blocks[] = $this->getStringConfigurationValue($path);
        }
        
        // SEND $blocks to the Webhook
        // curl
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

        return $this->result(
            ResultInterface::OK,
            'Sent "%n" blocks to the webhook.',
            [count($blocks)]
        );
    }
```