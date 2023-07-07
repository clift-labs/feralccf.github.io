---
id: catalognode-index
title: CatalogNode 
---

Catalog Nodes apply configuration to NodeCode allowing NodeCode to be reused in different
ways. For example, the [ContextValueComparatorNodeCode](/docs/nodes/node-code/ContextValueComparatorNodeCode)
can have many Catalog Nodes that define different common comparators like `Greater Than Zero`, `Is Zero`
or any other comparator that is based on a constant.

## CatalogNode
The [**`CatalogNodeInterface`**](https://github.com/cybermantix/feral-core/blob/master/src/Process/Catalog/CatalogNode/CatalogNodeInterface.php)
interface must be implemented to have a CatalogNode work within the framework. The [**`CatalogNode`**](https://github.com/cybermantix/feral-core/blob/master/src/Process/Catalog/CatalogNode/CatalogNode.php)
implementation can be used with your favorite framework
to add Catalog Nodes via a container and declarative options.

### CatalogNode Class
You can add catalog node classes to your code, just implement the [**`CatalogNodeInterface`**](https://github.com/cybermantix/feral-core/blob/master/src/Process/Catalog/CatalogNode/CatalogNodeInterface.php).
If you are using the Feral Inline package with Symfony, all classes that implement the `CatalogNodeInterface` interface
will automatically be included in the catalog.

### CatalogNode Decorator

Since Catalog Nodes are NodeCode with configuration applied, you can use the Attribute
[**`Feral\Core\Process\Attributes\CatalogNodeDecorator`**](https://github.com/cybermantix/feral-core/blob/master/src/Process/Attributes/CatalogNodeDecorator.php) in
your NodeCode clas to add Catalog Nodes to your catalog. See [/node-code/JsonDecodeNodeCode])(this example) to see
a NodeCode that has been decorated with a Catalog Node.

Example: [**`ContextValueComparatorNodeCode`**](https://github.com/cybermantix/feral-core/blob/master/src/Process/NodeCode/Flow/ContextValueComparatorNodeCode.php)
```php 
...
...
...
use Feral\Core\Process\Attributes\CatalogNodeDecorator;

#[CatalogNodeDecorator(
    key:'is_zero',
    name: 'Is Zero',
    group: 'Flow',
    description: 'Compare if a context value is zero.',
    configuration: [self::OPERATOR => Criterion::EQ, self::TEST_VALUE => 0])]
class ContextValueComparatorNodeCode implements NodeCodeInterface
{
    use NodeCodeMetaTrait,
        ResultsTrait,
        ConfigurationTrait,
        ConfigurationValueTrait,
        EmptyConfigurationDescriptionTrait,
        ContextValueTrait,
        BooleanResultsTrait;
...
...
...
```

## Categories
Catalog Nodes are grouped into categories using the group property. It's possible to have hundreds of
nodes in a Catalog so grouping them is critical to keep the catalog orderly.

Categories in the core
* Data
* Flow