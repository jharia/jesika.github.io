# Troubleshooting

### My data is not connecting

First, make sure that all your credentials are correctly entered into our system. Next, the most common issue is that your database might have firewall restrictions that prevent LogicLoop from being able to access it. Check out our [deployment options](data-sources/data-sources/deployment-options.md) to determine which method works for your setup. Email us at hi@getlogicloop.com if you're still having problems.

### My rule does not seem to be triggering any actions

1. Check to see that your SQL query is returning data. If your SQL query does not return any rows, it will not trigger any actions.
2. Check that your action has conditions turned off, or evaluates to `true`. Keep in mind that for actions that are triggered on the entire result set, only the first row is evaluated. For actions that are triggered once for each row, LogicLoop will evaluate the condition for each row independently.&#x20;
3. Check that your action has deduplication turned off, otherwise it will not act upon `ids` it has acted upon in the past.
4. Check your action's history to see if running your rule results in a triggered run. Check your action logs to see if it resulted in an action being triggered and whether that action was successful.

![Run log history](<.gitbook/assets/Screen Shot 2022-01-13 at 4.10.27 PM.png>)

![Action log history](<.gitbook/assets/Screen Shot 2022-01-13 at 4.10.38 PM.png>)

### My queries do not seem to be running on schedule&#x20;

1. Check to see that your query indeed has a schedule set. If you edited your query recently, you may have to be patient and wait until the next run cycle.
2. Inspect its run log history to see when the last time it ran.&#x20;
3. Try running your rule to see if the query itself fails to run. Search your email inbox (including your spam folder) to see if you've received any notification of your queries erroring. If your query errored recently, our system uses an exponential backoff algorithm to determine when to try again, so there might be a delay as it's waiting for your query recover.&#x20;
4. Do you have many intense queries that run very frequently? Some queries, particularly the ones that return > 1000 rows, can be database resource intensive and take over 10 minutes to run. If you have a lot of intense queries that run very frequently e.g. every 1 minute or every 5 minutes, that could overload both our database and yours.

### I'm not seeing my data values in my alert&#x20;

1. Make sure you are embedding variables in your notification template that are actually available according to the [Templating](actions/templating.md) docs. The variables must be formatted exactly as shown in the docs, with all caps like so: `{{ ROW_NAME }}`
2. Check your rule's trigger mode. For rules where you trigger an action once on the entire result set, you will not have access to the `{{ ROW_[property]}}` attribute. Instead, you can access the entire result set at `{{ ROWS }}` or iterate over it as shown in the [Templating](actions/templating.md) page.

### My API calls are failing

LogicLoop is powerful and can trigger API calls to internal and external services. If your API calls are failing, check out the [Action Logs](broken-reference) under the rule run page to get to the error message. Some common cases and resolutions are:

1\. API auth failed: make sure you are passing in the right token and have sufficient permissions to make this call. Also make sure that your auth tokens are passed in the correct format. For most APIs, the Authorization Header Key will be `Authorization` and the auth value may require that you to insert `Bearer` in front of it.

&#x20;                                                  <img src=".gitbook/assets/Screen Shot 2022-01-13 at 4.23.11 PM (4).png" alt="" data-size="original">

2\. JSON body malformed: make sure that you're passing data to the API in the format it expects. Your headers and body must be a [valid JSON structure](https://jsonlint.com/) with double quotes around each key value.

3\. Rate limit exceeded: if you trigger too many actions in a short amount of time, the API service you are calling might rate limit you. To prevent this from happening, you can set a [rate limit](broken-reference) on your LogicLoop [action](broken-reference) in the action's advanced settings panel.

