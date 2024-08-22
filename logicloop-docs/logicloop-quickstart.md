---
description: Learn how to set up your first LogicLoop rule in minutes.
---

# LogicLoop Quickstart

LogicLoop lets you set up alerts and automations on your data, without writing code. This quickstart guide will show you how you can set up a Slack alert when a business threshold is exceeded.

<figure><img src=".gitbook/assets/Frame 2 (1).png" alt=""><figcaption><p>LogicLoop can help connect your business data to actions</p></figcaption></figure>

## **1. Connect your data source**

Log in to LogicLoop, and hi if you need a setup link.&#x20;

LogicLoop can read and combine data from databases, Google Sheets and API-based SaaS apps.&#x20;

To add a new data source, you must be an admin user. Go to the **Settings > Data Sources** tab. Click **+ New Data Source** to open the **Create a New Data Source** wizard. Select the type of your data source, and enter the necessary user credentials to configure it. Then click **Test Connection** to verify the setup.&#x20;

For a deeper dive into connecting datasources, refer to the [Connect your datasource section](data-sources/data-sources/) in the docs.

<figure><img src=".gitbook/assets/image (18).png" alt=""><figcaption><p>Step 1: Connecting to a data source</p></figcaption></figure>

### 2. Write or use AI to generate your first rule

LogicLoop lets you write SQL-based rules as queries on your data to manage your business processes. First, navigate to the **Rules** tab on the left sidebar. Here you'll see a listing of all existing Rules with useful metadata about the status of their last runs. Click **+ New Rule** on the top right corner to start a new query, and enter your SQL.&#x20;

Our AI Query Generator lets you convert plain English text to a SQL query, so you can write rules even without any technical knowledge. To use Query Generator, open a new rule. In the top right, select **AI Query Helper -> Query Generator.** For example, you can say "Show all merchants and amounts with a large transaction over $10000" You can also choose which tables to run the query on.&#x20;

Important: Remember to hit **Publish** on the top right for your query before moving to the next step.

For a deeper dive, read the [Write a rule](queries/rules/) section of our docs.&#x20;

{% hint style="info" %}
This feature is powered by OpenAI. If you use this feature, only the text of your SQL query or your data schema format will be sent to OpenAI. None of your actual data will be sent.
{% endhint %}

<figure><img src=".gitbook/assets/image (17).png" alt=""><figcaption><p>Using AI Generator to write SQL queries from natural language text</p></figcaption></figure>

## 3. Run it on a schedule and Trigger actions

Once you have a query, you can run it on a schedule, every 1 minute to every month, from the bottom left tab **Schedule and Action > Run Schedule**&#x20;

<figure><img src=".gitbook/assets/image (9).png" alt=""><figcaption><p>Running your rule on a schedule</p></figcaption></figure>

Now, click **+ Add Action**, and select **Trigger Action > For each row returned** and click **Create Action**. Go the Destinations tab on the left, click + Action Destination on the top right, and follow the steps to create a Slack integration and then create a Slack Action Destination.&#x20;

Then come back to your rule, click View Action on the bottom left and click + Add to connect this new Slack Action Destination. Select the channel you want to post alerts to from your list, and use our templating syntax to customize your alert, like the example below.&#x20;

For more details, refer to the [Set up an action](actions/actions.md) section of the docs.

<figure><img src=".gitbook/assets/image (12).png" alt=""><figcaption><p>Configuring your Slack alert with custom fields</p></figcaption></figure>

Now click Run Rule Now, and you should see your Slack alert show up like this:&#x20;

<figure><img src=".gitbook/assets/image (14).png" alt=""><figcaption></figcaption></figure>

That's it! You'll also see a complete history of all Action Logs in your rule run, so you can keep track of what ran.&#x20;

<figure><img src=".gitbook/assets/image (6).png" alt=""><figcaption></figcaption></figure>

