# FAQs

### Can I write rules that combine data from different sources?

Yes! One of the advantages of LogicLoop is that you can combine data from various sources such as data warehouses, databases, and APIs. In order to do so, first create a separate LogicLoop rule grabbing the data you need from each separate data source. The data generated from those rule runs will be stored as JSON under LogicLoop's [Query Results](data-sources/supported-data-sources/query-results.md) data source. Next, you can [write a meta-query ](data-sources/supported-data-sources/query-results.md)that joins data from two separate rules using SQLite syntax. [View a demo here](https://www.loom.com/share/7a5aef2dfc394cc3a4e71179ba2a6545).

### Can LogicLoop deduplicate data so that I don't take the same action twice on the same entity?

Yes, when you configure your LogicLoop action, you can turn on deduplication to ensure that the action won't run twice on the same data. LogicLoop will deduplicate the data points based on an `id` field returned.&#x20;

You can be very creative with what field you actually want to deduplicate on in your SQL query. For example, you may write `select user_id as id from users` if  you want to deduplicate on a field called `user_id`. You may write `select created_at as id from users` if you want to deduplicate based on time stamp. You may even write `select (user_id || current_date) as id from users` if you don't want to alert on the same user twice in the same day, but you want to alert on them again the next day.&#x20;

![](<.gitbook/assets/Screen Shot 2022-01-13 at 6.18.07 PM.png>)

### Can LogicLoop send customizable Slack notifications?&#x20;

The built in LogicLoop [Slack integration ](actions/destinations/slack.md)supports sending custom Slack notifications to a Slack channel of your choice.  In the Slack notification template, can do things like [embed data](actions/templating.md) and tag a specific user to be pinged by inserting their `<@MEMBERID>` or `<@username>` (with the < > brackets) into the template.

