---
id: feral-slack-package
title: Feral Slack Package
---

## An easy way to communicate with Slack

## SlackBlockBuilderNodeCode

`SlackBlockBuilderNodeCode` is a NodeCode within the Feral Slack Package, designed to streamline the process of building and managing Slack message blocks. It leverages the `BlockBuilder` utility to facilitate the creation of various Slack block elements based on the provided configuration and context.

## Overview

This class integrates closely with the Feral framework, utilizing traits and interfaces to ensure consistency and compatibility across different components. It serves as a bridge between your application and Slack, allowing you to create complex Slack messages with ease.

## Usage

To use `SlackBlockBuilderNodeCode`, instantiate the class and call the `process` method with the appropriate context. This method takes care of interpreting the configuration and context, directing the flow to various Slack block building functions accordingly.

```php
$slackBlockBuilderNodeCode = new SlackBlockBuilderNodeCode($blockBuilder);
$result = $slackBlockBuilderNodeCode->process($context);
```

## Methods

### `__construct`

```php
public function __construct(
    protected BlockBuilder $builder,
    DataPathReaderInterface $dataPathReader = null,
    DataPathWriterInterface $dataPathWriter = null,
    ConfigurationManager $configurationManager = null
)
```

#### Parameters

- `BlockBuilder $builder`: An instance of `BlockBuilder` used for constructing Slack message blocks.
- `DataPathReaderInterface $dataPathReader`: (Optional) A utility for reading data from paths.
- `DataPathWriterInterface $dataPathWriter`: (Optional) A utility for writing data to paths.
- `ConfigurationManager $configurationManager`: (Optional) Manages configuration settings.

### `process`

```php
public function process(ContextInterface $context): ResultInterface
```

Processes the provided context, building Slack message blocks based on the configuration and context data.

#### Parameters

- `ContextInterface $context`: The context containing data and settings for the current process.

#### Returns

- `ResultInterface`: The result of the processing, indicating success or failure, along with any relevant messages or data.

## Constants

This class defines various constants for internal use, including keys for configuration settings, context paths, and Slack block function identifiers.

Examples include:
- `KEY`: A unique key identifying this node code.
- `NAME`: A human-readable name for this node code.
- `DESCRIPTION`: A description of what this node code does.
- `CNF_FUNCTION`: Key for accessing the function setting in the configuration.
- `CNF_OPTIONS`: Key for accessing the options setting in the configuration.

## Exceptions

The `process` method may throw a `SlackBlockException` if an invalid function is provided in the configuration.

## SlackPostWebhookNodeCode

`SlackPostWebhookNodeCode` is a node code within the Feral Slack Package, responsible for sending messages to a Slack channel via a Slack webhook. It utilizes PHP's cURL functions to make HTTP POST requests.

## Description

Slack provides a webhook system that allows external sources to post messages directly to a Slack channel. This class interfaces with such a webhook, facilitating the sending of messages from your application to your Slack workspace.

## Usage

To use this class, you need to include it in your project, instantiate it, and then call its `process` method, passing in the necessary context.

## Configuration

The class requires several configuration parameters to be set, either during instantiation or before calling the `process` method:

### Configuration Parameters

- **context_path**: The context path where the response from the Slack webhook will be stored. Default is `_results`.
- **context_message_path**: The path within the context where the message to be sent to Slack is stored. Default is `slack_message`.
- **webhook_url**: The URL of the Slack webhook.

### Configuration Descriptions

- **Context Message Path**: The path to the message that will be sent to the Slack webhook.
- **URL**: The URL of the Slack webhook.

## Methods

### `__construct`

The constructor method initializes the class and sets up the configuration manager and data path reader/writer.

### `getConfigurationDescriptions`

Returns an array of configuration descriptions, providing information on the configuration parameters required by this class.

### `process`

This is the main method of the class, responsible for sending the message to the Slack webhook.

- It first retrieves the required configuration values.
- Then, it sets up a cURL session to send a POST request to the Slack webhook URL, with the message formatted in JSON.
- After executing the cURL session, it stores the response in the specified context path.
- Finally, it closes the cURL session and returns a result object, indicating the success or failure of the operation.

