# Databricks

## Prerequisites

* [ ] Data source [allows access to LogicLoop](../data-sources/deployment-options.md) if necessary
* [ ] [Deployment](../data-sources/deployment-options.md) works for organization and data source
* [ ] LogicLoop user account is an [admin](../../teams/groups-and-permissions.md) to be able to create a data source

## Setup <a href="#setup" id="setup"></a>

LogicLoop can connect to both Databricks clusters and SQL Endpoints. Consult the [Databricks Documentation](https://docs.databricks.com/integrations/bi/jdbc-odbc-bi.html#get-server-hostname-port-http-path-and-jdbc-url) for how to obtain the **Host**, **HTTP Path**, and an **Access Token** for your endpoint.

![Databricks Data Source Setup Screen](https://redash.io/assets/images/docs/databricks-setup-screen.png)

### Schema Browser <a href="#schema-browser" id="schema-browser"></a>

The Databricks query runner uses a custom built schema browser which allows you to switch between databases on the endpoint and see column types for each field.

![Databricks Data Source Setup Screen](https://redash.io/assets/images/docs/databricks-schema-browser.png)

Unlike other query runners, the Databricks schema browser fetches table and column names on-demand as you navigate from one database to another. If you mostly use one database this will be fine.

But if you explore the schema across multiple databases you may experience delays as each database is fetched separately.

Schemas are cached for one hour. You may wish to schedule a hourly job to warm those caches.

You can do this with any REST API tool as follows:

```bash
curl --request GET \
  --url http://<logicloop host>/api/databricks/databases/<data-source-id>/<database-name>/tables?refresh \
  --header 'Authorization: Key <admin-api-key>' \
```

### Auto Limit <a href="#auto-limit" id="auto-limit"></a>

The Databricks query runner also includes a checkbox beneath the query editor which will append a `LIMIT 1000` statement to your query automatically by default. This helps in case you accidentally run `SELECT * FROM` some large table with enough results to crash the front-end.

### Multiple Statement Support <a href="#multiple-statement-support" id="multiple-statement-support"></a>

The Databricks query runner allows you to execute multiple statements terminated with a semicolon `;` in one query window.

Only one table of query results can be displayed from a query.

This is useful for setting session / cluster configuration variables prior to executing the query on your cluster.

```sql
set use_cached_result = False;

SELECT count(*) FROM some_db.some_table
```



{% hint style="info" %}
**Pro tip**: When you pull connection credentials, connect to your [Databricks SQL Warehouse](https://docs.databricks.com/en/sql/admin/create-sql-warehouse.html) vs [All-Purpose Clusters](https://docs.databricks.com/en/clusters/index.html). You should see the same data in either place through the [Unity Catalog](https://www.databricks.com/product/unity-catalog).

If you can, connect to a [SQL Serverless Warehouse](https://docs.databricks.com/en/serverless-compute/index.html) since it's faster and less expensive. Serverless has built-in SQL optimizations for running repeated queries, and will use Databricks-optimized compute resources. If you don't have a Serverless Warehouse, you can use a Pro warehouse.
{% endhint %}

