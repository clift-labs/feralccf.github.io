---
sidebar_position: 1
id: quick-start
title: Feral Quick Start
---

## Getting Started

Feral is written in PHP and uses Composer and Symfony. Getting started with the free version of Feral is easy.

### Step 1: Start a new symfony project
```shell
# Change the skeleton version to the latest https://packagist.org/packages/symfony/skeleton
composer create-project symfony/skeleton:"7.1.*" my-app
```

### Step 2: Install Feral Inline
```shell
# See packagist for the latest https://packagist.org/packages/feral/inline
composer require feral/inline
```

### Step 3: Create a new process 
Using one custom catalog node and several out of the box catalog nodes, create a new process.

#### Step 3a: Create a catalog node service
:::info
The following example uses a free JSON service to get data. See https://catfact.ninja for their awesome JSON service.
:::

Add the following to your services.yaml file.
```yaml
    feral.catalog.cat_data:
        class: Feral\Core\Process\Catalog\CatalogNode\CatalogNode
        tags: ['feral.catalog_node']
        calls:
            - [setKey, ['cat_data']]
            - [setNodeCodeKey, ['http_data']]
            - [setName, ['Cat Data']]
            - [setGroup, ['Data']]
            - [setDescription, ['Get random facts about cats.']]
            - [setConfiguration, [url: 'https://catfact.ninja/fact']]
```

#### Step 3b: Create the process JSON file
Create the following file api_data_impoort.json in the var/processes directory
```json
{
  "schema_version": 1,
  "key": "api_data_import",
  "version": 1,
  "context": {},
  "nodes": [
    {
      "key": "start",
      "description": "The starting node",
      "catalog_node_key": "start",
      "configuration": {},
      "edges": {
        "ok": "api_data"
      }
    },
    {
      "key": "api_data",
      "description": "Get Cat Data",
      "catalog_node_key": "cat_data",
      "configuration": {},
      "edges": {
        "ok": "info"
      }
    },
    {
      "key": "info",
      "description": "Log a statement",
      "catalog_node_key": "log_info",
      "configuration": {
        "message": "Get the country data"
      },
      "edges": {
        "ok": "stop"
      }
    },
    {
      "key": "stop",
      "description": "Stop",
      "catalog_node_key": "stop",
      "configuration": {},
      "edges": {}
    }
  ]
}
```

### Step 4: Run the process with the console

#### Step 4a: List the available processes
```shell
bin/console feral:list:processes
```
Should return the following
```shell
List the processes
 - api_data_import
```

#### Step 4b: Run the process
```shell
bin/console feral:run api_data_import -vv
```
Should return the following
```
Run Feral Run!
ABOUT:
The Feral system is an open source application composition framework allowing processes to 
be build and run for APIs and other applications. The Feral system was built after a couple 
dozen years working with open source projects and constantly in need of composition to manipulate 
data. If you are one of those who don't think a system like this should exist in PHP, feel free to 
email gotohell@software-is-not-religion.com. The Feral system was conceived in the warped 
brain of Gary Clift.

Process Key: api_data_import
-----------
  CONTEXT
-----------
Context:  was not passed in.
-----------
  PROCESS
-----------
[info] Starting a process with 4 nodes.
[info] Processing Node start
[info] Processing Node api_data
[info] Processing Node info
[info] Get the country data
[info] Processing Node stop
[info] Process Complete
------------
  FINALIZE
------------
Process 'api_data_import' Complete.
```

