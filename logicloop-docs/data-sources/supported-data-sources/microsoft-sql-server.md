# Microsoft SQL Server

This documentation will guide you through the process of connecting to a Microsoft SQL Server database. To establish a successful connection, you will need to provide specific connection details and, if necessary, configure additional settings.

## Prerequisites

* [ ] Data source [allows access to LogicLoop](../data-sources/deployment-options.md) if necessary
* [ ] [Deployment](../data-sources/deployment-options.md) works for organization and data source
* [ ] LogicLoop user account is an [admin](../../teams/groups-and-permissions.md) to be able to create a data source

## Setup

### Connection Details

<figure><img src="../../.gitbook/assets/Screenshot 2023-10-30 at 12.09.26 PM.png" alt=""><figcaption></figcaption></figure>

#### Data Source Name

The "Data Source Name" is a user-defined name for your database connection. You can use any name you prefer to help you identify this connection within your system.

#### Server

The "Server" is the address or hostname of the Microsoft SQL Server you want to connect to.

#### Port

The "Port" specifies the port number for the SQL Server instance. The default port for SQL Server is 1433.

#### User

The "User" is the username you use to authenticate with the SQL Server.

#### Password

The "Password" is the corresponding password for the user specified above.

#### Database Name

The "Database Name" is the name of the SQL Server database you want to connect to. Ensure that you have the appropriate permissions to access this database.

#### Character Set (Optional)

The "Character Set" option is optional and allows you to specify the character encoding for your database connection. The default character set is UTF-8. You can change this setting if your database requires a different character set.

### Additional Settings

#### Use SSL (Optional)

You have the option to use SSL for secure communication with the SQL Server. By default, this option is unchecked. If you wish to enable SSL, you can check the "Use SSL" checkbox.

#### Verify SSL Certificate (Optional)

By default, the "Verify SSL Certificate" option is checked. This means that the SSL certificate presented by the SQL Server will be verified for authenticity. If you want to bypass SSL certificate verification, you can uncheck this option. However, it's advisable to keep SSL certificate verification enabled for security reasons.
