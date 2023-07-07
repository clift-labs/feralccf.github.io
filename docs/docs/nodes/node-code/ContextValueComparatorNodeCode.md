---
sidebar_position: 5
title: context_value_comparator
tags:
- Category:Flow
- Package:Core
---

Test if a value in the context passes a test with an operator.  To see the list of 
available operators see [**`\Feral\Core\Utility\Filter\Criterion`**](https://github.com/cybermantix/feral-core/blob/master/src/Utility/Filter/Criterion.php)

## Key
`context_value_comparator`

## Configuration Keys:
*  `operator`    - The operator used in the test
*  `test_value`  - The value used to test the actual value in the context
*  `context_path` - The key used to retrieve the actual value from the context

### Operator Options
See see [**`\Feral\Core\Utility\Filter\Criterion`**](https://github.com/cybermantix/feral-core/blob/master/src/Utility/Filter/Criterion.php) for details

* eq
* gt
* gte
* lt
* lte
* not
* contains
* in
* nin
* not_empty

## Results
* `true` - The value in the context evaluates to true with the operator and test value
* `false` - The value in the context evaluates to false with the operator and test value


## Process Method
```php
    public function process(ContextInterface $context): ResultInterface
    {
        $contextPath = $this->getRequiredStringConfigurationValue(self::CONTEXT_PATH);
        $testValue = $this->getRequiredConfigurationValue(self::TEST_VALUE);
        $operator = $this->getRequiredConfigurationValue(self::OPERATOR);
        $contextValue = $this->getValueFromContext($contextPath, $context);
        if ($this->comparator->compare($contextValue, $operator, $testValue)) {
            if (is_array($testValue)) {
                $testValue = implode(',', $testValue);
            }
            return $this->result(
                ResultInterface::TRUE,
                'The "%s" context value passes the "%s" test with test value "%s".',
                [$contextValue, $operator, $testValue]
            );
        } else {
            if (is_array($contextValue)) {
                $contextValue = implode(',', $contextValue);
            }
            if (is_array($testValue)) {
                $testValue = implode(',', $testValue);
            }
            return $this->result(
                ResultInterface::FALSE,
                'The "%s" context value does not pass the "%s" test with test value "%s".',
                [$contextValue, $operator, $testValue]
            );
        }
    }
```

## Catalog Node Decorators
```php 
#[CatalogNodeDecorator(
    key:'is_zero',
    name: 'Is Zero',
    group: 'Flow',
    description: 'Compare if a context value is zero.',
    configuration: [self::OPERATOR => Criterion::EQ, self::TEST_VALUE => 0])]
#[CatalogNodeDecorator(
    key:'is_not_zero',
    name: 'Is Not Zero',
    group: 'Flow',
    description: 'Compare if a context value is not zero.',
    configuration: [self::OPERATOR => Criterion::NOT, self::TEST_VALUE => 0])]
#[CatalogNodeDecorator(
    key:'is_greater_than_zero',
    name: 'Is Greater Than Zero',
    group: 'Flow',
    description: 'Compare if a context value is greater than zero.',
    configuration: [self::OPERATOR => Criterion::GT, self::TEST_VALUE => 0])]
#[CatalogNodeDecorator(
    key:'is_greater_than_equal_zero',
    name: 'Is Greater Than or Equal to Zero',
    group: 'Flow',
    description: 'Compare if a context value is greater than or equal to zero.',
    configuration: [self::OPERATOR => Criterion::GTE, self::TEST_VALUE => 0])]
#[CatalogNodeDecorator(
    key:'is_less_than_zero',
    name: 'Is Less Than Zero',
    group: 'Flow',
    description: 'Compare if a context value is less than zero.',
    configuration: [self::OPERATOR => Criterion::LT, self::TEST_VALUE => 0])]
#[CatalogNodeDecorator(
    key:'is_greater_than_equal_zero',
    name: 'Is Less Than or Equal to Zero',
    group: 'Flow',
    description: 'Compare if a context value is less than or equal to zero.',
    configuration: [self::OPERATOR => Criterion::LTE, self::TEST_VALUE => 0])]
```