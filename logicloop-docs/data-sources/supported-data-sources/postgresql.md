# PostgreSQL

## Prerequisites

* [ ] Data source [allows access to LogicLoop](../data-sources/deployment-options.md) if necessary
* [ ] [Deployment](../data-sources/deployment-options.md) works for organization and data source
* [ ] LogicLoop user account is an [admin](../../teams/groups-and-permissions.md) to be able to create a data source

## Setup

Connecting your Postgres database to LogicLoop is easy. If you're an admin user, you will be able to go to the Settings panel and add a new data source of type Postgres.

![](<../../.gitbook/assets/Screen Shot 2022-02-08 at 6.43.12 PM.png>)

Next, enter your Postgres database credentials. You can hit the 'Test Connection' button to see if it worked.

![](<../../.gitbook/assets/Screen Shot 2022-05-25 at 10.00.37 AM.png>)

### Getting credentials from Heroku

If you use Heroku, you can find your database credentials by going to your app and clicking on your database Postgres add on.

![](<../../.gitbook/assets/Screen Shot 2022-02-08 at 6.55.01 PM.png>)

Under that database's settings, click on View Credentials.

![](<../../.gitbook/assets/Screen Shot 2022-02-08 at 6.55.38 PM.png>)

Copy and paste the credentials to the corresponding LogicLoop fields.

![](<../../.gitbook/assets/Untitled - 2022-02-08T185732.876.png>)

If your Postgres is hosted by a private space like Heroku Enterprise and requires mTLS for connection, we support that by allowing you to upload your SSL certs and keys under Additional Settings. The key provided must be in either the PKCS-12 or PKCS-8 DER format.

![](<../../.gitbook/assets/Screen Shot 2022-05-11 at 5.31.13 PM.png>)
