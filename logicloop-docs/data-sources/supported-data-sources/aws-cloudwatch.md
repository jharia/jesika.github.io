# AWS CloudWatch

## Prerequisites

* [ ] Data source [allows access to LogicLoop](../data-sources/deployment-options.md) if necessary
* [ ] [Deployment](../data-sources/deployment-options.md) works for organization and data source
* [ ] LogicLoop user account is an [admin](../../teams/groups-and-permissions.md) to be able to create a data source

## Setup <a href="#setup" id="setup"></a>

LogicLoop connects to CloudWatch using the `boto3` client. According to their [documentation](https://boto3.amazonaws.com/v1/documentation/api/latest/guide/quickstart.html) before you can query with LogicLoop:

> \[Y]ou should set up authentication credentials. Credentials for your AWS account can be found in the IAM Console. You can create or use an existing user. Go to manage access keys and generate a new set of keys.

With your `access_key_id` and `secret_access_key` you can set up the CloudWatch and CloudWatch Log Insights data sources.

### Querying CloudWatch <a href="#querying-cloudwatch" id="querying-cloudwatch"></a>

These instructions assume you are familiar with the CloudWatch ad-hoc query language. To make exploring your data easier the schema browser will show which **Namespaces** and **Metrics** you can query.

Your query text must written in [YAML syntax](https://yaml.org/start.html) (not SQL). It should be an array of `MetricDataQuery` objects under a key called `MetricsDataQueries`. When you execute the query LogicLoop converts this array to one or more `get_metric_data()` calls.

Here’s an example that sends two `MetricDataQuery` objects.

```yaml
MetricDataQueries: 
  - Id: database_connections
    MetricStat:
      Metric:
        Namespace: AWS/RDS
        MetricName: DatabaseConnections
      Period: 60
      Stat: Maximum
  - Id: swap_usage
    MetricStat:
      Metric:
        Namespace: AWS/RDS
        MetricName: SwapUsage
      Period: 60
      Stat: Maximum
StartTime: "2020-01-01 00:00:00"
```

To query your CloudWatch data with SQL, first pull data using the YAML syntax. Then use the [Query Results](query-results.md) datasource to filter and sort the results

#### Helpful Links <a href="#helpful-links" id="helpful-links"></a>

To learn more about the CloudWatch ad-hoc query language you can study the following links.

* [`boto3` reference](https://boto3.amazonaws.com/v1/documentation/api/latest/reference/services/cloudwatch.html#CloudWatch.Client.get\_metric\_data)
* [`GetMetricData` API Description](https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API\_GetMetricData.html)
* [`MetricDataQuery` Format](https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API\_MetricDataQuery.html)
* [`MetricStat` Format](https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API\_MetricStat.html)

### Querying CloudWatch Logs Insights <a href="#querying-cloudwatch-logs-insights" id="querying-cloudwatch-logs-insights"></a>

These instructions assume you are familiar with the CloudWatch Logs Insights ad-hoc query language. To make exploring your data easier the schema browser will show which **Log Groups** and **@Fields** you can query. Your query text must be written in [YAML Syntax](https://redash.io/help/data-sources/querying/amazon-cloudwatch) (not SQL). Your query can include the following keys:

| Key             | Type                  |
| --------------- | --------------------- |
| `logGroupName`  | string                |
| `logGroupNames` | array of strings      |
| `startTime`     | integer or timestring |
| `endTime`       | integer or timestring |
| `queryString`   | string                |
| `limit`         | integer               |

Your query _must_ include either a `logGroupName` or `logGroupNames`. When you execute the query LogicLoop converts this object into a `start_query()` call. Here is an example query:

```
startTime: '2020-01-01 00:00'
logGroupNames: ['/ecs/rq-adhoc', '/ecs/rq-scheduled', '/ecs/rq-workers-scheduled']
queryString: 
  filter @message like 'Opened tunnel for <some org id>'
  | parse 'Opened tunnel for <some org id> (<data source id>) with port *' as port
  | fields @timestamp, @logStream
  | sort @timestamp desc
```

#### Helpful Links <a href="#helpful-links" id="helpful-links"></a>

* [Query Syntax](https://boto3.amazonaws.com/v1/documentation/api/latest/reference/services/logs.html#CloudWatchLogs.Client.start\_query).