## Exceptions

If the cURL session fails, a `ProcessException` is thrown, providing information about the error that occurred.

## Result

Upon successful execution, the method returns a result object with a status of `OK`, and additional information about the HTTP request and response.

## Example

To utilize this class, ensure that your Slack workspace is set up to receive incoming webhooks, and that you have the appropriate webhook URL.

```php
use Feral\Slack\Process\NodeCode\SlackPostWebhookNodeCode;

$slackNode = new SlackPostWebhookNodeCode();
$context = ... // initialize your context here
$result = $slackNode->process($context);
```

Make sure to replace the `...` with the actual implementation of your context, and configure the necessary parameters before calling the `process` method.

## SlackProcessSlashCommandNodeCode

`SlackProcessSlashCommandNodeCode` is a part of Feral's code composition framework specifically designed to process Slack slash commands. This class enables your PHP application to handle slash command requests from Slack, parse the incoming data, and store relevant information in the application context for further use.

## Namespace and Dependencies
```php
namespace Feral\Slack\Process\NodeCode;

use Feral\Core\Process\Configuration\ConfigurationManager;
use Feral\Core\Process\Context\ContextInterface;
... (Other dependencies)
use Feral\Slack\Utility\Slack\SlashCommandInput;
```

## Description
When a Slack slash command is invoked, Slack sends a POST request to a configured endpoint with detailed information about the command. This class processes that POST data, verifies its integrity, extracts necessary information, and stores it in the application context.

### Important Note on Token Verification
This class expects a verification token to ensure that the request is legitimately being sent by Slack. However, Slack recommends using signed secrets for verification instead of verification tokens due to security reasons. Make sure to handle this part carefully to maintain the integrity and security of your application.

## Class Definition
```php
class SlackProcessSlashCommandNodeCode implements NodeCodeInterface
{
    ... (Use Traits)
    
    const KEY = 'process_slash_command';
    const NAME = 'Slack Process the input from ';
    const DESCRIPTION = 'Send a message to a slack webhook.';
    ... (Other Constants)
    
    ... (Constructor and Method Definitions)
}
```

## Constants
- `KEY`: Unique identifier for the NodeCode.
- `NAME`: A descriptive name for the NodeCode.
- `DESCRIPTION`: Description of what the NodeCode does.
- `SETTER`, `DCNF_CTX_INPUT`, `DCNF_CTX_TEXT`, `DCNF_CTX_DATA`, `CNF_CTX_INPUT`, `CNF_CTX_TEXT`, `CNF_CTX_DATA`, `CNF_TOKEN`: Configuration and context-related constants.

## Configuration
This class can be configured using the following options:

1. **Input Path** (`CNF_CTX_INPUT`): The context path where the POST body from Slack is found.
2. **Message Path** (`CNF_CTX_TEXT`): The context path where the extracted message will be stored.
3. **Data Path** (`CNF_CTX_DATA`): The context path where the processed data object will be stored.
4. **Token** (`CNF_TOKEN`): The secret token provided by Slack when the command was registered.

## Process Method
The `process` method performs the following actions:

1. Retrieves configuration values and input data from the context.
2. Parses the input data into an associative array.
3. Verifies the token if provided.
4. Checks for required fields in the input data.
5. Converts the input data into a `SlashCommandInput` object.
6. Stores the message and the data object in the context.

### Exceptions
- `MissingConfigurationValueException`: Thrown if required configuration values are missing.
- `UnknownTypeException`: Thrown if there are issues with type handling.
- `ProcessException`: Thrown if there are issues with processing the slash command, such as missing required fields or token verification failure.

## Usage Example
To use `SlackProcessSlashCommandNodeCode`, ensure that you have an instance of `ContextInterface` prepared with the Slack POST data, and the required configuration values are set. Then, instantiate the class and call the `process` method:

```php
$context = ...; // An instance of ContextInterface with Slack POST data
$slackNodeCode = new SlackProcessSlashCommandNodeCode();
$result = $slackNodeCode->process($context);
```

This will process the Slack slash command, verify the token, extract the message and other information, and store them in the specified paths in the context.

[GitHub](https://github.com/cybermantix/feral-slack)