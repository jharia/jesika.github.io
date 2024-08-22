# MongoDB

## Prerequisites

* [ ] Data source [allows access to LogicLoop](../data-sources/deployment-options.md) if necessary
* [ ] [Deployment](../data-sources/deployment-options.md) works for organization and data source
* [ ] LogicLoop user account is an [admin](../../teams/groups-and-permissions.md) to be able to create a data source

## Setup

LogicLoop supports non-relational databases like MongoDB as a datasource.

You'll first [connect your datasource](../data-sources/) and select your MongoDB datasource from the sources dropdown in your query interface. All you need is to enter your Mongo connection string and database name.

![](<../../.gitbook/assets/Untitled - 2021-11-12T114050.408.png>)

Write your MongoDB query as a valid JSON object. LogicLoop will convert it into either a [`db.collection.find()`](https://docs.mongodb.com/manual/reference/method/db.collection.find/) call or a [`db.collection.aggregate()`](https://docs.mongodb.com/manual/reference/method/db.collection.aggregate/) call. Here’s how your JSON object is mapped and sent to MongoDB:

| MongoDB Token                  | Where to write in LogicLoop                           |
| ------------------------------ | ----------------------------------------------------- |
| `db`                           | On the data source setup screen                       |
| `collection`                   | Add a `collection` key in your query object           |
| `query`                        | Add a `query` key in your query object                |
| `projection`                   | Add a `fields` key in your query object               |
| `.sort() method`               | Add a `sort` key in your query object                 |
| `.skip() method`               | Add a `skip` key in your query object                 |
| `.limit() method`              | Add a `limit` key in your query object                |
| `db.collection.count()` method | Use a `count` key with any value in your query object |

The values you use for each key are passed unmodified as as parameters to MongoDB. A sample query looks like this:

![](<../../.gitbook/assets/image (31).png>)

So LogicLoop will convert this query object...

```
{
	"collection": "people",
	"query": {
	    "views": { "$gt": 1000000 }
	}
}
```

...into this call to MongoDB:

```
db.my_collection.find({"collection": "people", "query": {"views": {"$gt": 10000000 }}})
```

Here are some other examples of MongoDB queries you can write with LogicLoop.

#### Count <a href="#count-query-example" id="count-query-example"></a>

```
{
	"collection": "my_collection",
	"count": true
}
```

#### Aggregation <a href="#aggregation" id="aggregation"></a>

Aggregation uses a syntax similar to the one used in PyMongo. However, to support the correct order of sorting, it uses a regular list for the “$sort” operation:

```
{
	"collection": "things",
	"aggregate": [{
		"$unwind": "$tags"
	}, {
		"$group": {
			"_id": "$tags",
			"count": {
				"$sum": 1
			}
		}
	}, {
		"$sort": [{
			"name": "count",
			"direction": -1
		}, {
			"name": "_id",
			"direction": -1
		}]
	}]
}
```

#### MongoDB Extended JSON Support <a href="#mongodb-extended-json-support" id="mongodb-extended-json-support"></a>

We support [MongoDB Extended JSON](https://docs.mongodb.com/manual/reference/mongodb-extended-json/) along with our own extension - `$humanTime`:

```
{
	"collection": "date_test",
	"query": {
		"lastModified": {
			"$gt": {
				"$humanTime": "3 years ago"
			}
		}
	},
	"limit": 100
}
```

It accepts a human-readable string like the above (“3 years ago”, “yesterday”, etc) or timestamps.

{% hint style="info" %}
The `$humanTime` function is also needed when using [Query Parameters](https://app.gitbook.com/@logicloop/s/docs/\~/drafts/-MjX8-h9MzJg4E\_zFpUn/queries/rules/more-rule-options#parametrize-a-rule) of type Date or Date/Time with MongoDB.

When using a Date (or Date Range) parameter, wrap it with a `$humanTime` object: `{{param}}` becomes `{"$humanTime": "{{param}} 00:00"}` (the 00:00 suffix is needed only with Date parameters, skip for Date Time parameters).
{% endhint %}

#### MongoDB Filtering <a href="#mongodb-filtering" id="mongodb-filtering"></a>

You can add filters to Mongo queries by projecting a column with the ‘::filter’ keyword added on to the end.

```
{
	"collection": "zipcodes",
	"aggregate": [{
		"$project": {
			"_id": "$_id",
			"city": "$city",
			"loc": "$loc",
			"pop": "$pop",
			"state::filter": "$state"
		}
	}]
}
```

The above example will show a ‘State’ column, and allow you to filter on this column.

### Troubleshooting <a href="#troubleshooting" id="troubleshooting"></a>

#### Sort exceeded memory limit of 104857600 bytes <a href="#sort-exceeded-memory-limit-of-104857600-bytes" id="sort-exceeded-memory-limit-of-104857600-bytes"></a>

> Sort exceeded memory limit of 104857600 bytes, but did not opt in to external sorting. Aborting operation. Pass allowDiskUse:true to opt in.

In MongoDB, [the in-memory sorting have a limit of 100M](https://stackoverflow.com/questions/26375017/mongo-error-when-using-aggregation-sort-exceeded-memory-limit), to perform a large sort, you need enable `allowDiskUse` option to write data to a temporary files for sorting.

To enable the `allowDiskUse` option, just add the option to your query:

```
{
  ...
  "allowDiskUse": true
}
```
