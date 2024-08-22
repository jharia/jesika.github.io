---
description: Retrieve data from any API source and write queries on top of it using SQL
---

# API data (JSON)

## Prerequisites

* [ ] Data source [allows access to LogicLoop](../data-sources/deployment-options.md) if necessary
* [ ] [Deployment](../data-sources/deployment-options.md) works for organization and data source
* [ ] LogicLoop user account is an [admin](../../teams/groups-and-permissions.md) to be able to create a data source

## API Data Source

LogicLoop lets you query any API that returns data in a JSON format as a data source. That means you can query services like Slack, Mixpanel, Stripe, and Twilio to retrieve data and write rules on top of that data using SQL.

First, create a new API (JSON) based **Data Source** and enter any Authorization information needed.

![](<../../.gitbook/assets/Screen Shot 2021-09-06 at 12.44.16 PM.png>)

{% hint style="info" %}
For most APIs, you will enter "Authorization" as the Authorization Header Key. However, some APIs give their auth header a different name such as "Authorization-Token" or "X-Token" or "Service-X-Token" etc.&#x20;

For most APIs, the Authorization Header Value will be your API key or token e.g "XXXXXX". However, some APIs require you to append the word "Bearer XXXXXX" or "Basic XXXXXX" before your token.
{% endhint %}

Now, all you have to do is create a new rule and express your API call in YAML format. The results of that API call will be parsed as JSON into the results table below.

![](<../../.gitbook/assets/Screen Shot 2021-09-06 at 12.38.40 PM.png>)

In this example, we made an API call to retrieve a channel's conversation history on Slack:

```yaml
url: "https://slack.com/api/conversations.history"
params:
    channel: "C01M88G0NDX"
path:
    messages
```

This API call is equivalent to running something like this via CURL:

```
curl "https://slack.com/api/conversations.history?channel=C01MP8G0NDC" -H "Authorization: XXXXXX" 
```

The Slack API will return a result that looks something like this.&#x20;

```javascript
{
    "ok": true,
    "messages": {
        type: "message",
        subtype: "bot_message",
        text: null,
        ts: 16309440202,
        username: "logicloop",
        ...
    }
    ...
}
```

We've added the `path: messages` setting in order to access the nested messages object. The results populate this table below:

![](<../../.gitbook/assets/Screen Shot 2021-09-06 at 12.55.02 PM.png>)

You must format your query in YAML syntax. Parameters that are available include:&#x20;

* `url (string)` - the URL endpoint you want to hit
* `method (string)` - the HTTP method to use (default: `get`)
* `headers (dictionary)` - headers to send with the request
* `auth (array)` - basic authentication username/password (e.g: `[username, password]`)
* `params (dictionary)` - query string parameters to add to the URL path
* `data (dictionary)` -  values to be sent as the request body
* `json (dictionary)` - same as `data` except that it's converted to JSON
* `fields (array)` - specific fields you want to pick from the results&#x20;

Here is an example of a sample POST request:

```yaml
url: "https://myendpoint.com/api/users"
method: post
headers:
    X-Token: "XXXXXXXXXXXXXXXX"
data:
    name: "Maddie"
    email: "maddie@gmail.com"
```

Now that you've retrieved data from your API source, you can [set up an action ](../../actions/actions.md)to trigger directly from the data.



## Read from Slack API

### Get an API token&#x20;

#### Create a pre-configured app

The most common way of interacting with the Slack API is by creating a Slack App Integration. Begin by navigating to the this tutorial on [How to quickly get and use a Slack API token.](https://api.slack.com/tutorials/tracks/getting-a-token) Scroll down to the _Create a pre-configured app_ section and click _Create app_.

![](<../../.gitbook/assets/slack\_api\_tutorial\_1 (1).png>)

#### Configure your Slack App

Next, select the workspace that you want to interact with (read from or write to), and click _Next_. To give the app a recognizable name and description, click _Edit Configurations_ and change the values of `name` (you will need this later) and `description`. Finally, click _Next_, then _Create_.

![](../../.gitbook/assets/slack\_api\_tutorial\_2.png)

#### Get your Slack API Token

Under _Install your app_, click _Install to Workspace_, and select _Allow_. At the top of the screen you should see a message telling you to head back to the tutorial. Click the link in the message.

{% hint style="info" %}
If the _Install to Workspace_ button is disabled, you may need to add _permission scopes_ to your app. On the left menu, under _Features_, you should see _OAuth & Permissions._ Click that, scroll down to the _Scopes_ section and add the _Bot Scopes_ that fit your use case.
{% endhint %}

![](<../../.gitbook/assets/slack\_api\_tutorial\_3 (1).png>)

If you scroll down to the section _Using your token_, you can find the API token populating a black box (starting with `xoxb`). **Save that token somewhere safe, you will need it.**

&#x20;

![](<../../.gitbook/assets/slack\_api\_tutorial\_4 (1).png>)

### Create the Data Source

Go to _Data Sources_ > _New Data Source_. and choose _API (JSON)_. Give it a name, add `Authorization` as the _Authorization Header_, and use add the API key (with the `Bearer` prefix) as the _Authorization Value_.

![](../../.gitbook/assets/slack\_api\_tutorial\_7.png)

### Query the API

You need the Channel ID to access the messages of a channel. Find it in Slack by clicking on the channel title and scrolling to the bottom of the _About_ tab.&#x20;

Use the URL `https://slack.com/api/conversations.history` with a parameter for the Channel ID. Set the path to `messages`.

![](../../.gitbook/assets/Screenshot\_2022-04-05\_13-56PM.png)

## Query APIs with SQL

Alternatively, once you've retrieved the data you want from your API, you can [write another rule on top of these results](query-results.md) using SQL to combine data or use for further manipulation.&#x20;
