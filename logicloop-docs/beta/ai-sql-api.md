# AI SQL API

{% hint style="warning" %}
#### Beta features are available to users before official release. Your testing and feedback are an enormous help, please leave any feedback or bug reports you have at support@logicloop.com. Note that beta features are subject to change.
{% endhint %}

LogicLoop's AI SQL capabilities are available via API if you wish to use AI to generate SQL in your own application. First, if you haven't already created a LogicLoop account [you can do so here](https://app.logicloop.com/setup).&#x20;

View the entire collection here [![Run in Postman](https://run.pstmn.io/button.svg)](https://app.getpostman.com/run-collection/22799714-ce94ed72-ebd6-4b85-ad5d-f0ece7a5c84a?action=collection%2Ffork\&collection-url=entityId%3D22799714-ce94ed72-ebd6-4b85-ad5d-f0ece7a5c84a%26entityType%3Dcollection%26workspaceId%3D0597b094-e6c6-4b98-97b2-555b71433459) and a [Getting started with LogicLoop AI SQL API Demo ](https://www.loom.com/share/e6652b5f00ab4b40896073b5d299de29)

<figure><img src="https://cdn.loom.com/sessions/thumbnails/e6652b5f00ab4b40896073b5d299de29-with-play.gif" alt=""><figcaption><p>Getting started with LogicLoop AI SQL API</p></figcaption></figure>

## Generate SQL based on a natural language request

You can call our SQL generation endpoint in order to generate SQL based on a user request.&#x20;

```yaml
Method: POST
URL: https://app.logicloop.com/<YOUR_COMPANY_SLUG>/api/v1/ai/query_generate 
Authorization: Key <YOUR_API_KEY>
Params:
    prompt: A description of the data you're looking for
    model: One of oa-v1, oa-v2, oa-v2-16k, oa-v3 or ant-v1. Defaults to oa-v1.
    data_source_type: One of postgres, mysql, redshift, snowflake, big_query or oracle
    data_schema: A list of dictionaries representing your data schema
```

Be sure to replace `<YOUR_COMPANY_SLUG>` which you can find by logging into your dashboard and looking at the URL:

<figure><img src="../.gitbook/assets/Screenshot 2023-05-30 at 10.03.57 AM.png" alt=""><figcaption></figcaption></figure>

You can find `<YOUR API_KEY>` by going to Settings > Users > click on your profile > copy the API Key.

<figure><img src="../.gitbook/assets/Untitled - 2023-05-30T100923.300.png" alt=""><figcaption></figcaption></figure>

You can use either the basic or advanced data schema format below depending on the level of granularity you are looking for.&#x20;

**Data schema format (basic):**

```json
[
	{
		"table_name": "table_1",
		"columns": [
			{"name": "col_1"},
			{"name": "col_2"},
			{"name": "col_3"}
		]
	},
	{
		"table_name": "table_2",
		"columns": [
			{"name": "col_1"},
			{"name": "col_2"},
			{"name": "col_3"}
		]
	}
]

```

Example:

```json
[
	{
		"table_name": "users",
		"columns": [
			{"name": "name"},
			{"name": "id"},
			{"name": "email"}
		]
	},
	{
		"table_name": "orders",
		"columns": [
			{"name": "product"},
			{"name": "id"},
			{"name": "amount"},
			{"name": "status"}
		]
	}
]
```

**Data schema format (advanced):**

```json
[
	{
		"table_name": "table_1",
		"columns": [
			{
				"name": "col_1",
				"type": "type_1",
				"description": "description_1",
				"constraint": "primary key"
			},
			{
				"name": "col_2",
				"type": "type_2",
				"description": "description_2"
			},
			{
				"name": "col_3",
				"type": "type_3",
				"description": "description_3"
			}
		]
	},
	{
		"table_name": "table_2",
		"columns": [
			{
				"name": "col_1",
				"type": "type_1",
				"description": "description_1",
				"constraint": "primary key"
			},
			{
				"name": "col_2",
				"type": "type_2",
				"description": "description_2",
				"constraint": "foreign key references table_1(col_1)"
			},
			{
				"name": "col_3",
				"type": "type_3",
				"description": "description_3"
			}
		]
	}
]
```

Example:

```json
[
	{
		"table_name": "users",
		"columns": [
			{
				"name": "name",
				"type": "string",
				"description": "The users given name"
			},
			{
				"name": "id",
				"type": "int",
				"description": "The users unique identifier",
				"constraint": "primary key"
			},
			{
				"name": "email",
				"type": "string",
				"description": "The users contact email address"
			}
		]
	},
	{
		"table_name": "orders",
		"columns": [
			{
				"name": "id",
				"type": "int",
				"description": "The orders unique identifier",
				"constraint": "primary key"
			},
			{
				"name": "user_id",
				"type": "int",
				"description": "The id of the user who this order belongs to",
				"constraint": "foreign key references users(id)"
			},
			{
				"name": "amount",
				"type": "int",
				"description": "The total price of the order in USD"
			},
			{
				"name": "status",
				"type": "enum(canceled, pending, completed)",
				"description": "The shipping status of this order"
			}
		]
	}
]

```

**Sample CURL request**

<pre class="language-bash" data-overflow="wrap" data-line-numbers><code class="lang-bash">curl -X POST https://app.logicloop.com/<a data-footnote-ref href="#user-content-fn-1">&#x3C;YOUR_COMPANY_SLUG></a>/api/v1/ai/query_generate -H "Authorization: Key &#x3C;YOUR_API_KEY>" -d '{"prompt":"Help me find invalid emails","data_source_type":"postgres", "data_schema": [{"table_name": "users", "columns": [{"name": "name"}, {"name": "id"}, {"name": "email"}]}]}' 
</code></pre>

Response

{% code overflow="wrap" %}
```json
{"query_response":"SELECT name, id, email\nFROM users\nWHERE email NOT LIKE '%@%.%';\n"}
```
{% endcode %}





[^1]: 
