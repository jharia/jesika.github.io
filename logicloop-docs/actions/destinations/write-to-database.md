# Write to Database

You can both read from and write to databases with LogicLoop. When you set up a database  as an Action Destination, you can write updates back to your data. This is most commonly used to update the status of a row.&#x20;

Click **+ New Action Destination** and select your database from the **Create a New Action Destination** popup. Then, enter your write-enabled database credentials.&#x20;

![](<../../.gitbook/assets/image (37).png>)

You will now be able to define SQL you want to execute as an action to write back to your database when you create an **Action Subscription** in your rule.&#x20;

![](<../../.gitbook/assets/image (68).png>)

{% hint style="info" %}
**Supported Databases**

PostgreSQL

MySQL

DynamoDB

Snowflake

Microsoft SQL Server

BigQuery

SQLite

Redshift

Databricks

RDS MySQL
{% endhint %}
