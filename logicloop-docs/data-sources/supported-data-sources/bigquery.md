# BigQuery

## Prerequisites

* [ ] Data source [allows access to LogicLoop](../data-sources/deployment-options.md) if necessary
* [ ] [Deployment](../data-sources/deployment-options.md) works for organization and data source
* [ ] LogicLoop user account is an [admin](../../teams/groups-and-permissions.md) to be able to create a data source

## Setup

Before you begin, you need to make sure you have already done the following in your Google Cloud:

1. [Create a service account](https://cloud.google.com/iam/docs/creating-managing-service-accounts#creating) for BigQuery.
2. [Grant BigQuery permission to this service account](https://cloud.google.com/iam/docs/granting-changing-revoking-access#single-role). The least permission required is `BigQuery Data Viewer`. You might also need other permissions like `BigQuery Job User` depending on the query to run.&#x20;
3. [Create a service account key](https://cloud.google.com/iam/docs/creating-managing-service-account-keys#creating) of your service account.&#x20;

Then you can create your BigQuery data source using your service account key.&#x20;

First, you need to specify your BigQuery project ID and upload your service account key into `JSON Key File`.  If you want to preview the dataset schema in query source page, you need to check `Load Schema` option. If your dataset is outside of the US, you need to specify the `Processing Location` , eg. europe-west1. You can find your region name to use from this [document](https://cloud.google.com/bigquery/docs/locations).&#x20;

<figure><img src="../../.gitbook/assets/Screen Shot 2022-09-26 at 2.31.04 PM.png" alt=""><figcaption></figcaption></figure>
