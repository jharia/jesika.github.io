# Connect your data source

The first step is to connect your data source to LogicLoop. We support a variety of sources:

* **Data warehouses** such as Big Query, Redshift, and Snowflake
* **Relational databases** such as Postgres and MySQL
* **Non-relational databases** such as MongoDB
* **Any API that returns JSON data** such as Slack, Mixpanel, Stripe, and Twilio

{% hint style="info" %}
Check out our [deployment options](deployment-options.md) to learn about how we connect to your data securely
{% endhint %}

In order to add a new data source, you must be an admin user. Go to the **Settings > Data Sources** tab.&#x20;

![](<../../.gitbook/assets/Screen Shot 2021-09-01 at 8.39.31 AM.png>)

Click **+ New Data Source** to open the **Create a New Data Source** wizard.&#x20;

![](<../../.gitbook/assets/Screen Shot 2021-09-01 at 8.33.01 AM.png>)

Select the type of your data source, and enter the necessary user credentials to configure it. We recommend configuring your data source with a read-only user. Then click test connection to verify the setup.

![](<../../.gitbook/assets/Untitled - 2021-11-05T123445.333.png>)

You can always go back and edit a data source by clicking on it from the **Data Sources** listing page.

### Allowing Access to LogicLoop

Organizations must ensure any configured data sources allow access from LogicLoop's IP addresses. If you make use of inbound firewall rules, please reach out to **support@logicloop.com** for the IP addresses to include in its allowlist. Refer to your data source or firewall documentation for specific guidance.

### View Data Source Rules

When viewing a data source, you can see all rules associated with that data source.

<figure><img src="../../.gitbook/assets/image (2) (1).png" alt=""><figcaption></figcaption></figure>