You can also integrate with the Slack API directly using our [webhooks action](actions/destinations/webhooks.md#webhook-builder) to unlock an even [wider array of features the Slack API can support](https://api.slack.com/methods/chat.postMessage). For example, you can:

* [Have your LogicLoop rule ping a different Slack channel](https://api.slack.com/methods/chat.postMessage#arg\_channel) (including Slack Connect channels that are shared with external customers) for each row returned from your data.&#x20;
* Include an [image attachment](https://api.slack.com/methods/chat.postMessage#arg\_attachments) with your Slack message.
* Make your LogicLoop Slack alert a [reply to another thread](https://api.slack.com/methods/chat.postMessage#arg\_thread\_ts).&#x20;

### How can I configure LogicLoop to safety run on my database?

Many of our customers are able to run smoothy with LogicLoop connected to their production databases, but if you're worried about queries hitting your prod database directly, we recommend configuring LogicLoop to connect to either a secondary replica or a read-only user that has limited permissions. You may also choose to connect LogicLoop to your data warehouse instead.&#x20;

The number one thing you should do is practice good SQL hygiene and write efficient queries that fetch only what you need from your database. We recommend adding a `LIMIT 1000` to your queries to limit the rows returned from your data. LogicLoop automatically cuts off queries that run for longer than 15 minutes in order to protect both your database and ours from being overloaded. We also recommend running your queries only as frequently as your need e.g. every day instead of every minute.&#x20;

### How do I send an email notification to each of my customers?&#x20;

First, write a LogicLoop [rule](queries/rules/) that returns the set of customers you wish to notify. Next, create an [action](broken-reference) whose trigger setting is set to **for each row returned**. That way, when your rule runs, it will send a separate email for each customer returned. You can customize the messages sent to each customer using our [templating language](actions/templating.md).&#x20;

### Can LogicLoop send from my own domain instead of hi@getlogicloop.com?

Yes, for advanced users, we can configure your account to send out emails from support@yourdomain.com instead of hi@getlogicloop.com. Please email us at hi@getlogicloop.com if you wish to enable this on your account.

### Can I get alerted when a LogicLoop action fails?

Yes, LogicLoop itself exposes and API of all the events in our system including action logs and rule runs. You can then use the [JSON API](data-sources/supported-data-sources/json-apis.md) data source to query the LogicLoop API and retrieve all failed action logs. Then you can create an [action](broken-reference) that will send you a Slack or email alert on failed action logs. Please contact support@logicloop.com if you wish to gain access to this Beta API. &#x20;

### Can I trigger a LogicLoop rule live via API call?

Yes, you can trigger a LogicLoop rule to run immediately by calling that rule's API endpoint. Contact support@logicloop.com for API access.

### Can I retry failed actions?

We currently do not support retrying individual failed actions but you can simply re-run your rule again.&#x20;

### Can I inject a list from another query or GSheets into my rule?

Yes, you can inject a list intro your SQL query by [parameterizing](queries/rules/more-rule-options.md) the value of that list into your query e.g. `select * from users where category in ({{ categories }})`. In your parameter's configuration, you can select it to automatically populate with values from another query.

![](<.gitbook/assets/Screen Shot 2022-01-13 at 7.06.25 PM.png>)

### The API I want to query returns complex, nested JSON responses. How can I extract the specific fields I need?

You can use [SQL's `JSON_EXTRACT`](https://dev.mysql.com/doc/refman/5.7/en/json-search-functions.html#function\_json-extract) function to extract individual data points from nested lists and dictionaries returned from your complex APIs.&#x20;

### Can I transform my data before the action trigger?&#x20;

Yes, we recommend taking advantage of the power of SQL to transfer your data into the shape you want before the action gets triggered. SQL has many advanced functions like [FORMAT()](https://www.w3schools.com/sql/func\_sqlserver\_format.asp) that can help you transform data into the format you need.&#x20;

### Can I chain LogicLoop actions together?

Yes, you can have the action of one LogicLoop rule trigger another LogicLoop to be run. You can also pass through data from the first rule as parameters into the second rule. In order to enable this, email support@logicloop.com to get access to our Beta API. You will need the API in order to have your first rule trigger another rule by setting up a [webhook action ](actions/destinations/webhooks.md#webhook-builder)that calls the LogicLoop API endpoint that will trigger your second rule.

### Can you share some common analytics templates?

Yes! [Check out our template library here](templates/templates-home.md).

### Do you support integrating with...

In addition to our [pre-built data sources](data-sources/supported-data-sources/) and [pre-built action destinations ](actions/destinations/)we can integrate with any service that exposes an API. That means we can integrate with services like Gmail, Google Calendar, Google Drive, Zapier, Twilio, WhatsApp, Stripe, Sendgrid, Mailchimp, Dropbox, Trello, JIRA, Notion, Airtable, Salesforce, Close, Twitter, Hubspot, Discord, Facebook, Typeform, Asana, Webflow, Shopify, Zendesk, Intercom, ClickSend, Freshworks and more.&#x20;

### Can I login via Google/SSO/SAML?

We offer login via Google as well as SAML (Okta, Auth0, etc). Please support@logicloop.com if you wish to enable this on your account.&#x20;

### How do I set a custom schedule interval?

If you do not see the schedule interval you would like to use (e.g. "Every 3 weeks"), please send an email to [support@logicloop.com](mailto:support@logicloop.com) with a link to your rule and the interval that you want set.

### Can I trigger an action on a data change?

LogicLoop typically works by triggering an action if there is data returned from your SQL query. If on the other hand, you wish to trigger an action only when the data returned from your SQL query changes, you can create your own advanced LogicLoop rule. First, create a rule that fetches the data you are evaluating. Next, create a meta-rule that queries the results of your first rule and compares it to the cached results of that same rule. For example, your meta-rule could look something like this: `select * from query_12 joins cached_query_12 where query_12.status != cached_query_12.status` where `query_12` is the first rule that you wrote with the original data.

### Is my Google Sheets data compliant with Google's [Limited Use Policy](https://developers.google.com/terms/api-services-user-data-policy#additional\_requirements\_for\_specific\_api\_scopes)?

Yes, LogicLoop's use and transfer to any other app of information received from Google Sheets APIs will adhere to the [Google API Services User Data Policy](https://developers.google.com/terms/api-services-user-data-policy#additional\_requirements\_for\_specific\_api\_scopes), including the Limited Use requirements.
