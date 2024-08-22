# Google Analytics

## Prerequisites

* [ ] Data source [allows access to LogicLoop](../data-sources/deployment-options.md) if necessary
* [ ] [Deployment](../data-sources/deployment-options.md) works for organization and data source
* [ ] LogicLoop user account is an [admin](../../teams/groups-and-permissions.md) to be able to create a data source

## Setup <a href="#create-a-service-account" id="create-a-service-account"></a>

#### Create a Service Account <a href="#create-a-service-account" id="create-a-service-account"></a>

1. Open the [Service accounts page](https://console.cloud.google.com/iam-admin/serviceaccounts). If prompted, select a project.
2. Click **Create service account**.
3. In the Create service account window, type a name for the service account, and select Furnish a new private key. When prompted, select **JSON key file type**. Then click **Create**.

Your new public/private key pair is generated and downloaded to your machine; it serves as the only copy of this key. You are responsible for storing it securely.

#### Enable the API <a href="#enable-the-api" id="enable-the-api"></a>

You will need to enable “Analytics API” for your Google Cloud project.

#### Add service account to the Google Analytics account <a href="#add-service-account-to-the-google-analytics-account" id="add-service-account-to-the-google-analytics-account"></a>

The newly created service account will have an email address that looks similar to: quickstart@PROJECT-ID.iam.gserviceaccount.com Use this email address to [add a user](https://support.google.com/analytics/answer/1009702) to the Google analytics view you want to access via the API. For LogicLoop only [Read & Analyze](https://support.google.com/analytics/answer/2884495) permissions are needed.

#### Create Datasource in LogicLoop <a href="#create-datasource-in-redash" id="create-datasource-in-redash"></a>

Create datasource of “Google Analytics” type with the JSON file generated in the “Create a Service Account” step.

## Queries <a href="#queries" id="queries"></a>

Google Analytics uses JSON document-style queries. You can get an idea of possible field types and dimensions using the [Query Explorer tool](https://ga-dev-tools.appspot.com/query-explorer/). Once you’ve imported data into LogicLoop, you can use the [Query Results Data Source](query-results.md) to examine the output with SQL syntax.

### Example Queries <a href="#example-queries" id="example-queries"></a>

```
{
    "ids": "ga:97038718",
    "start_date": "30daysAgo",
    "end_date": "yesterday",
    "metrics": "ga:newUsers",
    "dimensions": "ga:country",
    "max_results": 10,
    "sort": "-ga:newUsers"
}
```

```
{
    "ids": "ga:97038718",
    "start_date": "30daysAgo",
    "end_date": "yesterday",
    "metrics": "ga:newUsers",
    "dimensions": "ga:date",
    "sort": "-ga:newUsers"
}
```

\
