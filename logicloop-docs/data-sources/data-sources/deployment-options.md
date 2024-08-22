# Deployment options

LogicLoop is [SOC2 Type II Compliant](../../security-and-legal/security.md) and handles your data with the most stringent levels of care.&#x20;

{% hint style="info" %}
We don't store the all data from the sources that you connect directly on our servers. Instead, we make a connection request to your database and only retrieve the information that is needed. Results retrieved are temporarily stored in our encrypted AWS RDS instance and deleted after 30 days. We don’t share/sell your data to any third parties.&#x20;
{% endhint %}

Depending on your company's security policies, you may wish to explore one or more of our following deployment options:

### Option 1: Connecting your data directly

The fastest option to get started is signing up for our SaaS product and simply [entering your database credentials](./) to integrate directly with LogicLoop. Some strategies for doing this for security-sensitive companies:

* If your database has a firewall such that it can only connect to a pre-defined set of IP addresses, you will need to whitelist our IP addresses. Email hi@getlogicloop.com for a list of our static IP addresses.
* Connect LogicLoop to your secondary database instead of your primary
* Connect LogicLoop to your data warehouse instead of your production database&#x20;
* Create a specific user with read-only permissions, or permissions to only read from specific tables.&#x20;

![](<../../.gitbook/assets/Frame 1 (2).svg>)

### Option 2: Set up an SSH tunnel via bastion host

#### SSH tunnel

Some companies may have stricter firewall policies. Instead of LogicLoop connecting to your database directly, we can set up an SSH tunnel to connect to your database behind a bastion host.&#x20;

![](<../../.gitbook/assets/Frame 2.svg>)

To enable this option, we assume you have a database that lies behind a firewall, protected by a bastion host that has access to the database. You will want to create a LogicLoop specific user in your bastion host with our public key so we can SSH into the bastion host to connect to the database. Please email us at hi@getlogicloop.com if you would like to get this set up.

#### Reverse SSH tunnel

{% hint style="warning" %}
Reverse SSH tunneling is available for [Enterprise](https://www.logicloop.com/pricing) customers
{% endhint %}

A reverse SSH tunnel is similar to a regular SSH tunnel, except instead of LogicLoop SSH-ing into your bastion host, your bastion host SSHs into LogicLoop's application and creates a connection between your database port and LogicLoop's port to establish the connection.



![](<../../.gitbook/assets/Frame 4.svg>)

To enable this option, we assume you have a database that lies behind a firewall, protected by a bastion host that has access to the database. Next, we will share with you credentials for SSH-ing into your LogicLoop instance. Within your bastion host, you can then set up an autossh connection to forward connections from your database port to LogicLoop's port. Please email us at hi@getlogicloop.com if you would like to get this set up.

### Option 3: On-Premises deployment

The most conservative security option is to host your LogicLoop application completely on your own company's infrastructure. LogicLoop's software is cleanly packed up into Docker containers so we can give you access to our application's underlying source code and you can run the entire application in your own local cloud network. LogicLoop never accesses or touches any of your internal data.

![](<../../.gitbook/assets/Frame 6 (1).svg>)

Our application is packaged in Docker containers for ease of deployment in any cloud environment. We also provide AWS AMIs for ease of spin-up for those in the AWS environment. Email us at hi@getlogicloop.com to get started.&#x20;
