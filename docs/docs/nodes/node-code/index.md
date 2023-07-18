---
id: nodecode-index
title: NodeCode 
---

A Node is one element in a process that performs one action
in the process. The node can perform any work using information
in the configuration of the node instance, the context passed to
the node from the process, or a static action that does not
have a configuration or use data in the context.

There are three categories of nodes:
* flow nodes that returns a response based on information in the context that route the process to different branches.
* data nodes that perform context manipulation activities that add, remove, modify data stored in the context.
* work nodes that do perform work outside the process system

Each node has a type which is represented the fully qualified name
of the node class. Each node has a key which is unique in its process
and is used to navigate the flow of the process.

A node is called by the process using the run function that receives
the process Data as the sole parameter and returns a ProcessNodeResult
object containing information allowing the process to route upon a successful
run or error information when a process fails.

## NodeCode Configuration
NodeCode must include an array of configuration objects. Configuration Description
objects describe one configuration property and allows tools to be built to manage 
NodeCode objects. These configuration descriptions will be used in the Catalog Node and
Process Nodes. 

See [Node:Configuration](/docs/nodes#configuration) to see the configuration hierarchy. 

Types of Configuration values:
* [string](https://github.com/cybermantix/feral-core/blob/master/src/Process/NodeCode/Configuration/Description/StringConfigurationDescription.php) Use this configuration description for configuration values that are a boolean variable.
* [int](https://github.com/cybermantix/feral-core/blob/master/src/Process/NodeCode/Configuration/Description/IntConfigurationDescription.php) The type of the configuration is an int.
* [float](https://github.com/cybermantix/feral-core/blob/master/src/Process/NodeCode/Configuration/Description/FloatConfigurationDescription.php) The type of the configuration is a float.
* [boolean](https://github.com/cybermantix/feral-core/blob/master/src/Process/NodeCode/Configuration/Description/BooleanConfigurationDescription.php)  The type of the configuration is a boolean.
* [string_array](https://github.com/cybermantix/feral-core/blob/master/src/Process/NodeCode/Configuration/Description/StringArrayConfigurationDescription.php) The type of the configuration is an array of strings.
* [int_array](https://github.com/cybermantix/feral-core/blob/master/src/Process/NodeCode/Configuration/Description/IntArrayConfigurationDescription.php) The type of the configuration is an array of int.
* [float_array](https://github.com/cybermantix/feral-core/blob/master/src/Process/NodeCode/Configuration/Description/FloatArrayConfigurationDescription.php) The type of the configuration is an array of floats.

:::tip

The [**`NodeCodeInterface`**](https://github.com/cybermantix/feral-core/blob/master/src/Process/NodeCode/NodeCodeInterface.php) includes the public method `getConfigurationDescriptions`. This
method returns an array of [**`ConfigurationDescriptionInterface`**](https://github.com/cybermantix/feral-core/blob/master/src/Process/NodeCode/Configuration/Description/ConfigurationDescriptionInterface.php) objects. Visit the

:::

## Configuration Value Modifier

fy a configuration value. [ConfigurationValueModifierInterface](https://github.com/cybermantix/feral-core/blob/master/src/Process/NodeCode/Configuration/ValueModifier/ConfigurationValueModifierInterface.php) 
is the interface that can be used to modify a value. This can be used if a template variable or secret is used and replaced when
the value is actually set.

When a configuration value is set into a node, the value 
of the node can be interpreted and processed before being 
set. The value of a configuration can be a key to another
value stored in a database or webservice.

EX: if the value contained secret|abc123 the modifyValue
function can look up the secret by its key abc123 and
store the secret value.

EX: if the value contained db|123 then the actual configuration
value is in the database and the value stored in the node
instance will be replaced with the value in the database.

:::tip

The [**`NodeConfigurationBuilder`**](https://github.com/cybermantix/feral-core/blob/master/src/Process/NodeCode/Configuration/NodeConfigurationBuilder.php) 
can include an array of ConfigurationValueModifiers that can be used for high level
variable manipulation.

:::


## NodeCode Source
A NodeCode Source provides NodeCode classes to the framework. NodeCode can live
in different places in the code. The
[**`NodeCodeSourceInterface`**](https://github.com/cybermantix/feral-core/blob/master/src/Process/NodeCode/NodeCodeSource/NodeCodeSourceInterface.php) 
provides a method to get the NodeCodes classes known to its source. The Core only
has a simple NodeCodeSource where an iterator of NodeCode classes. 


:::tip

Require the [Feral Inline](https://github.com/cybermantix/feral-inline) project and 
the NodeCodeSource will contain all the objects that implement the 
[**`NodeCodeInterface`**](https://github.com/cybermantix/feral-core/blob/master/src/Process/NodeCode/NodeCodeInterface.php) 
and make it available from the [**`NodeCodeSource`**](https://github.com/cybermantix/feral-core/blob/master/src/Process/NodeCode/NodeCodeSource/NodeCodeSource.php)
service.

:::

## NodeCode Factory
The NodeCode Factory collects all of the NodeCode sources and builds a collection of NodeCode.
To get a NodeCode, use the factory and pass the key of the NodeCode to the `getNodeCode` method.
To get all available NodeCode objects use the `getNodeCodes` method.

:::tip

See [**`NodeCodeFactory`**](https://github.com/cybermantix/feral-core/blob/master/src/Process/NodeCode/NodeCodeFactory.php) for details.
:::
