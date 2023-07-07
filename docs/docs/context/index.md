---
id: context-index
title: Context
---

The context is a set of data that is passed into the process at the start. Then each
Node the Process Engine processes the context is passed to the process method. The 
context must implement the [**`ContextInterface`**](https://github.com/cybermantix/feral-core/blob/master/src/Process/Context/ContextInterface.php)
interface. The data stored in the context uses a key to store the data. When adding
data to the Context, use the set method.

:::tip

Suggestions for the Context key
* Use lower case
* Use snake case (one_two_three)
:::

To get data from the Context, you can use the get method which can return any 
value or you can use one of the many helper method which type the data and 
will throw an error if the value stored is incorrect. See getInt, getFloat,
getString, getArray, and getObject in the ContextInterface.

The [**`Context`**](https://github.com/cybermantix/feral-core/blob/master/src/Process/Context/Context.php)
class is a default implementation of the ContextInterface and uses a simple
associative array to store the data. If you code requires a sophisticted data
storage and retrieval, like using Redis, then you can make your own context
and implement the ContextInterface.

To make live easier in your NodeCode, you can use the
[**`ContextValueTrait`**](https://github.com/cybermantix/feral-core/blob/master/src/Process/NodeCode/Traits/ContextValueTrait.php)
to manage deep values like objects and multi-dimensional arrays. This example from [**`CounterNodeCode`**](https://github.com/cybermantix/feral-core/blob/master/src/Process/NodeCode/Data/CounterNodeCode.php)
uses the ContextValueTrait and the getValueFromContext method.

There is also a [**`ContextMutationTrait`**](https://github.com/cybermantix/feral-core/blob/master/src/Process/NodeCode/Traits/ContextMutationTrait.php)
to modify the context and set values into the context allowing for deep paths.


```php 
class CounterNodeCode implements NodeCodeInterface
{
    use NodeCodeMetaTrait,
        ResultsTrait,
        ConfigurationTrait,
        ConfigurationValueTrait,
        EmptyConfigurationDescriptionTrait,
        ContextValueTrait,
        ContextMutationTrait,
        OkResultsTrait;

    const DEFAULT_CONTEXT_PATH = '_counter';
    ...
    ...
    ...
public function process(ContextInterface $context): ResultInterface
{
    $contextPath = $this->getRequiredConfigurationValue(self::CONTEXT_PATH, self::DEFAULT_CONTEXT_PATH);
    $counter = $this->getValueFromContext($contextPath, $context);
    if (!$counter) {
        $counter = 0;
    }
    $counter++;
    $this->setValueInContext($contextPath, $counter, $context);

    return $this->result(
        ResultInterface::OK,
        'Changed the counter to %u.',
        [$counter]
    );
}
```