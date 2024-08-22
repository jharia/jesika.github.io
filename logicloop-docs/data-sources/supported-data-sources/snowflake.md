# Snowflake

This documentation will guide you through the process of connecting to a Snowflake data source. To establish a successful connection, you will need to provide specific connection details and, if necessary, configure additional settings.

## Prerequisites

* [ ] Data source [allows access to LogicLoop](../data-sources/deployment-options.md) if necessary
* [ ] [Deployment](../data-sources/deployment-options.md) works for organization and data source
* [ ] LogicLoop user account is an [admin](../../teams/groups-and-permissions.md) to be able to create a data source

## Setup

### Connection Details

<figure><img src="../../.gitbook/assets/Screenshot 2023-11-17 at 11.25.57 AM.png" alt=""><figcaption></figcaption></figure>

#### Data Source Name

The "Data Source Name" is a user-defined name for your Snowflake database connection. Choose a name that helps you identify this connection within your system.

#### Account

The "Account" refers to the unique identifier for your Snowflake account. This should be in the format of `org_name-account_name`. Check this [instruction](https://docs.snowflake.com/en/user-guide/admin-account-identifier#format-1-preferred-account-name-in-your-organization) about how to find this info in your Snowflake account.&#x20;

#### User

The "User" is the username associated with your Snowflake account, which you'll use to authenticate and access the Snowflake services.

#### Password

The "Password" is the corresponding password for the user specified above.

#### Warehouse

The "Warehouse" represents the Snowflake computing warehouse that will execute your queries. It's where your data is processed.

#### Database

The "Database" is the name of the Snowflake database you want to connect to. Ensure that you have the necessary permissions to access this database.

#### Region (Optional)

The "Region" is an optional field that specifies the geographical region where your Snowflake account is hosted. It can be used to optimize data access based on proximity.
