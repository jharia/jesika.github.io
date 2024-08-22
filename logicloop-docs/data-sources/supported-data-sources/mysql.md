# MySQL

In this guide, we will walk you through the process of connecting to a MySQL database using three different options: MySQL (Azure), MySQL (Amazon RDS), and MySQL.

## Prerequisites

* [ ] Data source [allows access to LogicLoop](../data-sources/deployment-options.md) if necessary
* [ ] [Deployment](../data-sources/deployment-options.md) works for organization and data source
* [ ] LogicLoop user account is an [admin](../../teams/groups-and-permissions.md) to be able to create a data source

## Setup

### Connection Details

<figure><img src="../../.gitbook/assets/Screenshot 2023-10-30 at 12.03.34 PM.png" alt=""><figcaption></figcaption></figure>

#### Data Source Name

The "Data Source Name" is a user-defined name for your database connection. It can be anything you prefer and will help you identify this connection in your system.

#### Host

The "Host" refers to the address or domain name of the MySQL server you want to connect to. This can be an IP address or a domain name.

#### Port

The "Port" is the port number on which the MySQL server is listening for incoming connections. The default port for MySQL is 3306.

#### User

The "User" is the username you use to authenticate with the MySQL server.

#### Password

The "Password" is the corresponding password for the user specified above.

#### Database Name

The "Database Name" is the name of the MySQL database you want to connect to. Make sure you have appropriate permissions to access this database.

### Additional Settings

<figure><img src="../../.gitbook/assets/Screenshot 2023-10-30 at 12.05.15 PM.png" alt=""><figcaption></figcaption></figure>

#### Use SSL (Secure Sockets Layer)

For all three connection options, you have the choice to use SSL for secure communication with the MySQL server. You can enable this feature by checking the "Use SSL" option.

**MySQL (Azure) and MySQL (Amazon RDS)**

If you are connecting to a MySQL database hosted on Azure or Amazon RDS and choose to use SSL, you don't need to upload a certificate file. The SSL configuration will be handled automatically.

**MySQL**

If you are connecting to a regular MySQL database and choose to use SSL, you have the option to upload SSL certificate files. These certificate files are required for secure communication.

#### SSH Tunnel (Optional)

If you need to establish an SSH tunnel for added security or network configuration, you can provide the following details:

* **SSH Username:** The username for the SSH connection.
* **SSH Host:** The address or domain name of the SSH server.
* **SSH Port:** The port number for the SSH server.

{% hint style="info" %}
Please note that using SSH is optional, and you should only configure these settings if you have a specific requirement for an SSH tunnel. If you need the SSH public key, reach out to our support team at **support@logicloop.com**.
{% endhint %}

